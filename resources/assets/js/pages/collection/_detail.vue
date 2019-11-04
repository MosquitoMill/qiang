<template>
    <div id="create-edit-container">
        <!-- use the modal component, pass in the prop -->
        <Modal v-model="stateManager.detailDialogVisible"
               :title="modalTitle"
               width="60%"
               @on-cancel="closeDialog"
               :styles="{top: '20px'}"
               :mask-closable="false">
            <table class="table table-hover user-info-table">
                <tr>
                    <th colspan="4" class=" table-light">藏品信息查看</th>
                </tr>
                <tr>
                    <td>名称：</td>
                    <td>{{model.name}}</td>
                    <td>年代：</td>
                    <td>{{model.period}}</td>
                </tr>
                <tr>
                    <td>数量：</td>
                    <td>{{model.quantity}}</td>
                    <td>尺寸(长-宽-高/cm)：</td>
                    <td>{{model.size}}</td>
                </tr>
                <tr>
                    <td>质量：</td>
                    <td>{{model.weight}}</td>
                    <td>完残程度：</td>
                    <td>{{model.completion}}</td>
                </tr>
                <tr>
                    <td>分类：</td>
                    <td>{{model.category.name}}</td>
                    <td>质地类别：</td>
                    <td>{{model.texture.name}}</td>
                </tr>
                <tr>
                    <td>入藏日期：</td>
                    <td>{{model.time}}</td>
                    <td>级别：</td>
                    <td>{{getLevel(model.level)}}</td>
                </tr>
                <tr>
                    <td>保存位置：</td>
                    <td>{{model.address}}</td>
                    <td>保存方式：</td>
                    <td>{{model.condition}}</td>
                </tr>
                <tr>
                    <td>形态特征：</td>
                    <td>{{model.pattern}}</td>
                    <td>文字信息：</td>
                    <td>{{model.character}}</td>
                </tr>
                <tr>
                    <td>藏品知识库内容：</td>
                    <td>{{this.content}}</td>
                </tr>
            </table>
            <img :src="imgBaseUrl + '/' + model.picture_address">
            <template slot="footer">
                <Row type="flex">
                    <i-col span="24">
                        <div class="pull-right">
                            <i-button type="ghost" @click="closeDialog">关闭</i-button>
                        </div>
                    </i-col>
                </Row>
            </template>

        </Modal>

    </div>


</template>

<script>

  const dateFormat = require('dateformat')
  export default {
    props: {
      stateManager: {
        type: Object
      }
    },
    data: function () {
      return {
        model: this.$modelDataSource({
          url: '/api/backend/collection',
          dataKey: 'model',
          attributes: {
            id: 0,
            name: '',
            mobile: '',
            certificates_type: 1,
            id_card: '',
            gender: '',
            dob: '',
            qq: '',
            email: '',
            province_id: '',
            city_id: '',
            school_id: '',
            dept_id: '',
            speciality_id: '',
            alipay: '',
            ems: '',
            school_year: ''
          },
        }),
        isLoading: false,
        cityList: [],
        schoolList: [],
        deptList: [],
        specialityList: [],
        content: ''
      }
    },
    created: function () {

    },
    methods: {
      closeDialog: function () {
        this.stateManager.detailDialogVisible = false
        this.model.reset()
        this.stateManager.detailModelId = 0
      },
      getLevel (level) {
        let name
        if (level == '1') {
          name = '一级藏品'
        } else if (level == '2') {
          name = '二级藏品'
        } else if (level == '3') {
          name = '三级藏品'
        } else {
          name = '未设置'
        }
        return name
      },
    },
    computed: {
      modalTitle: function () {
        return '查看藏品信息'
      },
      imgBaseUrl () {
        return window.Laravel.imgBaseUrl
      }
    },
    watch: {
      'stateManager.detailModelId': function (newValue) {
        console.log(newValue)
        let self = this
        axios.get('/api/backend/knowledge-content/' + newValue).then((response) => {
          console.log('回调数据：')
          console.log(response.data.content)
          this.content = response.data.content
        }).catch(function (error) {
        })
        this.model.fetch(newValue, {}, function () {
          self.stateManager.buttonLoading = false
          self.stateManager.detailDialogVisible = true
        }, function () {
          self.stateManager.buttonLoading = false
        })
      }
    }
  }
</script>

<style>

</style>
