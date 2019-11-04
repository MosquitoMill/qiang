/**
 * Created by 都大爽 on 2017/8/7.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由懒加载
const Dashboard = resolve => require(['./pages/dashboard.vue'], resolve)
const Admin = resolve => require(['./pages/admin/admin.vue'], resolve)
const Department = resolve => require(['./pages/department/department.vue'], resolve)
const Texture = resolve => require(['./pages/texture/texture.vue'], resolve)
const Category = resolve => require(['./pages/category/category.vue'], resolve)
const Collection = resolve => require(['./pages/collection/collection.vue'], resolve)
const CollectionWork = resolve => require(['./pages/collection-work/collectionWork.vue'], resolve)
const CarryBorrow = resolve => require(['./pages/carry-borrow/carryBorrow.vue'], resolve)
const Damage = resolve => require(['./pages/damage/damage.vue'], resolve)
const Log = resolve => require(['./pages/log/log.vue'], resolve)
const goOut = resolve => require(['./pages/go-out/goOut.vue'], resolve)
const Knowledge = resolve => require(['./pages/knowledge/knowledge.vue'], resolve)
const Statistics = resolve => require(['./pages/statistics/statistics.vue'], resolve)

export default new VueRouter({
  routes: [
    {path: '/', component: Dashboard},
    {path: '/admin', component: Admin},
    {path: '/department', component: Department},
    {path: '/texture', component: Texture},
    {path: '/category', component: Category},
    {path: '/collection', component: Collection},
    {path: '/collection-work', component: CollectionWork},
    {path: '/carry-borrow', component: CarryBorrow},
    {path: '/damage', component: Damage},
    {path: '/log', component: Log},
    {path: '/go-out', component: goOut},
    {path: '/knowledge', component: Knowledge},
    {path: '/statistics', component: Statistics},
  ],
  linkActiveClass: 'active'
})