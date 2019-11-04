<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4 || layoutWidth < 768}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left" v-show="showMenu">
                <Menu :active-name="routePath" theme="dark" width="auto" :open-names="[]" accordion
                      @on-select="onMenuSelect">
                    <div class="layout-logo-left"></div>
                    <!--<Menu-item name="/">-->
                    <!--<Icon type="ios-speedometer" :size="iconSize"></Icon>-->
                    <!--<span class="layout-text" >控制台</span>-->
                    <!--</Menu-item>-->

                    <Menu-item name="/admin" v-if="this.adminRole ===2">
                        <Icon type="ios-people" :size="iconSize"></Icon>
                        <span class="layout-text">用户管理</span>
                    </Menu-item>
                    <!--<Menu-item name="/user">-->
                    <!--<Icon type="ios-people" :size="iconSize"></Icon>-->
                    <!--<span class="layout-text">用户管理</span>-->
                    <!--</Menu-item>-->
                    <!--<Menu-item name="/delivery-men">-->
                    <!--<Icon type="android-bicycle" :size="iconSize"></Icon>-->
                    <!--<span class="layout-text">骑手管理</span>-->
                    <!--</Menu-item>-->
                    <!--<Menu-item name="/order">-->
                    <!--<Icon type="clipboard" :size="iconSize"></Icon>-->
                    <!--<span class="layout-text">订单管理</span>-->
                    <!--</Menu-item>-->
                    <!--<Menu-item name="/product-category">-->
                    <!--<Icon type="ios-keypad-outline" :size="iconSize"></Icon>-->
                    <!--<span class="layout-text">产品分类管理</span>-->
                    <!--</Menu-item>-->
                    <!--<Menu-item name="/product">-->
                    <!--<Icon type="cube" :size="iconSize"></Icon>-->
                    <!--<span class="layout-text">产品管理</span>-->
                    <!--</Menu-item>-->
                    <Menu-item name="/department" v-if="this.adminRole == 2">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">部门管理</span>
                    </Menu-item>
                    <Menu-item name="/category" v-if="this.adminRole == 2">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">分类管理</span>
                    </Menu-item>
                    <Menu-item name="/texture" v-if="this.adminRole == 2">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">质地类别管理</span>
                    </Menu-item>
                    <Menu-item name="/collection">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">藏品管理</span>
                    </Menu-item>
                    <Menu-item name="/collection-work">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">展览管理</span>
                    </Menu-item>
                    <Menu-item name="/carry-borrow">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">藏品提借管理</span>
                    </Menu-item>
                    <Menu-item name="/damage">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">损坏管理</span>
                    </Menu-item>
                    <Menu-item name="/go-out">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">仓库人员出入</span>
                    </Menu-item>
                    <Menu-item name="/knowledge">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">知识库管理</span>
                    </Menu-item>
                    <Menu-item name="/statistics">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">统计</span>
                    </Menu-item>
                    <Menu-item name="/log">
                        <Icon type="android-playstore" :size="iconSize"></Icon>
                        <span class="layout-text">操作日志</span>
                    </Menu-item>
                    <!--<Menu-item name="/property">-->
                    <!--<Icon type="ios-gear" :size="iconSize"></Icon>-->
                    <!--<span class="layout-text">参数管理</span>-->
                    <!--</Menu-item>-->
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div :style="'min-height:' + layoutMinHeight + 'px;'">
                    <div class="layout-header">
                        <i-button type="text" @click="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button>
                        <i-button type="text" class="pull-right" style="margin-top: 5px" @click="logout">
                            <Icon type="log-out" size="16"></Icon>
                            <span style="font-size: 14px">登出</span>
                        </i-button>
                    </div>
                    {{this.adminRole}}
                    <div class="layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb-item href="/" v-if="breadCrumbs.length > 0">首页</Breadcrumb-item>
                            <template v-for="item in breadCrumbs">
                                <Breadcrumb-item v-if="item.active == true">{{item.name}}</Breadcrumb-item>
                                <Breadcrumb-item v-else :href="item.href">{{item.name}}</Breadcrumb-item>
                            </template>
                        </Breadcrumb>
                    </div>
                    <div class="layout-content" :style="'min-height:' + layoutContentMinHeight + 'px;'">
                        <div class="layout-content-main">
                            <transition name="slide-fade">
                                <router-view></router-view>
                            </transition>
                        </div>
                    </div>
                    <div class="layout-copy">
                        2011-2016 &copy; Bright-tech
                    </div>
                </div>

            </i-col>
        </Row>
    </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        spanLeft: 4,
        spanRight: 20,
        showMenu: true,
        adminRole: 0
      }
    },
    created: function () {
      this.getAdmin()
    },
    computed: {
      layoutWidth () {
        return window.innerWidth
      },
      iconSize () {
        return this.spanLeft === 4 ? 14 : 24
      },
      layoutMinHeight () {
        return window.innerHeight
      },
      layoutContentMinHeight () {
        let layoutContentMinHeight = window.innerHeight - 175
        return layoutContentMinHeight
      },
      breadCrumbs () {
        return this.$store.state.breadCrumbs
      },
      routePath () {
        let currentPath = _.last(this.$store.state.breadCrumbs)
        if (currentPath) {
          return currentPath.href
        } else {
          return '/'
        }
      }
    },
    methods: {
      getAdmin () {
        let self = this
        axios.get('/api/backend/auth-admin').then(function (response) {
          console.log('返回数据：')
          console.log(response.data.role)
          self.adminRole = response.data.role
          console.log(self.adminRole)
        }).catch(function (error) {
          console.log(error)
        })
      },
      onMenuSelect (location) {
        console.log(location)
        this.$router.push(location)
      },
      logout () {
        axios.post('logout', {})
          .then(function (response) {
            window.location.reload()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      toggleClick () {
        if (this.spanLeft === 4) {
          if (window.innerWidth < 768) {
            this.showMenu = false
            this.spanRight = 24
            this.spanLeft = 0
          } else {
            this.spanRight = 23
            this.spanLeft = 1
            this.showMenu = true
          }
        } else {
          this.showMenu = true
          this.spanLeft = 4
          this.spanRight = 20
        }
      }
    }
  }
</script>
<style scoped>
    .layout {
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout-hide-text .layout-text {
        display: none;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>