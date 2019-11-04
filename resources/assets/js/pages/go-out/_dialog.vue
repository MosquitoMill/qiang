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
                        <Form-item label="出入人员" prop="admin_id">
                            <i-select v-model="model.admin_id" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择出入人员">
                                <i-option v-for="item in adminList" :value="item.id"
                                          :key="item.id">{{item.name}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="出入时间" prop="time">
                            <Date-picker type="datetime" :editable="false"
                                         placeholder="请选择出入时间" v-model="model.time"
                                         style="width: 100%"></Date-picker>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="数量" prop="number">
                            <i-input type="number" v-model="model.number" placeholder="请输入藏品数量"></i-input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="详细描述" prop="remark">
                            <i-input type="textarea" v-model="model.remark" placeholder="请输入详细描述"></i-input>
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
  import ICol from 'iview/src/components/grid/col'

  export default {
    components: {ICol},
    props: {
      stateManager: {
        type: Object
      }
    },
    data: function () {
      return {
        model: this.$modelDataSource({
          url: 'api/backend/go-out',
          dataKey: 'model',
          attributes: {
            id: 0,
            admin_id: '',
            collection_id: '',
            time: '',
            remark: '',
            number: 0,
          }
        }),
        uploadHeaders: window.uploadHeaders,
        isLoading: false,
        ruleValidate: {
          time: [
            {required: true, type: 'date', message: '出入时间不能为空！', trigger: 'change'}
          ],
          admin_id: [
            {required: true, type: 'number', message: '出入人员不能为空！', trigger: 'blur'}
          ],
          collection_id: [
            {required: true, type: 'number', message: '藏品不能为空！', trigger: 'blur'}
          ],
          remark: [
            {required: true, message: '描述不能为空！', trigger: 'blur'}
          ],
          number: [
            {required: true, message: '出入数量不能为空！', trigger: 'blur'}
          ]
        }
      }
    },
    created: function () {
    },
    methods: {
      changePeriod: function () {
        console.log(this.period)

      },
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
          return '添加出入信息'
        } else {
          return '修改出入信息'
        }
      },
      ...mapGetters({
        adminList: 'adminList',
        collectionList: 'collectionList'
      }),
      imgBaseUrl () {
        return window.Laravel.imgBaseUrl
      }
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
