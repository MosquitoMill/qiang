<template>
    <div id="create-edit-container">
        <!-- use the modal component, pass in the prop -->
        <Modal v-model="stateManager.editDialogVisible"
               :title="modalTitle"
               @on-cancel="closeDialog"
               :mask-closable="false">

            <i-form ref="model" :model="model" :rules="ruleValidate">
                <Row type="flex">
                    <i-col span="11">
                        <Form-item label="藏品名称" prop="name">
                            <i-input type="text" v-model="model.name" placeholder="请输入藏品名称"></i-input>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="藏品年代" prop="period">
                            <Date-picker :editable="false"
                                         placeholder="请选择年代"
                                         type="year"
                                         format="yyyy年"
                                         value-format="yyyy"
                                         v-model="model.period"
                                         style="width: 100%"></Date-picker>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="11">
                        <Form-item label="藏品数量" prop="quantity">
                            <InputNumber :min="1" v-model="model.quantity" placeholder="请输入藏品数量"
                                         style="width: 100%"></InputNumber>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="藏品尺寸" prop="size">
                            <i-input type="text" v-model="model.size" placeholder="请输入藏品尺寸（长-宽-高/cm）"></i-input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="11">
                        <Form-item label="藏品质量" prop="weight">
                            <i-input type="text" v-model="model.weight" placeholder="请输入藏品质量"></i-input>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="藏品完残程度" prop="completion">
                            <i-input type="text" v-model="model.completion" placeholder="请输入藏品完残程度"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="11">
                        <Form-item label="藏品分类" prop="category_id">
                            <i-select v-model="model.category_id" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择分类">
                                <i-option v-for="item in categoryList" :value="item.id"
                                          :key="item.id">{{item.name}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="藏品质地类别" prop="texture_id">
                            <i-select v-model="model.texture_id" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择质地类别">
                                <i-option v-for="item in textureList" :value="item.id"
                                          :key="item.id">{{item.name}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="11">
                        <Form-item label="入藏日期" prop="time">
                            <Date-picker type="date" :editable="false"
                                         placeholder="请选择入藏日期" v-model="model.time"
                                         style="width: 100%"></Date-picker>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="级别" prop="level">
                            <Select v-model="model.level">
                                <Option value="1">一级藏品</Option>
                                <Option value="2">二级藏品</Option>
                                <Option value="3">三级藏品</Option>
                            </Select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="形态特征" prop="pattern">
                            <i-input type="textarea" v-model="model.pattern" placeholder="请输入形态特征"></i-input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="文字信息" prop="character">
                            <i-input type="textarea" v-model="model.character" placeholder="请输入文字信息"></i-input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="保存位置" prop="address">
                            <i-input type="text" v-model="model.address" placeholder="请输入保存位置"></i-input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="保存方式" prop="condition">
                            <i-input type="textarea" v-model="model.condition" placeholder="请输入保存方式"></i-input>
                        </Form-item>
                    </i-col>
                </Row>
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="上传图片" prop="picture_address">
                            <Upload type="drag" action="/api/backend/collection-upload"
                                    ref="upload"
                                    :headers="uploadHeaders"
                                    :on-success="uploadSuccessCallback"
                                    :on-error="uploadFailedCallback"
                                    :max-size="10240"
                                    :format="['jpg', 'jpeg', 'png']"
                                    style="margin-top: 50px">
                                <div style="padding: 20px 0" v-if="model.picture_address == ''">
                                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                    <p>点击或将文件拖拽到这里上传</p>
                                </div>
                                <div v-else>
                                    <img :src="imgBaseUrl + '/' + model.picture_address" style="max-width: 100%">
                                </div>
                                <template slot="tip">
                                    <p v-if="model.sort == 1">请上传尺寸为1158*317格式为jpg，jpeg，png的图片！（大小不超过10M）</p>
                                    <p v-if="model.sort > 1">请上传尺寸为283*285格式为jpg，jpeg，png的图片！（大小不超过10M）</p>
                                </template>
                            </Upload>
                            <i-input type="text" v-model="model.picture_address" hidden></i-input>
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
  import ICol from 'iview/src/components/grid/col'

  export default {
    components: {ICol},
    props: {
      stateManager: {
        type: Object
      }
    },
    data: function () {
      return {
        model: this.$modelDataSource({
          url: 'api/backend/collection',
          dataKey: 'model',
          attributes: {
            id: 0,
            name: '',
            period: '',
            category_id: 0,
            texture_id: 0,
            quantity: 0,
            size: '',
            weight: '',
            completion: '',
            pattern: '',
            character: '',
            picture_address: '',
            source_way: '',
            time: '',
            level: '',
            address: '',
            condition: ''
          }
        }),
        period: '',
        uploadHeaders: window.uploadHeaders,
        isLoading: false,
        ruleValidate: {
          source_way: [
            {required: true, message: '来源方式不能为空！', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '藏品名称不能为空！', trigger: 'blur'}
          ],
          period: [
            {required: true, type: 'date', message: '藏品年代不能为空', trigger: 'change'}
          ],
          category_id: [
            {required: true, type: 'number', message: '分类不能为空！', trigger: 'blur'}
          ],
          texture_id: [
            {required: true, type: 'number', message: '质地类别不能为空！', trigger: 'blur'}
          ],
          quantity: [
            {required: true, type: 'number', message: '藏品数量不能为空！', trigger: 'blur'}
          ],
          size: [
            {required: true, message: '藏品尺寸不能为空！', trigger: 'blur'}
          ],
          weight: [
            {required: true, message: '藏品质量不能为空！', trigger: 'blur'}
          ],
          completion: [
            {required: true, message: '藏品完残程度不能为空！', trigger: 'blur'}
          ],
          pattern: [
            {required: true, message: '藏品形态特征不能为空！', trigger: 'blur'}
          ],
          character: [
            {required: true, message: '藏品文字信息不能为空！', trigger: 'blur'}
          ],
          picture_address: [
            {required: true, message: '请上传藏品图片！', trigger: 'blur'}
          ],
          time: [
            {required: true,type:'date', message: '入藏日期不能为空！', trigger: 'blur'}
          ],
          level: [
            {required: true, message: '级别不能为空！', trigger: 'blur'}
          ],
          condition: [
            {required: true, message: '保存方式不能为空', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '当前位置不能为空', trigger: 'blur'}
          ],
        }
      }
    },
    created: function () {
    },
    methods: {
      changePeriod: function () {
        console.log(this.period)

      },
      uploadSuccessCallback: function (response, file) {
        //上传成功回调
        console.log(file)
        console.log(response)
        if (response.status == 'success') {
          this.model.file_id = response.file_id
          this.model.picture_address = response.path
        }
      },
      uploadFailedCallback: function (error, file) {
        //上传失败回调
        console.log(error)
        console.log(file)
      },
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
            console.log(self.model.period)
            self.isLoading = true
            self.model.period = new Date(self.model.period).format("yyyy");
            console.log(self.model.period)
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
          return '添加藏品'
        } else {
          return '修改藏品'
        }
      },
      ...mapGetters({
        categoryList: 'categoryList',
        textureList: 'textureList'
      }),
      imgBaseUrl () {
        return window.Laravel.imgBaseUrl
      }
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
