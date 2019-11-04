/**
 * Created by 都大爽 on 2017/8/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    /**
     * 页面标题
     */
    title: '',
    /**
     * 用户信息
     */
    user: {
      name: '',
      email: '',
      mobile: '',
      permissions: [], //权限列表
      can: function (permission) {
        return _.indexOf(this.permissions, permission) > -1
      }
    },
    /**
     * 面包屑
     */
    breadCrumbs: [],

    /**
     * 省份列表
     */
    productCategoriesList: [],
    /**
     * 店铺列表
     */
    store_list: [],
    /**
     * 部门列表
     */
    departmentList: [],
    /**
     * 分类列表
     */
    categoryList: [],
    /**
     * 质地类别列表
     */
    textureList: [],

    collectionList: [],
    adminList:[]
  },
  getters: {
    getProductCategoriesListLength: state => {
      return state.productCategoriesList.length
    },
    storeList: state => state.store_list,
    departmentList: state => state.departmentList,
    categoryList: state => state.categoryList,
    textureList: state => state.textureList,
    collectionList: state => state.collectionList,
    adminList:state => state.adminList
  },
  mutations: {
    setTitle (state, title) {
      // 变更状态
      state.title = title
      document.title = '藏品管理系统-' + state.title
    }
    ,
    setStoreList (state, list) {
      state.store_list = list
    }
    ,
    setDepartmentList (state, list) {
      state.departmentList = list
    },
    setCategoryList (state, list) {
      state.categoryList = list
    },
    setTextureList (state, list) {
      state.textureList = list
    },
    setCollectionList (state, list) {
      state.collectionList = list
    },
    setAdminList (state, list) {
      state.adminList = list
    },
    setUser (state, user) {
      debug && console.log(user)
      state.user.name = user.name
      state.user.email = user.email
      state.user.mobile = user.profile_info.mobile
    }
    ,
    setUserPermissions (state, permissions) {
      debug && console.log(permissions)
      state.user.permissions = permissions
    }
    ,
    setBreadCrumbs (state, breadCrumbs) {
      debug && console.log(breadCrumbs)
      state.breadCrumbs = breadCrumbs
    }
    ,
    setProductCategoriesList (state, productCategoriesList) {
      debug && console.log(productCategoriesList)
      state.productCategoriesList = productCategoriesList
    }
  }
  ,
  actions: {
    fetchUser ({commit}) {
      axios.get('api/admin/profile').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setUser', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    }
    ,
    fetchUserPermissions ({commit}) {
      axios.get('api/admin/permission').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setUserPermissions', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    }
    ,
    fetchProductCategoriesList ({commit}) {
      axios.get('api/backend/data/product-category-list').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setProductCategoriesList', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    }
    ,
    fetchStoreList ({commit}) {
      axios.get('api/backend/data/store-list').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setStoreList', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    },
    fetchDepartmentList ({commit}) {
      axios.get('api/backend/data/department-list').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setDepartmentList', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    },
    fetchCategoryList ({commit}) {
      axios.get('api/backend/data/category-list').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setCategoryList', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    },
    fetchTextureList ({commit}) {
      axios.get('api/backend/data/texture-list').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setTextureList', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    },
    fetchCollectionList ({commit}) {
      axios.get('api/backend/data/collection-list').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setCollectionList', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    },
    fetchAdminList ({commit}) {
      axios.get('api/backend/data/admin-list').then(function (response) {
        debug && console.log('Susscee:', response)
        commit('setAdminList', response.data)
      }).catch(function (error) {
        // Something happened in setting up the request that triggered an Error
        debug && console.log('Error', error.message)
      })
    },
  }
  ,
  modules: {
    // member
  }
  ,

  strict: debug,
// plugins: debug ? [createLogger()] : []
})
