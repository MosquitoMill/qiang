<template>
    <Row type="flex">
        <i-col span="24">
            <i-col span="12">
                <h4>操作日志</h4>
            </i-col>
            <!--<i-col span="12">-->
                <!--<i-button type="primary" size="small" v-on:click="showEditDialog(0)"-->
                          <!--:disabled="stateManager.buttonLoading"-->
                          <!--class="pull-right" style="margin-top: 10px">添加用户-->
                <!--</i-button>-->
            <!--</i-col>-->
        </i-col>
        <i-col span="24">
            <hr/>
            <div class="demo-spin-article">
                <el-list :stateManager="stateManager"></el-list>
                <Spin fix size="large" v-if="stateManager.refreshList"></Spin>
            </div>
        </i-col>
    </Row>
</template>

<script>
  import _table from './_table.vue'

  export default {
    components: {
      'el-list': _table
    },
    mounted: function () {
      this.$store.dispatch('fetchDepartmentList')
    },
    data: function () {
      return {
        stateManager: {
          refreshList: true,
          editDialogVisible: false,
          editModelId: 0,
          buttonLoading: false
        }
      }
    },
    created: function () {
      this.$store.commit('setTitle', '操作日志')
      this.$store.commit('setBreadCrumbs', [{'name': '操作日志', 'href': '/log', 'active': true}])
    },
    methods: {
      showEditDialog: function (id) {
        this.stateManager.editDialogVisible = true
        this.stateManager.editModelId = id
      }
    }
  }
</script>