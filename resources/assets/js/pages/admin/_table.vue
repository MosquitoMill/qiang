<template>

    <vue-table :data-source="tableList" :search-config="searchConfig" @on-query="changeQuery">
        <template slot="search" slot-scope="props">
            <i-input v-model="props.items.keyword" placeholder="请输入关键字"></i-input>
        </template>
        <template slot="header">
            <tr>
                <th>用户名</th>
                <th>姓名</th>
                <th>性别</th>
                <th>身份证号</th>
                <th>身份</th>
                <th>部门</th>
                <th>操作</th>
            </tr>
        </template>
        <template slot="tbody" slot-scope="props">
            <tr>
                <td style="vertical-align: middle;">{{props.item.username}}</td>
                <td style="vertical-align: middle;">{{props.item.name}}</td>
                <td style="vertical-align: middle;">{{props.item.gender == 1?'男':'女'}}</td>
                <td style="vertical-align: middle;">{{props.item.identity}}</td>
                <td style="vertical-align: middle;">{{props.item.role == 1 ? '普通用户' : '管理员'}}</td>
                <td style="vertical-align: middle;">{{props.item.department?props.item.department.name:'未添加'}}</td>
                <td class="col-lg-3" style="vertical-align: middle;">
                    <Tooltip content="密码重置" placement="top">
                        <i-button type="text" v-on:click="resetPassword(props.item.id, props.item.name)"
                                  :disabled="stateManager.buttonLoading">
                            <Icon type="compose" size="16"></Icon>
                        </i-button>
                    </Tooltip>
                    <Tooltip content="编辑" placement="top">
                        <i-button type="text" v-on:click="showEditDialog(props.item.id)"
                                  :disabled="stateManager.buttonLoading">
                            <Icon type="edit" size="16"></Icon>
                        </i-button>
                    </Tooltip>
                    <Tooltip content="删除" placement="top">
                        <i-button type="text" v-on:click="deleteModel(props.item.id, props.item.name)"
                                  :disabled="stateManager.buttonLoading">
                            <Icon type="trash-a" size="16"></Icon>
                        </i-button>
                    </Tooltip>
                </td>
            </tr>
        </template>
    </vue-table>

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
        list: this.$listDataSource({
          url: 'api/backend/admin'
        }),
        searchConfig: {
          items: {
            keyword: ''
          },
          status: true,
          complex: false
        },
        query: {},
        model: this.$modelDataSource({
          url: 'api/backend/admin',
          dataKey: 'model',
          attributes: {
            id: 0,
          }
        }),
        newPassword: ''
      }
    },
    methods: {
      showEditDialog: function (id) {
        console.log(id)
        this.stateManager.editModelId = id
        this.stateManager.buttonLoading = true
      },
      changeQuery: function (query) {
        this.query = query
        this.stateManager.refreshList = true
      },
      deleteModel: function (modelId, modelName) {
        let self = this
        this.$Modal.confirm({
          title: '删除确认',
          content: '确认删除' + modelName + '吗？删除后无法恢复',
          loading: true,
          onOk: function () {
            self.model.reset()
            self.model.uuid = modelId
            self.model.destroy(function () {
              self.$Modal.remove()
              self.stateManager.refreshList = true
              self.$Notice.success({
                title: '删除成功',
                desc: modelName + '已删除'
              })
            })
          },
          onCancel: function () {
            console.log('取消删除')
          }
        })
      },
      resetPassword: function (userId, userName) {
        let self = this
        self.$Modal.confirm({
          title: '重置登录密码',
          render: (h) => {
            return h('div', [
              h('h4', userName),
              h('Input', {
                props: {
                  type: 'password',
                  value: self.newPassword,
                  autofocus: true,
                  placeholder: '请输入新密码！',
                },
                on: {
                  input: (val) => {
                    self.newPassword = _.trim(val)
                  }
                }
              })
            ])
          },
          loading: true,
          onOk: function () {
            if (self.newPassword.length < 6 || self.newPassword.length > 25) {
              self.$Modal.remove()
              self.newPassword = ''
              self.$Notice.error({
                title: '错误',
                desc: '密码长度应该为6-25个字符'
              })

            } else {
              axios.post('api/backend/admin/set-password/' + userId, {
                password: self.newPassword
              }).then(function (response) {
                self.$Modal.remove()
                self.$Notice.success({
                  title: '重置成功',
                  desc: userName + '已重置密码'
                })
                self.newPassword = ''
              }).catch(function (error) {
                console.log(error)
              })
            }
          },
          onCancel: function () {
            console.log('取消重置')
            self.newPassword = ''
          }
        })
      }
    },
    computed: {
      tableList () {
        let self = this
        if (this.stateManager.refreshList) {
          this.list.fetch(self.query, function () {
            self.stateManager.refreshList = false
          })
        }
        return this.list
      }
    }
  }
</script>
