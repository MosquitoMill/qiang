<template>
    <Row type="flex">
        <i-col span="24">
            <i-col span="12">
                <h4>藏品管理</h4>
            </i-col>
            <i-col span="12">
                <i-button type="primary" size="small" v-on:click="showEditDialog(0)"
                          :disabled="stateManager.buttonLoading"
                          class="pull-right" style="margin-top: 10px">添加藏品
                </i-button>
            </i-col>
        </i-col>
        <i-col span="24">
            <hr/>
            <div class="demo-spin-article">
                <el-list :stateManager="stateManager"></el-list>
                <Spin fix size="large" v-if="stateManager.refreshList"></Spin>
            </div>
        </i-col>
        <el-dialog :stateManager="stateManager"></el-dialog>
        <el-detail :stateManager="stateManager"></el-detail>
    </Row>
</template>

<script>
  import _dialog from './_dialog.vue'
  import _table from './_table.vue'
  import _detail from './_detail.vue'

  export default {
    components: {
      'el-dialog': _dialog,
      'el-list': _table,
      'el-detail': _detail
    },
    mounted: function () {
      this.$store.dispatch('fetchDepartmentList')
      this.$store.dispatch('fetchCategoryList')
      this.$store.dispatch('fetchTextureList')
    },
    data: function () {
      return {
        stateManager: {
          refreshList: true,
          editDialogVisible: false,
          detailDialogVisible: false,
          editModelId: 0,
          detailModelId: 0,
          buttonLoading: false
        }
      }
    },
    created: function () {
      this.$store.commit('setTitle', '藏品管理')
      this.$store.commit('setBreadCrumbs', [{'name': '藏品列表', 'href': '/collection', 'active': true}])
    },
    methods: {
      showEditDialog: function (id) {
        this.stateManager.editDialogVisible = true
        this.stateManager.editModelId = id
      }
    }
  }
</script>