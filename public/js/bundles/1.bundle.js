webpackJsonp([1],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(161)
/* template */
var __vue_template__ = __webpack_require__(163)
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
Component.options.__file = "node_modules\\iview\\src\\components\\grid\\col.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79ac999c", Component.options)
  } else {
    hotAPI.reload("data-v-79ac999c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_assist__ = __webpack_require__(162);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//


var prefixCls = 'ivu-col';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'iCol',
    props: {
        span: [Number, String],
        order: [Number, String],
        offset: [Number, String],
        push: [Number, String],
        pull: [Number, String],
        className: String,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object]
    },
    data: function data() {
        return {
            gutter: 0
        };
    },

    computed: {
        classes: function classes() {
            var _ref,
                _this = this;

            var classList = ['' + prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-span-' + this.span, this.span), _defineProperty(_ref, prefixCls + '-order-' + this.order, this.order), _defineProperty(_ref, prefixCls + '-offset-' + this.offset, this.offset), _defineProperty(_ref, prefixCls + '-push-' + this.push, this.push), _defineProperty(_ref, prefixCls + '-pull-' + this.pull, this.pull), _defineProperty(_ref, '' + this.className, !!this.className), _ref)];

            ['xs', 'sm', 'md', 'lg'].forEach(function (size) {
                if (typeof _this[size] === 'number') {
                    classList.push(prefixCls + '-span-' + size + '-' + _this[size]);
                } else if (_typeof(_this[size]) === 'object') {
                    var props = _this[size];
                    Object.keys(props).forEach(function (prop) {
                        classList.push(prop !== 'span' ? prefixCls + '-' + size + '-' + prop + '-' + props[prop] : prefixCls + '-span-' + size + '-' + props[prop]);
                    });
                }
            });

            return classList;
        },
        styles: function styles() {
            var style = {};
            if (this.gutter !== 0) {
                style = {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                };
            }

            return style;
        }
    },
    methods: {
        updateGutter: function updateGutter() {
            var Row = Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["a" /* findComponentUpward */])(this, 'Row');
            if (Row) {
                Row.updateGutter(Row.gutter);
            }
        }
    },
    mounted: function mounted() {
        this.updateGutter();
    },
    beforeDestroy: function beforeDestroy() {
        this.updateGutter();
    }
});

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export oneOf */
/* unused harmony export camelcaseToHyphen */
/* unused harmony export getScrollBarSize */
/* unused harmony export getStyle */
/* unused harmony export firstUpperCase */
/* unused harmony export warnProp */
/* unused harmony export deepCopy */
/* unused harmony export scrollTop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findComponentUpward; });
/* unused harmony export findComponentDownward */
/* unused harmony export findComponentsDownward */
/* unused harmony export hasClass */
/* unused harmony export addClass */
/* unused harmony export removeClass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

const isServer = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer;
// 判断参数是否是其中之一
function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

function camelcaseToHyphen (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// For Modal scrollBar hidden
let cached;
function getScrollBarSize (fresh) {
    if (isServer) return 0;
    if (fresh || cached === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}

// watch DOM change
const MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;
/* unused harmony export MutationObserver */


const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
function getStyle (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch(e) {
        return element.style[styleName];
    }
}

// firstUpperCase
function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}


// Warn
function warnProp(component, prop, correctType, wrongType) {
    correctType = firstUpperCase(correctType);
    wrongType = firstUpperCase(wrongType);
    console.error(`[iView warn]: Invalid prop: type check failed for prop ${prop}. Expected ${correctType}, got ${wrongType}. (found in component: ${component})`);    // eslint-disable-line
}

function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if ( t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if ( t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}



// scrollTop animation
function scrollTop(el, from = 0, to, duration = 500) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000/60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) return;

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}


