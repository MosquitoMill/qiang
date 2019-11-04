webpackJsonp([13],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_vue__ = __webpack_require__(282);
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
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'el-dialog': __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default.a,
    'el-list': __WEBPACK_IMPORTED_MODULE_1__table_vue___default.a
  },
  mounted: function mounted() {
    this.$store.dispatch('fetchStoreList');
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
    this.$store.commit('setTitle', '骑手管理');
    this.$store.commit('setBreadCrumbs', [{ 'name': '骑手列表', 'href': '/delivery-men', 'active': true }]);
  },
  methods: {
    showEditDialog: function showEditDialog(id) {
      this.stateManager.editDialogVisible = true;
      this.stateManager.editModelId = id;
    }
  }
});

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(280)
/* template */
var __vue_template__ = __webpack_require__(281)
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
Component.options.__file = "resources\\assets\\js\\pages\\delivery-men\\_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61310c37", Component.options)
  } else {
    hotAPI.reload("data-v-61310c37", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
//
//
//
//
//
//



var validateMobile = function validateMobile(rule, value, callback) {
  var regex = /^1(3|4|5|7|8)[0-9]{9}$/;
  if (regex.test(value)) {
    callback();
  } else {
    callback(new Error('请输入有效的电话号码！'));
  }
};

var validateIdCard = function validateIdCard(rule, value, callback) {
  var regex = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  if (regex.test(value)) {
    callback();
  } else {
    callback(new Error('请输入正确的身份证号！'));
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    stateManager: {
      type: Object
    }
  },
  data: function data() {
    return {
      model: this.$modelDataSource({
        url: 'api/backend/delivery-men',
        dataKey: 'model',
        attributes: {
          id: 0,
          name: '',
          mobile: '',
          id_card: '',
          password: '',
          store_id: '',
          confirm_password: ''
        }
      }),
      isLoading: false,
      ruleValidate: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        mobile: [{ required: true, validator: validateMobile, trigger: 'blur' }],
        id_card: [{ required: true, validator: validateIdCard, trigger: 'blur' }]
      }
    };
  },
  created: function created() {},
  methods: {
    closeDialog: function closeDialog() {
      this.stateManager.editDialogVisible = false;
      this.model.reset();
      this.$refs['model'].resetFields();
      this.stateManager.editModelId = 0;
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
  computed: _extends({
    modalTitle: function modalTitle() {
      if (this.model.id === 0) {
        return '添加骑手';
      } else {
        return '修改骑手';
      }
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    storeList: 'storeList'
  })),

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

/***/ 281:
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
                        { attrs: { label: "姓名", prop: "name" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入姓名" },
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
                        { attrs: { label: "所属分店", prop: "store_id" } },
                        [
                          _c(
                            "i-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                filterable: true,
                                clearable: true,
                                placeholder: "请选择所属分店"
                              },
                              model: {
                                value: _vm.model.store_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "store_id", $$v)
                                },
                                expression: "model.store_id"
                              }
                            },
                            _vm._l(_vm.storeList, function(item) {
                              return _c(
                                "i-option",
                                { key: item.id, attrs: { value: item.id } },
                                [
                                  _vm._v(
                                    _vm._s(item.name) +
                                      "\n                            "
                                  )
                                ]
                              )
                            })
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
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c(
                    "i-col",
                    { attrs: { span: "24" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "电话", prop: "mobile" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入电话" },
                            model: {
                              value: _vm.model.mobile,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "mobile", $$v)
                              },
                              expression: "model.mobile"
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
                        { attrs: { label: "身份证号", prop: "id_card" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入身份证号" },
                            model: {
                              value: _vm.model.id_card,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "id_card", $$v)
                              },
                              expression: "model.id_card"
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
    require("vue-hot-reload-api")      .rerender("data-v-61310c37", module.exports)
  }
}

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(283)
/* template */
var __vue_template__ = __webpack_require__(284)
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
Component.options.__file = "resources\\assets\\js\\pages\\delivery-men\\_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2199fa2", Component.options)
  } else {
    hotAPI.reload("data-v-f2199fa2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 283:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        stateManager: {
            type: Object
        }
    },
    data: function data() {
        return {
            list: this.$listDataSource({
                url: 'api/backend/delivery-men'
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
                url: 'api/backend/delivery-men',
                dataKey: 'model',
                attributes: {
                    id: 0
                }
            }),
            newPassword: ''
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
        },
        resetPassword: function resetPassword(userId, userName) {
            var self = this;
            self.$Modal.confirm({
                title: '重置登录密码',
                render: function render(h) {
                    return h('div', [h('h4', userName), h('Input', {
                        props: {
                            type: 'password',
                            value: self.newPassword,
                            autofocus: true,
                            placeholder: '请输入新密码！'
                        },
                        on: {
                            input: function input(val) {
                                self.newPassword = _.trim(val);
                            }
                        }
                    })]);
                },
                loading: true,
                onOk: function onOk() {
                    if (self.newPassword.length < 6 || self.newPassword.length > 25) {
                        self.$Modal.remove();
                        self.newPassword = '';
                        self.$Notice.error({
                            title: '错误',
                            desc: '密码长度应该为6-25个字符'
                        });
                    } else {
                        axios.post('api/backend/delivery-men/set-password/' + userId, {
                            password: self.newPassword
                        }).then(function (response) {
                            self.$Modal.remove();
                            self.$Notice.success({
                                title: '重置成功',
                                desc: userName + '已重置密码'
                            });
                            self.newPassword = '';
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                },
                onCancel: function onCancel() {
                    console.log('取消重置');
                    self.newPassword = '';
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
        }
    }
});

/***/ }),

/***/ 284:
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
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.mobile))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(
                    _vm._s(props.item.store != {} ? props.item.store.name : "")
                  )
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
                      { attrs: { content: "密码重置", placement: "top" } },
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
                                _vm.resetPassword(
                                  props.item.id,
                                  props.item.name
                                )
                              }
                            }
                          },
                          [
                            _c("Icon", {
                              attrs: { type: "compose", size: "16" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
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
          _c("th", [_vm._v("姓名")]),
          _vm._v(" "),
          _c("th", [_vm._v("手机号")]),
          _vm._v(" "),
          _c("th", [_vm._v("店铺")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-f2199fa2", module.exports)
  }
}

/***/ }),

/***/ 285:
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
          _c("i-col", { attrs: { span: "12" } }, [_c("h4", [_vm._v("骑手列表 ")])]),
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
                [_vm._v("添加骑手\n            ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-39712d92", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(278)
/* template */
var __vue_template__ = __webpack_require__(285)
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
Component.options.__file = "resources\\assets\\js\\pages\\delivery-men\\deliveryMen.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39712d92", Component.options)
  } else {
    hotAPI.reload("data-v-39712d92", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});