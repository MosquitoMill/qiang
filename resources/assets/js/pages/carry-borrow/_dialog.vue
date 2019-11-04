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
                                      placeholder="请选择专业">
                                <i-option v-for="item in collectionList" :value="item.id"
                                          :key="item.id">{{item.name}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="提借单位" prop="company">
                            <i-input type="text" v-model="model.company" placeholder="请输入提借单位"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="提借时间" prop="borrow_time">
                            <Date-picker type="datetime" :editable="false"
                                         placeholder="请选择提借时间" v-model="model.borrow_time"
                                         style="width: 100%"></Date-picker>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="归还时间" prop="return_time">
                            <Date-picker type="datetime" :editable="false" placeholder="请选择归还时间"
                                         v-model="model.return_time"
                                         style="width: 100%"></Date-picker>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="审核人" prop="auditing_admin">
                            <i-select v-model="model.auditing_admin" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择审核人">
                                <i-option v-for="item in adminList" :value="item.id"
                                          :key="item.id">{{item.name}}
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
          url: 'api/backend/carry-borrow',
          dataKey: 'model',
          attributes: {
            id: 0,
            // admin_id:0,
            collection_id: 0,
            company: '',
            borrow_time: '',
            return_time: '',
            auditing_admin: 0
          }
        }),
        isLoading: false,
        ruleValidate: {
          company: [
            {required: true, message: '提借单位不能为空！', trigger: 'blur'}
          ],
          borrow_time: [
            {required: true,type:'date', message: '提借时间不能为空！', trigger: 'blur'}
          ],
          return_time: [
            {required: true, type:'date', message: '归还时间不能为空！', trigger: 'change'}
          ],
          collection_id: [
            {required: true, type: 'number', message: '藏品不能为空', trigger: 'blur'}
          ],
          auditing_admin: [
            {required: true, type: 'number', message: '审核人不能为空', trigger: 'blur'}
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
          return '添加提借信息'
        } else {
          return '修改提借信息'
        }
      },
      ...mapGetters({
        collectionList: 'collectionList',
        adminList:'adminList'
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