// Find component downward
function findComponentDownward (context, componentName) {
    const childrens = context.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

// Find components downward
function findComponentsDownward (context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

/* istanbul ignore next */
const trim = function(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

/* istanbul ignore next */
function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/* istanbul ignore next */
function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classes, style: _vm.styles },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79ac999c", module.exports)
  }
}

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_vue__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_vue__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'el-list': __WEBPACK_IMPORTED_MODULE_1__table_vue___default.a,
    'el-detail': __WEBPACK_IMPORTED_MODULE_2__detail_vue___default.a
  },
  mounted: function mounted() {
    this.$store.dispatch('fetchDepartmentList');
    this.$store.dispatch('fetchCategoryList');
    this.$store.dispatch('fetchTextureList');
  },
  data: function data() {
    return {
      stateManager: {
        refreshList: true,
        editDialogVisible: false,
        detailDialogVisible: false,
        editModelId: 0,
        detailModelId: 0,
        buttonLoading: false
      }
    };
  },
  created: function created() {
    this.$store.commit('setTitle', '藏品管理');
    this.$store.commit('setBreadCrumbs', [{ 'name': '藏品列表', 'href': '/collection', 'active': true }]);
  },
  methods: {
    showEditDialog: function showEditDialog(id) {
      this.stateManager.editDialogVisible = true;
      this.stateManager.editModelId = id;
    }
  }
});

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(309)
/* template */
var __vue_template__ = __webpack_require__(310)
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
Component.options.__file = "resources\\assets\\js\\pages\\collection\\_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e1f8150", Component.options)
  } else {
    hotAPI.reload("data-v-5e1f8150", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview_src_components_grid_col__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview_src_components_grid_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iview_src_components_grid_col__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { ICol: __WEBPACK_IMPORTED_MODULE_1_iview_src_components_grid_col___default.a },
  props: {
    stateManager: {
      type: Object
    }
  },
  data: function data() {
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
        source_way: [{ required: true, message: '来源方式不能为空！', trigger: 'blur' }],
        name: [{ required: true, message: '藏品名称不能为空！', trigger: 'blur' }],
        period: [{ required: true, type: 'date', message: '藏品年代不能为空', trigger: 'change' }],
        category_id: [{ required: true, type: 'number', message: '分类不能为空！', trigger: 'blur' }],
        texture_id: [{ required: true, type: 'number', message: '质地类别不能为空！', trigger: 'blur' }],
        quantity: [{ required: true, type: 'number', message: '藏品数量不能为空！', trigger: 'blur' }],
        size: [{ required: true, message: '藏品尺寸不能为空！', trigger: 'blur' }],
        weight: [{ required: true, message: '藏品质量不能为空！', trigger: 'blur' }],
        completion: [{ required: true, message: '藏品完残程度不能为空！', trigger: 'blur' }],
        pattern: [{ required: true, message: '藏品形态特征不能为空！', trigger: 'blur' }],
        character: [{ required: true, message: '藏品文字信息不能为空！', trigger: 'blur' }],
        picture_address: [{ required: true, message: '请上传藏品图片！', trigger: 'blur' }],
        time: [{ required: true, type: 'date', message: '入藏日期不能为空！', trigger: 'blur' }],
        level: [{ required: true, message: '级别不能为空！', trigger: 'blur' }],
        condition: [{ required: true, message: '保存方式不能为空', trigger: 'blur' }],
        address: [{ required: true, message: '当前位置不能为空', trigger: 'blur' }]
      }
    };
  },
  created: function created() {},
  methods: {
    changePeriod: function changePeriod() {
      console.log(this.period);
    },
    uploadSuccessCallback: function uploadSuccessCallback(response, file) {
      //上传成功回调
      console.log(file);
      console.log(response);
      if (response.status == 'success') {
        this.model.file_id = response.file_id;
        this.model.picture_address = response.path;
      }
    },
    uploadFailedCallback: function uploadFailedCallback(error, file) {
      //上传失败回调
      console.log(error);
      console.log(file);
    },
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
          self.model.period = new Date(self.model.period).format("yyyy");
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
        return '添加藏品';
      } else {
        return '修改藏品';
      }
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    categoryList: 'categoryList',
    textureList: 'textureList'
  }), {
    imgBaseUrl: function imgBaseUrl() {
      return window.Laravel.imgBaseUrl;
    }
  }),
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

