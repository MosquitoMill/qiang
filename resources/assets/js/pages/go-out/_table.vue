<template>

    <vue-table :data-source="tableList" :search-config="searchConfig" @on-query="changeQuery">
        <template slot="search" slot-scope="props">
            <i-input v-model="props.items.keyword" placeholder="请输入关键字"></i-input>
        </template>
        <template slot="header">
            <tr>
                <th>ID</th>
                <th>藏品名称</th>
                <th>出入人员</th>
                <th>出入时间</th>
                <th>操作</th>
            </tr>
        </template>
        <template slot="tbody" slot-scope="props">
            <tr>
                <td style="vertical-align: middle;">{{props.item.id}}</td>
                <td style="vertical-align: middle;">{{props.item.collection.name}}</td>
                <td style="vertical-align: middle;">{{props.item.admin.name}}</td>
                <td style="vertical-align: middle;">{{props.item.time}}</td>
                <td class="col-lg-3" style="vertical-align: middle;">
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
          url: 'api/backend/go-out'
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
          url: 'api/backend/go-out',
          dataKey: 'model',
          attributes: {
            id: 0,
          }
        })
      }
    },
    methods: {
      showEditDialog: function (id) {
        console.log(id)
        this.stateManager.editModelId = id
        this.stateManager.buttonLoading = true
      },
      detailModel: function (id) {
        console.log(id)
        this.stateManager.detailModelId = id
        this.stateManager.buttonLoading = true
      },
      changeQuery: function (query) {
        this.query = query
        this.stateManager.refreshList = true
      },
      deleteModel: function (modelId, modelName){
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
