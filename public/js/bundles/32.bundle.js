webpackJsonp([32],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__table_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'el-dialog': __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default.a,
        'el-list': __WEBPACK_IMPORTED_MODULE_1__table_vue___default.a
    },
    data: function data() {
        return {
            stateManager: {
                refreshList: true,
                editDialogVisible: false,
                editModelId: 0,
                buttonLoading: false
            }
        };
    },
    created: function created() {
        this.$store.commit('setTitle', '产品分类管理');
        this.$store.commit('setBreadCrumbs', [{ 'name': '产品分类列表', 'href': '/product-category', 'active': true }]);
    },
    methods: {
        showEditDialog: function showEditDialog(id) {
            this.stateManager.editDialogVisible = true;
            this.stateManager.editModelId = id;
        }
    }
});

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(105)
/* template */
var __vue_template__ = __webpack_require__(106)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\product-category\\_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83b75754", Component.options)
  } else {
    hotAPI.reload("data-v-83b75754", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        stateManager: {
            type: Object
        }
    },
    data: function data() {
        return {
            model: this.$modelDataSource({
                url: 'api/backend/product-category',
                dataKey: 'model',
                attributes: {
                    id: 0,
                    name: '',
                    image: ''
                }
            }),
            uploadHeaders: window.uploadHeaders,
            isLoading: false,
            ruleValidate: {
                name: [{ required: true, message: '名称不能为空', trigger: 'blur' }]
            }
        };
    },
    created: function created() {},
    methods: {
        closeDialog: function closeDialog() {
            this.stateManager.editDialogVisible = false;
            this.model.reset();
            this.$refs['model'].resetFields();
            this.$refs['upload'].clearFiles();
            this.stateManager.editModelId = 0;
        },
        uploadSuccessCallback: function uploadSuccessCallback(response, file) {
            //上传成功回调
            console.log(file);
            console.log(response);
            if (response.status == 'success') {
                this.model.image = response.path;
            }
        },
        uploadFailedCallback: function uploadFailedCallback(error, file) {
            //上传失败回调
            console.log(error);
            console.log(file);
            this.$Notice.error({
                title: '上传失败！',
                desc: error
            });
        },
        saveModel: function saveModel() {
            var self = this;
            self.$refs['model'].validate(function (valid) {
                if (valid) {
                    console.log('表单验证通过');
                    self.isLoading = true;
                    self.model.save(function () {
                        self.isLoading = false;
                        self.$Notice.success({
                            title: '保存成功',
                            desc: self.model.name
                        });
                        self.closeDialog();
                        self.stateManager.refreshList = true;
                    }, function () {
                        console.log(self.model.errors);
                        self.isLoading = false;
                        _.forOwn(self.model.errors, function (value, key) {
                            if (value) {
                                self.$Notice.error({
                                    title: '保存失败',
                                    desc: value
                                });
                            }
                        });
                    });
                } else {
                    console.log('表单验证失败');
                }
            });
        }
    },
    computed: {
        modalTitle: function modalTitle() {
            if (this.model.id === 0) {
                return '添加产品分类';
            } else {
                return '修改产品分类';
            }
        },
        imgBaseUrl: function imgBaseUrl() {
            return window.Laravel.imgBaseUrl;
        }
    },
    watch: {
        'stateManager.editModelId': function stateManagerEditModelId(newValue) {
            var self = this;
            this.model.fetch(newValue, function () {
                self.stateManager.buttonLoading = false;
                self.stateManager.editDialogVisible = true;
            }, function () {
                self.stateManager.buttonLoading = false;
                self.$Notice.error({
                    title: '数据加载超时',
                    desc: '请尝试刷新页面，并仔细检查网络链接状况或联系技术人员！'
                });
            });
        }
    }
});

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "create-edit-container" } },
    [
      _c(
        "Modal",
        {
          attrs: { title: _vm.modalTitle, "mask-closable": false },
          on: { "on-cancel": _vm.closeDialog },
          model: {
            value: _vm.stateManager.editDialogVisible,
            callback: function($$v) {
              _vm.$set(_vm.stateManager, "editDialogVisible", $$v)
            },
            expression: "stateManager.editDialogVisible"
          }
        },
        [
          _c(
            "i-form",
            {
              ref: "model",
              attrs: { model: _vm.model, rules: _vm.ruleValidate }
            },
            [
              _c(
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c(
                    "i-col",
                    { attrs: { span: "24" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "名称", prop: "name" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入名称" },
                            model: {
                              value: _vm.model.name,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "name", $$v)
                              },
                              expression: "model.name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c(
                    "i-col",
                    { attrs: { span: "24" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "上传图片" } },
                        [
                          _c(
                            "Upload",
                            {
                              ref: "upload",
                              staticStyle: { "margin-top": "40px" },
                              attrs: {
                                type: "drag",
                                action: "api/backend/data/fill-upload",
                                headers: _vm.uploadHeaders,
                                "on-success": _vm.uploadSuccessCallback,
                                "on-error": _vm.uploadFailedCallback,
                                data: { file_path: "product-category" },
                                "max-size": 10240,
                                format: ["jpg", "jpeg", "png"]
                              }
                            },
                            [
                              _vm.model.image == "" || _vm.model.image == null
                                ? _c(
                                    "div",
                                    { staticStyle: { padding: "20px 0" } },
                                    [
                                      _c("Icon", {
                                        staticStyle: { color: "#3399ff" },
                                        attrs: {
                                          type: "ios-cloud-upload",
                                          size: "52"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("点击或将文件拖拽到这里上传")])
                                    ],
                                    1
                                  )
                                : _c("div", [
                                    _c("img", {
                                      staticStyle: { "max-width": "100%" },
                                      attrs: {
                                        src:
                                          _vm.imgBaseUrl + "/" + _vm.model.image
                                      }
                                    })
                                  ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c("i-col", { attrs: { span: "24" } }, [
                    _c(
                      "div",
                      { staticClass: "pull-right" },
                      [
                        _c(
                          "i-button",
                          {
                            attrs: { type: "ghost" },
                            on: { click: _vm.closeDialog }
                          },
                          [_vm._v("取消")]
                        ),
                        _vm._v(" "),
                        _c(
                          "i-button",
                          {
                            attrs: { type: "primary", loading: _vm.isLoading },
                            on: { click: _vm.saveModel }
                          },
                          [_vm._v("确定")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-83b75754", module.exports)
  }
}

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(109)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\product-category\\_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cb122fa0", Component.options)
  } else {
    hotAPI.reload("data-v-cb122fa0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        stateManager: {
            type: Object
        }
    },
    data: function data() {
        return {
            list: this.$listDataSource({
                url: 'api/backend/product-category'
            }),
            searchConfig: {
                items: {
                    keyword: ''
                },
                status: true,
                complex: false
            },
            model: this.$modelDataSource({
                url: 'api/backend/product-category',
                dataKey: 'model',
                attributes: {
                    id: 0
                }
            }),
            query: {}
        };
    },
    methods: {
        showEditDialog: function showEditDialog(id) {
            this.stateManager.editModelId = id;
            this.stateManager.buttonLoading = true;
        },
        changeQuery: function changeQuery(query) {
            this.query = query;
            this.stateManager.refreshList = true;
        },
        deleteModel: function deleteModel(modelId, modelName) {
            var self = this;
            this.$Modal.confirm({
                title: '删除确认',
                content: '确认删除' + modelName + '吗？删除后无法恢复',
                loading: true,
                onOk: function onOk() {
                    self.model.reset();
                    self.model.uuid = modelId;
                    self.model.destroy(function () {
                        self.$Modal.remove();
                        self.stateManager.refreshList = true;
                        self.$Notice.success({
                            title: '删除成功',
                            desc: modelName + '已删除'
                        });
                    });
                },
                onCancel: function onCancel() {
                    console.log('取消删除');
                }
            });
        }
    },
    computed: {
        tableList: function tableList() {
            var self = this;
            if (this.stateManager.refreshList) {
                this.list.fetch(self.query, function () {
                    self.stateManager.refreshList = false;
                });
            }
            return this.list;
        },
        imgBaseUrl: function imgBaseUrl() {
            return window.Laravel.imgBaseUrl;
        }
    }
});

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vue-table",
    {
      attrs: {
        "data-source": _vm.tableList,
        "search-config": _vm.searchConfig
      },
      on: { "on-query": _vm.changeQuery },
      scopedSlots: _vm._u([
        {
          key: "search",
          fn: function(props) {
            return [
              _c("i-input", {
                attrs: { placeholder: "请输入关键字" },
                model: {
                  value: props.items.keyword,
                  callback: function($$v) {
                    _vm.$set(props.items, "keyword", $$v)
                  },
                  expression: "props.items.keyword"
                }
              })
            ]
          }
        },
        {
          key: "tbody",
          fn: function(props) {
            return [
              _c("tr", [
                _c("td", [
                  _c("img", {
                    attrs: {
                      src:
                        _vm.imgBaseUrl +
                        "/" +
                        props.item.image +
                        "?x-oss-process=image/resize,m_fixed,h_70,w_70"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.name))
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "col-lg-3",
                    staticStyle: { "vertical-align": "middle" }
                  },
                  [
                    _c(
                      "Tooltip",
                      { attrs: { content: "编辑", placement: "top" } },
                      [
                        _c(
                          "i-button",
                          {
                            attrs: {
                              type: "text",
                              disabled: _vm.stateManager.buttonLoading
                            },
                            on: {
                              click: function($event) {
                                _vm.showEditDialog(props.item.id)
                              }
                            }
                          },
                          [_c("Icon", { attrs: { type: "edit", size: "16" } })],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "Tooltip",
                      { attrs: { content: "删除", placement: "top" } },
                      [
                        _c(
                          "i-button",
                          {
                            attrs: {
                              type: "text",
                              disabled: _vm.stateManager.buttonLoading
                            },
                            on: {
                              click: function($event) {
                                _vm.deleteModel(props.item.id, props.item.name)
                              }
                            }
                          },
                          [
                            _c("Icon", {
                              attrs: { type: "trash-a", size: "16" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]
          }
        }
      ])
    },
    [
      _c("template", { attrs: { slot: "header" }, slot: "header" }, [
        _c("tr", [
          _c("th", [_vm._v("缩略图")]),
          _vm._v(" "),
          _c("th", [_vm._v("名称")]),
          _vm._v(" "),
          _c("th", [_vm._v("操作")])
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cb122fa0", module.exports)
  }
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Row",
    { attrs: { type: "flex" } },
    [
      _c(
        "i-col",
        { attrs: { span: "24" } },
        [
          _c("i-col", { attrs: { span: "12" } }, [
            _c("h4", [_vm._v("产品分类列表 ")])
          ]),
          _vm._v(" "),
          _c(
            "i-col",
            { attrs: { span: "12" } },
            [
              _c(
                "i-button",
                {
                  staticClass: "pull-right",
                  staticStyle: { "margin-top": "10px" },
                  attrs: {
                    type: "primary",
                    size: "small",
                    disabled: _vm.stateManager.buttonLoading
                  },
                  on: {
                    click: function($event) {
                      _vm.showEditDialog(0)
                    }
                  }
                },
                [_vm._v("添加产品分类")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("i-col", { attrs: { span: "24" } }, [
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "demo-spin-article" },
          [
            _c("el-list", { attrs: { stateManager: _vm.stateManager } }),
            _vm._v(" "),
            _vm.stateManager.refreshList
              ? _c("Spin", { attrs: { fix: "", size: "large" } })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("el-dialog", { attrs: { stateManager: _vm.stateManager } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38bd5efc", module.exports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(103)
/* template */
var __vue_template__ = __webpack_require__(110)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\product-category\\productCategory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38bd5efc", Component.options)
  } else {
    hotAPI.reload("data-v-38bd5efc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});