/***/ 310:
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
                    { attrs: { span: "11" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "藏品名称", prop: "name" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入藏品名称" },
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
                  ),
                  _vm._v(" "),
                  _c(
                    "i-col",
                    { attrs: { span: "11", offset: "2" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "藏品年代", prop: "period" } },
                        [
                          _c("Date-picker", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              editable: false,
                              placeholder: "请选择年代",
                              type: "year",
                              format: "yyyy年",
                              "value-format": "yyyy"
                            },
                            model: {
                              value: _vm.model.period,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "period", $$v)
                              },
                              expression: "model.period"
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
                    { attrs: { span: "11" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "藏品数量", prop: "quantity" } },
                        [
                          _c("InputNumber", {
                            staticStyle: { width: "100%" },
                            attrs: { min: 1, placeholder: "请输入藏品数量" },
                            model: {
                              value: _vm.model.quantity,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "quantity", $$v)
                              },
                              expression: "model.quantity"
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
                        { attrs: { label: "藏品尺寸", prop: "size" } },
                        [
                          _c("i-input", {
                            attrs: {
                              type: "text",
                              placeholder: "请输入藏品尺寸（长-宽-高/cm）"
                            },
                            model: {
                              value: _vm.model.size,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "size", $$v)
                              },
                              expression: "model.size"
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
                    { attrs: { span: "11" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "藏品质量", prop: "weight" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入藏品质量" },
                            model: {
                              value: _vm.model.weight,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "weight", $$v)
                              },
                              expression: "model.weight"
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
                        { attrs: { label: "藏品完残程度", prop: "completion" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入藏品完残程度" },
                            model: {
                              value: _vm.model.completion,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "completion", $$v)
                              },
                              expression: "model.completion"
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
                    { attrs: { span: "11" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "藏品分类", prop: "category_id" } },
                        [
                          _c(
                            "i-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { clearable: true, placeholder: "请选择分类" },
                              model: {
                                value: _vm.model.category_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "category_id", $$v)
                                },
                                expression: "model.category_id"
                              }
                            },
                            _vm._l(_vm.categoryList, function(item) {
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
                  ),
                  _vm._v(" "),
                  _c(
                    "i-col",
                    { attrs: { span: "11", offset: "2" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "藏品质地类别", prop: "texture_id" } },
                        [
                          _c(
                            "i-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                clearable: true,
                                placeholder: "请选择质地类别"
                              },
                              model: {
                                value: _vm.model.texture_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "texture_id", $$v)
                                },
                                expression: "model.texture_id"
                              }
                            },
                            _vm._l(_vm.textureList, function(item) {
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
                    { attrs: { span: "11" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "入藏日期", prop: "time" } },
                        [
                          _c("Date-picker", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              type: "date",
                              editable: false,
                              placeholder: "请选择入藏日期"
                            },
                            model: {
                              value: _vm.model.time,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "time", $$v)
                              },
                              expression: "model.time"
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
                        { attrs: { label: "级别", prop: "level" } },
                        [
                          _c(
                            "Select",
                            {
                              model: {
                                value: _vm.model.level,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "level", $$v)
                                },
                                expression: "model.level"
                              }
                            },
                            [
                              _c("Option", { attrs: { value: "1" } }, [
                                _vm._v("一级藏品")
                              ]),
                              _vm._v(" "),
                              _c("Option", { attrs: { value: "2" } }, [
                                _vm._v("二级藏品")
                              ]),
                              _vm._v(" "),
                              _c("Option", { attrs: { value: "3" } }, [
                                _vm._v("三级藏品")
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
                        { attrs: { label: "形态特征", prop: "pattern" } },
                        [
                          _c("i-input", {
                            attrs: { type: "textarea", placeholder: "请输入形态特征" },
                            model: {
                              value: _vm.model.pattern,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "pattern", $$v)
                              },
                              expression: "model.pattern"
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
                        { attrs: { label: "文字信息", prop: "character" } },
                        [
                          _c("i-input", {
                            attrs: { type: "textarea", placeholder: "请输入文字信息" },
                            model: {
                              value: _vm.model.character,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "character", $$v)
                              },
                              expression: "model.character"
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
                        { attrs: { label: "保存位置", prop: "address" } },
                        [
                          _c("i-input", {
                            attrs: { type: "text", placeholder: "请输入保存位置" },
                            model: {
                              value: _vm.model.address,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "address", $$v)
                              },
                              expression: "model.address"
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
                        { attrs: { label: "保存方式", prop: "condition" } },
                        [
                          _c("i-input", {
                            attrs: { type: "textarea", placeholder: "请输入保存方式" },
                            model: {
                              value: _vm.model.condition,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "condition", $$v)
                              },
                              expression: "model.condition"
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
                        { attrs: { label: "上传图片", prop: "picture_address" } },
                        [
                          _c(
                            "Upload",
                            {
                              ref: "upload",
                              staticStyle: { "margin-top": "50px" },
                              attrs: {
                                type: "drag",
                                action: "/api/backend/collection-upload",
                                headers: _vm.uploadHeaders,
                                "on-success": _vm.uploadSuccessCallback,
                                "on-error": _vm.uploadFailedCallback,
                                "max-size": 10240,
                                format: ["jpg", "jpeg", "png"]
                              }
                            },
                            [
                              _vm.model.picture_address == ""
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
                                          _vm.imgBaseUrl +
                                          "/" +
                                          _vm.model.picture_address
                                      }
                                    })
                                  ]),
                              _vm._v(" "),
                              _c(
                                "template",
                                { attrs: { slot: "tip" }, slot: "tip" },
                                [
                                  _vm.model.sort == 1
                                    ? _c("p", [
                                        _vm._v(
                                          "请上传尺寸为1158*317格式为jpg，jpeg，png的图片！（大小不超过10M）"
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.model.sort > 1
                                    ? _c("p", [
                                        _vm._v(
                                          "请上传尺寸为283*285格式为jpg，jpeg，png的图片！（大小不超过10M）"
                                        )
                                      ])
                                    : _vm._e()
                                ]
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("i-input", {
                            attrs: { type: "text", hidden: "" },
                            model: {
                              value: _vm.model.picture_address,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "picture_address", $$v)
                              },
                              expression: "model.picture_address"
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
    require("vue-hot-reload-api")      .rerender("data-v-5e1f8150", module.exports)
  }
}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(312)
/* template */
var __vue_template__ = __webpack_require__(313)
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
Component.options.__file = "resources\\assets\\js\\pages\\collection\\_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-563ed624", Component.options)
  } else {
    hotAPI.reload("data-v-563ed624", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 312:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    stateManager: {
      type: Object
    }
  },
  data: function data() {
    return {
      list: this.$listDataSource({
        url: 'api/backend/collection'
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
        url: 'api/backend/collection',
        dataKey: 'model',
        attributes: {
          id: 0
        }
      })
    };
  },
  methods: {
    showEditDialog: function showEditDialog(id) {
      console.log(id);
      this.stateManager.editModelId = id;
      this.stateManager.buttonLoading = true;
    },
    detailModel: function detailModel(id) {
      console.log(id);
      this.stateManager.detailModelId = id;
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

/***/ 313:
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
                  _vm._v(_vm._s(props.item.name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.category.name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                  _vm._v(_vm._s(props.item.texture.name))
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
                      { attrs: { content: "查看", placement: "top" } },
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
                                _vm.detailModel(props.item.id)
                              }
                            }
                          },
                          [_c("Icon", { attrs: { type: "eye", size: "16" } })],
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
          _c("th", [_vm._v("ID")]),
          _vm._v(" "),
          _c("th", [_vm._v("名称")]),
          _vm._v(" "),
          _c("th", [_vm._v("分类")]),
          _vm._v(" "),
          _c("th", [_vm._v("质地类别")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-563ed624", module.exports)
  }
}

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(315)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(317)
/* template */
var __vue_template__ = __webpack_require__(319)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\pages\\collection\\_detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-348ca43e", Component.options)
  } else {
    hotAPI.reload("data-v-348ca43e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(316);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("29e29fa4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-348ca43e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./_detail.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-348ca43e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./_detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 317:
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


var dateFormat = __webpack_require__(318);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    stateManager: {
      type: Object
    }
  },
  data: function data() {
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
        }
      }),
      isLoading: false,
      cityList: [],
      schoolList: [],
      deptList: [],
      specialityList: [],
      content: ''
    };
  },
  created: function created() {},
  methods: {
    closeDialog: function closeDialog() {
      this.stateManager.detailDialogVisible = false;
      this.model.reset();
      this.stateManager.detailModelId = 0;
    },
    getLevel: function getLevel(level) {
      var name = void 0;
      if (level == '1') {
        name = '一级藏品';
      } else if (level == '2') {
        name = '二级藏品';
      } else if (level == '3') {
        name = '三级藏品';
      } else {
        name = '未设置';
      }
      return name;
    }
  },
  computed: {
    modalTitle: function modalTitle() {
      return '查看藏品信息';
    },
    imgBaseUrl: function imgBaseUrl() {
      return window.Laravel.imgBaseUrl;
    }
  },
  watch: {
    'stateManager.detailModelId': function stateManagerDetailModelId(newValue) {
      var _this = this;

      console.log(newValue);
      var self = this;
      axios.get('/api/backend/knowledge-content/' + newValue).then(function (response) {
        console.log('回调数据：');
        console.log(response.data.content);
        _this.content = response.data.content;
      }).catch(function (error) {});
      this.model.fetch(newValue, {}, function () {
        self.stateManager.buttonLoading = false;
        self.stateManager.detailDialogVisible = true;
      }, function () {
        self.stateManager.buttonLoading = false;
      });
    }
  }
});

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? 'a'  : 'p',
          tt:   H < 12 ? 'am' : 'pm',
          T:    H < 12 ? 'A'  : 'P',
          TT:   H < 12 ? 'AM' : 'PM',
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occurred and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return dateFormat;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = dateFormat;
  } else {
    global.dateFormat = dateFormat;
  }
})(this);


/***/ }),

/***/ 319:
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
          on: { "on-cancel": _vm.closeDialog },
          model: {
            value: _vm.stateManager.detailDialogVisible,
            callback: function($$v) {
              _vm.$set(_vm.stateManager, "detailDialogVisible", $$v)
            },
            expression: "stateManager.detailDialogVisible"
          }
        },
        [
          _c("table", { staticClass: "table table-hover user-info-table" }, [
            _c("tr", [
              _c(
                "th",
                { staticClass: " table-light", attrs: { colspan: "4" } },
                [_vm._v("藏品信息查看")]
              )
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("名称：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.name))]),
              _vm._v(" "),
              _c("td", [_vm._v("年代：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.period))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("数量：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.quantity))]),
              _vm._v(" "),
              _c("td", [_vm._v("尺寸(长-宽-高/cm)：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.size))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("质量：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.weight))]),
              _vm._v(" "),
              _c("td", [_vm._v("完残程度：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.completion))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("分类：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.category.name))]),
              _vm._v(" "),
              _c("td", [_vm._v("质地类别：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.texture.name))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("入藏日期：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.time))]),
              _vm._v(" "),
              _c("td", [_vm._v("级别：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.getLevel(_vm.model.level)))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("保存位置：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.address))]),
              _vm._v(" "),
              _c("td", [_vm._v("保存方式：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.condition))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("形态特征：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.pattern))]),
              _vm._v(" "),
              _c("td", [_vm._v("文字信息：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.model.character))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("藏品知识库内容：")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(this.content))])
            ])
          ]),
          _vm._v(" "),
          _c("img", {
            attrs: { src: _vm.imgBaseUrl + "/" + _vm.model.picture_address }
          }),
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
                          [_vm._v("关闭")]
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
    require("vue-hot-reload-api")      .rerender("data-v-348ca43e", module.exports)
  }
}

/***/ }),

/***/ 320:
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
          _c("i-col", { attrs: { span: "12" } }, [_c("h4", [_vm._v("藏品管理")])]),
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
                [_vm._v("添加藏品\n            ")]
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
      _c("el-dialog", { attrs: { stateManager: _vm.stateManager } }),
      _vm._v(" "),
      _c("el-detail", { attrs: { stateManager: _vm.stateManager } })
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
    require("vue-hot-reload-api")      .rerender("data-v-73b849bd", module.exports)
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(307)
/* template */
var __vue_template__ = __webpack_require__(320)
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
Component.options.__file = "resources\\assets\\js\\pages\\collection\\collection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73b849bd", Component.options)
  } else {
    hotAPI.reload("data-v-73b849bd", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});