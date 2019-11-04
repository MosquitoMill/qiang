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
                        <Form-item label="用户名" prop="username">
                            <i-input type="text" v-model="model.username" placeholder="请输入用户名"></i-input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="姓名" prop="name">
                            <i-input type="text" v-model="model.name" placeholder="请输入昵称"></i-input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="性别" prop="gender">
                            <RadioGroup v-model="model.gender">
                                <Radio :label="1">男</Radio>
                                <Radio :label="2">女</Radio>
                            </RadioGroup>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="身份证号" prop="identity">
                            <i-input type="text" v-model="model.identity" placeholder="请输入身份证号"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="部门" prop="department_id">
                            <i-select v-model="model.department_id" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择专业">
                                <i-option v-for="item in departmentList" :value="item.id"
                                          :key="item.id">{{item.name}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>

                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="身份" prop="role">
                            <Select v-model="model.role">
                                <Option :value="1">普通用户</Option>
                                <Option :value="2">管理员</Option>
                            </Select>
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
          url: 'api/backend/admin',
          dataKey: 'model',
          attributes: {
            id: 0,
            name: '',
            username: '',
            gender: 0,
            identity: '',
            role: 0,
            department_id: 0
          }
        }),
        isLoading: false,
        ruleValidate: {
          username: [
            {required: true, message: '用户名不能为空！', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '姓名不能为空！', trigger: 'blur'}
          ],
          gender: [
            {required: true,type:'number', message: '性别不能为空！', trigger: 'change'}
          ],
          identity: [
            {required: true, message: '身份证号不能为空！', trigger: 'blur'}
          ],
          role: [
            {required: true,type:'number', message: '身份不能为空！', trigger: 'blur'}
          ],
          department_id: [
            {required: true,type:'number', message: '部门不能为空', trigger: 'blur'}
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
          return '添加用户'
        } else {
          return '修改用户'
        }
      },
      ...mapGetters({
        departmentList: 'departmentList'
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
