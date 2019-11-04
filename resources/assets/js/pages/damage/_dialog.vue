<template>
    <div id="create-edit-container">
        <!-- use the modal component, pass in the prop -->
        <Modal v-model="stateManager.editDialogVisible"
               :title="modalTitle"
               @on-cancel="closeDialog"
               :mask-closable="false">

            <i-form ref="model" :model="model" :rules="ruleValidate">

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="藏品" prop="collection_id">
                            <i-select v-model="model.collection_id" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择藏品">
                                <i-option v-for="item in collectionList" :value="item.id"
                                          :key="item.id">{{item.name}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="损坏人" prop="damage_people">
                            <i-select v-model="model.damage_people" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择损坏人">
                                <i-option v-for="item in adminList" :value="item.id"
                                          :key="item.id">{{item.name}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="损坏原因" prop="damage_reason">
                            <i-input type="text" v-model="model.damage_reason" placeholder="请输入损坏原因"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="可否修复" prop="is_repair">
                            <i-select v-model="model.is_repair" style="width: 100%"
                                      :clearable="true"
                                      >
                                <i-option :value="0"
                                          :key="0">否
                                </i-option>
                                <i-option :value="1"
                                          :key="1">是
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>
            </i-form>


            <template slot="footer">
                <Row type="flex">
                    <i-col span="24">
                        <div class="pull-right">
                            <i-button type="ghost" @click="closeDialog">取消</i-button>
                            <i-button type="primary" @click="saveModel" :loading="isLoading">确定</i-button>
                        </div>
                    </i-col>
                </Row>
            </template>

        </Modal>

    </div>
</template>


<script>
  import { mapGetters } from 'vuex'
  export default {
    props: {
      stateManager: {
        type: Object
      }
    },
    data: function () {
      return {
        model: this.$modelDataSource({
          url: 'api/backend/damage',
          dataKey: 'model',
          attributes: {
            id: 0,
            collection_id: 0,
            damage_people: 0,
            damage_reason: '',
            is_repair: ''
          }
        }),
        isLoading: false,
        ruleValidate: {
          collection_id: [
            {required: true,type:'number', message: '藏品不能为空！', trigger: 'blur'}
          ],
          damage_people: [
            {required: true,type:'number', message: '损坏人不能为空！', trigger: 'blur'}
          ],
          damage_reason: [
            {required: true, message: '损坏原因不能为空！', trigger: 'blur'}
          ],
          is_repair: [
            {required: true,type:'number', message: '是否可以修复不能为空！', trigger: 'blur'}
          ]
        }
      }
    },
    created: function () {
    },
    methods: {
      closeDialog: function () {
        this.stateManager.editDialogVisible = false
        this.model.reset()
        this.$refs['model'].resetFields()
        this.stateManager.editModelId = 0
      },
      saveModel: function () {
        let self = this
        self.$refs['model'].validate((valid) => {
          if (valid) {
            console.log('表单验证通过')
            self.isLoading = true
            self.model.save(function () {
              self.$Notice.success({
                title: '保存成功',
                desc: self.model.name
              })
              self.isLoading = false
              self.closeDialog()
              self.stateManager.refreshList = true
            }, function () {
              self.isLoading = false
            })
          } else {
            console.log('表单验证失败')
          }
        })
      }
    },
    computed: {
      modalTitle: function () {
        if (this.model.id === 0) {
          return '添加损坏信息'
        } else {
          return '修改损坏信息'
        }
      },
      ...mapGetters({
        adminList: 'adminList',
        collectionList:'collectionList'
      })
    },
    watch: {
      'stateManager.editModelId':
        function (newValue) {
          let self = this
          this.model.fetch(newValue, function () {
            self.stateManager.buttonLoading = false
            self.stateManager.editDialogVisible = true
          }, function () {
            self.stateManager.buttonLoading = false
            self.$Notice.error({
              title: '数据加载超时',
              desc: '请尝试刷新页面，并仔细检查网络链接状况或联系技术人员！'
            })
          })
        }
    }
  }
</script>
