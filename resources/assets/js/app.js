
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * 自定义组件
 */
window.ModelDataSource = require('./ModelDataSource');
Vue.use(ModelDataSource);
window.ListDataSource = require('./ListDataSource');
Vue.use(ListDataSource);

/**
 * Vue Router
 */
import router from './router.js';
/**
 * Vuex
 */
import store from './store';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**
 * 引入iview组件库
 */
import iView from 'iview';
Vue.use(iView);

/**
 * 路由加载时进度条
 */
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
});

/**
 * 全局组件
 */
Vue.component('pagination', require('./components/Pagination.vue'));
Vue.component('vue-table', require('./components/Table.vue'));
Vue.component('app', require('./app.vue'));


Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,                 //月份
    'd+': this.getDate(),                    //日
    'h+': this.getHours(),                   //小时
    'm+': this.getMinutes(),                 //分
    's+': this.getSeconds(),                 //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds()             //毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    template: '<app/>'
});
