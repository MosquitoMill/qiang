<template>
    <div class="vue-table-container">
        <Row v-if="searchConfig.status" className="search-box">
            <i-col span="20">
                <slot name="search" :items="searchConfig.items"></slot>
            </i-col>
            <i-col span="3" offset="1">
                <Tooltip content="高级检索" v-if="searchConfig.complex" placement="top">
                    <i-button type="text"  @click="openComplex">
                        <Icon :type="complexOpen ? 'chevron-up' : 'chevron-down'" size="18"></Icon>
                    </i-button>
                </Tooltip>
                <i-button type="ghost" icon="ios-search" @click="search">检索</i-button>
            </i-col>
            <!--<i-col span="20" v-if="searchConfig.complex">-->
                <!--<slot name="complex" :items="searchConfig.complexItems" :open="complexOpen"></slot>-->
            <!--</i-col>-->
        </Row>
        <div class="table-container">
            <table class="table table-hover">
                <thead>
                <slot name="header"></slot>
                </thead>
                <tbody>
                <slot name="tbody" v-for="item in dataSource.items" :item="item"></slot>
                </tbody>
            </table>
        </div>
        <div class="widget-toolbox padding-10 clearfix">
            <pagination :page-count="dataSource.pageCount"
                        :total="dataSource.total"
                        :current-page="dataSource.currentPage" @goPage="goPage"></pagination>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            dataSource: {
                type: Object,
                default: []
            },
            searchConfig: {
                type: Object,
                default: {
                    status: false,
                    items: {},
                    complex: false
                }
            }
        },
        data: function () {
            return {
                complexOpen: false
            }
        },
        methods: {
            search: function () {
                let self = this;
                this.$emit('on-query', self.searchConfig.items);
            },
            goPage: function (event) {
                let self = this;
                let query = _.assign({page: event.page}, self.searchConfig.items);
                this.$emit('on-query', query);
            },
            openComplex: function () {
                if (this.complexOpen){
                    this.complexOpen = false;
                }else{
                    this.complexOpen = true;
                }
                this.$emit('open-complex', this.complexOpen);
            }
        }
    }
</script>
<style scoped>
    .search-box{
        width: 90%;
        height: auto;
        margin: 15px auto;
    }
</style>