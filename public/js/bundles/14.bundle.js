webpackJsonp([14],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_vue__ = __webpack_require__(428);
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
    this.$store.dispatch('fetchCollectionList'), this.$store.dispatch('fetchAdminList');
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
    this.$store.commit('setTitle', '损坏管理');
    this.$store.commit('setBreadCrumbs', [{ 'name': '损坏列表', 'href': '/damage', 'active': true }]);
  },
  methods: {
    showEditDialog: function showEditDialog(id) {
      this.stateManager.editDialogVisible = true;
      this.stateManager.editModelId = id;
    }
  }
});

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(426)
/* template */
var __vue_template__ = __webpack_require__(427)
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
Component.options.__file = "resources\\assets\\js\\pages\\damage\\_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-643adfa9", Component.options)
  } else {
    hotAPI.reload("data-v-643adfa9", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 426:
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
        url: 'api/backend/damage',
        dataKey: 'model',
        attributes: {
          id: 0,
          collection_id: 0,
          damage_people: 0,
          damage_reason: '',
          is_repair: ''
        }
      }),
      isLoading: false,
      ruleValidate: {
        collection_id: [{ required: true, type: 'number', message: '藏品不能为空！', trigger: 'blur' }],
        damage_people: [{ required: true, type: 'number', message: '损坏人不能为空！', trigger: 'blur' }],
        damage_reason: [{ required: true, message: '损坏原因不能为空！', trigger: 'blur' }],
        is_repair: [{ required: true, type: 'number', message: '是否可以修复不能为空！', trigger: 'blur' }]
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
            self.$Notice.success({
              title: '保存成功',
              desc: self.model.name
            });
            self.isLoading = false;
            self.closeDialog();
            self.stateManager.refreshList = true;
          }, function () {
            self.isLoading = false;
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
        return '添加损坏信息';
      } else {
        return '修改损坏信息';
      }
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    adminList: 'adminList',
    collectionList: 'collectionList'
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

/***/ 427:
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
                        { attrs: { label: "藏品", prop: "collection_id" } },
                        [
                          _c(
                            "i-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { clearable: true, placeholder: "请选择藏品" },
                              model: {
                                value: _vm.model.collection_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "collection_id", $$v)
                                },
                                expression: "model.collection_id"
                              }
                            },
                            _vm._l(_vm.collectionList, function(item) {
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
                        { attrs: { label: "损坏人", prop: "damage_people" } },
                        [
                          _c(
                            "i-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { clearable: true, placeholder: "请选择损坏人" },
                              model: {
                                value: _vm.model.damage_people,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "damage_people", $$v)
                                },
                                expression: "model.damage_people"
                              }
                            },
                            _vm._l(_vm.adminList, function(item) {
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
                        { attrs: { label: "损坏原因", prop: "damage_reason" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入损坏原因" },
                            model: {
                              value: _vm.model.damage_reason,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "damage_reason", $$v)
                              },
                              expression: "model.damage_reason"
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
                        { attrs: { label: "可否修复", prop: "is_repair" } },
                        [
                          _c(
                            "i-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { clearable: true },
                              model: {
                                value: _vm.model.is_repair,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "is_repair", $$v)
                                },
                                expression: "model.is_repair"
                              }
                            },
                            [
                              _c("i-option", { key: 0, attrs: { value: 0 } }, [
                                _vm._v("否\n                            ")
                              ]),
                              _vm._v(" "),
                              _c("i-option", { key: 1, attrs: { value: 1 } }, [
                                _vm._v("是\n                            ")
                              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-643adfa9", module.exports)
  }
}

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(429)
/* template */
var __vue_template__ = __webpack_require__(430)
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
Component.options.__file = "resources\\assets\\js\\pages\\damage\\_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7688267d", Component.options)
  } else {
    hotAPI.reload("data-v-7688267d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 429:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    stateManager: {
      type: Object
    }
  },
  data: function data() {
    return {
      list: this.$listDataSource({
        url: 'api/backend/damage'
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
        url: 'api/backend/damage',
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
      console.log(id);
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
    }
  }
});

/***/ }),

/***/ 430:
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
                  _vm._v(_vm._s(props.item.id))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.admin.name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.collection.name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.is_repair === 0 ? "否" : "是"))
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
          _c("th", [_vm._v("ID")]),
          _vm._v(" "),
          _c("th", [_vm._v("损坏人")]),
          _vm._v(" "),
          _c("th", [_vm._v("损坏藏品")]),
          _vm._v(" "),
          _c("th", [_vm._v("可否修复")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-7688267d", module.exports)
  }
}

/***/ }),

/***/ 431:
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
          _c("i-col", { attrs: { span: "12" } }, [_c("h4", [_vm._v("损坏管理")])]),
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
                [_vm._v("添加\n            ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-47fa79c6", module.exports)
  }
}

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(424)
/* template */
var __vue_template__ = __webpack_require__(431)
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
Component.options.__file = "resources\\assets\\js\\pages\\damage\\damage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47fa79c6", Component.options)
  } else {
    hotAPI.reload("data-v-47fa79c6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});