webpackJsonp([33],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_vue__ = __webpack_require__(159);
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
        this.$store.commit('setTitle', '订单管理');
        this.$store.commit('setBreadCrumbs', [{ 'name': '订单列表', 'href': '/order', 'active': true }]);
    },
    methods: {
        showEditDialog: function showEditDialog(id) {
            this.stateManager.editDialogVisible = true;
            this.stateManager.editModelId = id;
        }
    }
});

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(157)
/* template */
var __vue_template__ = __webpack_require__(158)
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
Component.options.__file = "resources\\assets\\js\\pages\\order\\_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f063a34", Component.options)
  } else {
    hotAPI.reload("data-v-4f063a34", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 157:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        var _this = this;

        return {
            model: this.$modelDataSource({
                url: 'api/backend/order',
                dataKey: 'model',
                attributes: {
                    id: 0,
                    address: {},
                    store: {},
                    delivery_men: {}
                }
            }),
            columns: [{
                title: '缩略图',
                key: 'thumb_image',
                render: function render(h, params) {
                    return h('img', {
                        attrs: {
                            src: _this.imgBaseUrl + '/' + params.row.thumb_image + '?x-oss-process=image/resize,m_fixed,h_80,w_80'
                        }
                    });
                }
            }, { title: '商品名称', key: 'name' }, { title: '单价', key: 'price' }, {
                title: '数量',
                key: 'pivot',
                render: function render(h, params) {
                    return h('span', params.row.pivot.quantity);
                }
            }, {
                title: '总价',
                key: 'pivot',
                render: function render(h, params) {
                    return h('span', params.row.pivot.total);
                }
            }]
        };
    },
    created: function created() {},
    methods: {
        closeDialog: function closeDialog() {
            this.stateManager.editDialogVisible = false;
            this.model.reset();
            this.stateManager.editModelId = 0;
        }
    },
    computed: {
        modalTitle: function modalTitle() {
            if (this.model.id === 0) {
                return '添加订单';
            } else {
                return '订单详情';
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

/***/ 158:
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
          attrs: {
            title: _vm.modalTitle,
            width: "60%",
            styles: { top: "20px" },
            "mask-closable": false
          },
          on: { "on-cancel": _vm.closeDialog, "on-ok": _vm.closeDialog },
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
            "Tabs",
            [
              _c(
                "Tab-pane",
                { attrs: { label: "订单信息", icon: "information" } },
                [
                  _c(
                    "Row",
                    { attrs: { type: "flex" } },
                    [
                      _c(
                        "i-col",
                        { attrs: { span: "24" } },
                        [
                          _c("Card", { staticStyle: { width: "100%" } }, [
                            _c(
                              "p",
                              { attrs: { slot: "title" }, slot: "title" },
                              [
                                _c("Icon", { attrs: { type: "ios-home" } }),
                                _vm._v(
                                  "\n                                配送信息\n                            "
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-xs-6" }, [
                                _c("p", [
                                  _c("strong", [_vm._v("收货人：")]),
                                  _vm._v(_vm._s(_vm.model.address.receiver))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-xs-6" }, [
                                _c("p", [
                                  _c("strong", [_vm._v("联系电话：")]),
                                  _vm._v(_vm._s(_vm.model.address.mobile))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-xs-12" }, [
                                _c("p", [
                                  _c("strong", [_vm._v("地址：")]),
                                  _vm._v(
                                    _vm._s(
                                      _vm.model.address.province_cn +
                                        _vm.model.address.city_cn +
                                        _vm.model.address.address
                                    )
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "row",
                                staticStyle: { "margin-top": "20px" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-xs-12" },
                                  [
                                    _c("i-table", {
                                      attrs: {
                                        columns: _vm.columns,
                                        data: _vm.model.products
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "row",
                                staticStyle: { "margin-top": "20px" }
                              },
                              [
                                _c("div", { staticClass: "col-xs-6" }, [
                                  _c("p", [
                                    _c("strong", [_vm._v("店铺：")]),
                                    _vm._v(_vm._s(_vm.model.store.name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-xs-6" }, [
                                  _c("p", { staticClass: "pull-right" }, [
                                    _c("strong", [
                                      _vm._v("总计："),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            color: "red",
                                            "font-size": "large"
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.model.total))]
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ])
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
              _vm.model.delivery_men
                ? _c(
                    "Tab-pane",
                    { attrs: { label: "骑手信息", icon: "android-bicycle" } },
                    [
                      _c(
                        "Row",
                        { attrs: { type: "flex" } },
                        [
                          _c(
                            "i-col",
                            { attrs: { span: "24" } },
                            [
                              _c("Card", { staticStyle: { width: "100%" } }, [
                                _c(
                                  "p",
                                  { attrs: { slot: "title" }, slot: "title" },
                                  [
                                    _c("Icon", {
                                      attrs: { type: "ios-information" }
                                    }),
                                    _vm._v(
                                      "\n                                骑手信息\n                            "
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-xs-6" }, [
                                    _c("p", [
                                      _c("strong", [_vm._v("骑手姓名：")]),
                                      _vm._v(
                                        _vm._s(_vm.model.delivery_men.name)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-xs-6" }, [
                                    _c("p", [
                                      _c("strong", [_vm._v("骑手电话：")]),
                                      _vm._v(
                                        _vm._s(_vm.model.delivery_men.mobile)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-xs-6" }, [
                                    _c("p", [
                                      _c("strong", [_vm._v("骑手身份证号码：")]),
                                      _vm._v(
                                        _vm._s(_vm.model.delivery_men.id_card)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-xs-6" }, [
                                    _c("p", [
                                      _c("strong", [_vm._v("预计送达时间：")]),
                                      _vm._v(_vm._s(_vm.model.delivery_desc))
                                    ])
                                  ])
                                ])
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
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("template", { attrs: { slot: "footer" }, slot: "footer" })
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
    require("vue-hot-reload-api")      .rerender("data-v-4f063a34", module.exports)
  }
}

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(160)
/* template */
var __vue_template__ = __webpack_require__(161)
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
Component.options.__file = "resources\\assets\\js\\pages\\order\\_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e1c62dc", Component.options)
  } else {
    hotAPI.reload("data-v-4e1c62dc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 160:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        stateManager: {
            type: Object
        }
    },
    data: function data() {
        return {
            list: this.$listDataSource({
                url: 'api/backend/order'
            }),
            searchConfig: {
                items: {
                    sn: '',
                    status: ''
                },
                status: true,
                complex: false
            },
            statusList: [{ label: '未支付', value: 0 }, { label: '待配送', value: 1 }, { label: '配送中', value: 2 }, { label: '已完成', value: 3 }, { label: '已取消', value: 4 }],
            model: this.$modelDataSource({
                url: 'api/backend/order',
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
        getOrderStatus: function getOrderStatus(val) {
            var statusLabel = ['未支付', '待配送', '配送中', '已完成', '已取消'];
            return statusLabel[val];
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

/***/ 161:
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
              _c(
                "i-form",
                { attrs: { "label-width": 80 } },
                [
                  _c(
                    "Row",
                    [
                      _c(
                        "i-col",
                        { attrs: { span: "11" } },
                        [
                          _c(
                            "Form-item",
                            { attrs: { label: "订单编号" } },
                            [
                              _c("i-input", {
                                attrs: { placeholder: "请输入订单编号" },
                                model: {
                                  value: props.items.sn,
                                  callback: function($$v) {
                                    _vm.$set(props.items, "sn", $$v)
                                  },
                                  expression: "props.items.sn"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "i-col",
                        { attrs: { span: "11", offset: "2" } },
                        [
                          _c(
                            "Form-item",
                            { attrs: { label: "订单状态" } },
                            [
                              _c(
                                "i-select",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    filterable: true,
                                    clearable: true,
                                    placeholder: "请选择订单状态"
                                  },
                                  model: {
                                    value: props.items.status,
                                    callback: function($$v) {
                                      _vm.$set(props.items, "status", $$v)
                                    },
                                    expression: "props.items.status"
                                  }
                                },
                                _vm._l(_vm.statusList, function(item) {
                                  return _c(
                                    "i-option",
                                    {
                                      key: item.value,
                                      attrs: { value: item.value }
                                    },
                                    [_vm._v(_vm._s(item.label))]
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
                  )
                ],
                1
              )
            ]
          }
        },
        {
          key: "tbody",
          fn: function(props) {
            return [
              _c("tr", [
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.sn))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.user.name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.address.receiver))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(
                    _vm._s(
                      props.item.delivery_men
                        ? props.item.delivery_men.name
                        : ""
                    )
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.total))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(_vm.getOrderStatus(props.item.status)))
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "col-lg-2",
                    staticStyle: { "vertical-align": "middle" }
                  },
                  [
                    _c(
                      "Tooltip",
                      { attrs: { content: "详情", placement: "top" } },
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
                          [
                            _c("Icon", {
                              attrs: { type: "ios-information", size: "16" }
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
          _c("th", [_vm._v("订单编号")]),
          _vm._v(" "),
          _c("th", [_vm._v("下单人")]),
          _vm._v(" "),
          _c("th", [_vm._v("收货人")]),
          _vm._v(" "),
          _c("th", [_vm._v("骑手")]),
          _vm._v(" "),
          _c("th", [_vm._v("总额")]),
          _vm._v(" "),
          _c("th", [_vm._v("状态")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-4e1c62dc", module.exports)
  }
}

/***/ }),

/***/ 162:
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
          _c("i-col", { attrs: { span: "12" } }, [_c("h4", [_vm._v("订单列表 ")])]),
          _vm._v(" "),
          _c("i-col", { attrs: { span: "12" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-1370b64a", module.exports)
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(155)
/* template */
var __vue_template__ = __webpack_require__(162)
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
Component.options.__file = "resources\\assets\\js\\pages\\order\\order.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1370b64a", Component.options)
  } else {
    hotAPI.reload("data-v-1370b64a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});