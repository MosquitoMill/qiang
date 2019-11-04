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
                        <Form-item label="质地类别名称" prop="name">
                            <i-input type="text" v-model="model.name" placeholder="请输入质地类别名称"></i-input>
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
  export default {
    props: {
      stateManager: {
        type: Object
      }
    },
    data: function () {
      return {
        model: this.$modelDataSource({
          url: 'api/backend/texture',
          dataKey: 'model',
          attributes: {
            id: 0,
            name: ''
          }
        }),
        isLoading: false,
        ruleValidate: {
          name: [
            {required: true, message: '质地类别名称不能为空', trigger: 'blur'}
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
              self.isLoading = false
              self.$Notice.success({
                title: '保存成功',
                desc: self.model.name
              })
              self.closeDialog()
              self.stateManager.refreshList = true
            }, function () {
              console.log(self.model.errors)
              self.isLoading = false
              _.forOwn(self.model.errors, function (value, key) {
                if (value) {
                  self.$Notice.error({
                    title: '保存失败',
                    desc: value
                  })
                }
              })
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
          return '添加质地类别'
        } else {
          return '修改质地类别'
        }
      },
      imgBaseUrl () {
        return window.Laravel.imgBaseUrl
      },
    },
    watch: {
      'stateManager.editModelId': function (newValue) {
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

<style scoped>
    .ivu-form .ivu-form-item-label {
        padding: 10px 12px 5px 0;
    }

</style>