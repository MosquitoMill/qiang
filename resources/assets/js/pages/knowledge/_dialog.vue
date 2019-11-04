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
                        <Form-item label="藏品分类" prop="category_id">
                            <i-select v-model="model.category_id" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择之地类别">
                                <i-option v-for="item in categoryList" :value="item.id"
                                          :key="item.id">{{item.name}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="起始年代" prop="start_date">
                            <Date-picker :editable="false"
                                         placeholder="请选择起始年代"
                                         type="year"
                                         format="yyyy年"
                                         value-format="yyyy"
                                         v-model="model.start_date"
                                         style="width: 100%"></Date-picker>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="终止年代" prop="end_date">
                            <Date-picker :editable="false"
                                         placeholder="请选择终止年代"
                                         type="year"
                                         format="yyyy年"
                                         value-format="yyyy"
                                         v-model="model.end_date"
                                         style="width: 100%"></Date-picker>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="内容" prop="content">
                            <i-input type="textarea" v-model="model.content" placeholder="请输入内容"></i-input>
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
          url: 'api/backend/knowledge',
          dataKey: 'model',
          attributes: {
            id: 0,
            category_id: 0,
            start_date: '',
            end_date: 0,
            content: ''
          }
        }),
        isLoading: false,
        ruleValidate: {
          end_date: [
            {required: true, type: 'date', message: '终止年代不能为空', trigger: 'change'}
          ],
          start_date: [
            {required: true, type: 'date', message: '起始年代不能为空', trigger: 'change'}
          ],
          category_id: [
            {required: true, type: 'number', message: '藏品分类不能为空', trigger: 'blur'}
          ],
          content: [
            {required: true, message: '内容不能为空！', trigger: 'blur'}
          ],
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
            self.model.start_date = new Date(self.model.start_date).format("yyyy-MM-dd hh:mm:ss")
            self.model.end_date = new Date(self.model.end_date).format("yyyy-MM-dd hh:mm:ss")
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
          return '添加知识库信息'
        } else {
          return '修改知识库信息'
        }
      },
      ...mapGetters({
        categoryList: 'categoryList'
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
