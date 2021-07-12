import Vue from 'vue'
import Router from 'vue-router'

import home from '../view/home/index.vue'
import newGoods from '../view/home/newGoods'

Vue.use(Router)


export default new Router({
    mode:'history',
    routes:[
        {
            path:'/home',
            name:'首页',
            component:home
        },
        {
            path:'/newGoods',
            name:'故宫新品',
            component:newGoods
        },
        // {
        //     path:'',
        //     name:'',
        //     component:xxx
        // },
    ]
})