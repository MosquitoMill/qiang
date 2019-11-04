<template>
    <div style="width:1000px;height:500px;" id="data_source_con"></div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'dataSourcePie',
    data () {
      return {
        //
        dataName: [],
        data: []
      }
    },
    mounted () {

    },
    components: {
      //   'el-dialog': _dialog,
      //   'el-list': _table
      //   require('echarts/lib/chart/bar')
      // 引入提示框和标题组件
    },
    // data: function () {
    //   return {
    //     stateManager: {
    //       refreshList: true,
    //       editDialogVisible: false,
    //       editModelId: 0,
    //       buttonLoading: false
    //     }
    //   }
    // },
    created: function () {
      this.$store.commit('setTitle', '统计')
      this.$store.commit('setBreadCrumbs', [{'name': '数据统计', 'href': '/statistics', 'active': true}])
      this.getStatistics()
    },
    methods: {
      showEditDialog: function (id) {
        this.stateManager.editDialogVisible = true
        this.stateManager.editModelId = id
      },
      getStatistics: function () {
        axios.get('/api/backend/statistics').then((response) => {
          console.log('统计数据：')
          // let self = this
          console.log(response.data)
          this.data = response.data
          this.$nextTick(() => {
            var dataSourcePie = echarts.init(document.getElementById('data_source_con'))
            const option = {
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
              },
              legend: {
                orient: 'vertical',
                left: 'right',
                // data: ['ios', 'android', 'pc', 'web', 'others']
              },
              series: [
                {
                  name: '数据统计',
                  type: 'pie',
                  radius: '80%',
                  center: ['50%', '60%'],
                  data: this.data,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            }
            dataSourcePie.setOption(option)
            window.addEventListener('resize', function () {
              dataSourcePie.resize()
            })
          })
          // console.log(self.data)
        }).catch(function (error) {
        })
      }
    }
  }
</script>