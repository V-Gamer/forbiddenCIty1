import Vue from 'vue'
import Router from 'vue-router'

import home from '../view/home/index.vue'
import newGoods from '../view/home/newGoods'
import inspiration from '../view/find/inspiration'

Vue.use(Router)


export default new Router({
    mode:'history',
    routes:[
        {
            path:'/home',
            name:'home',
            component:home
        },
        {
            path:'/newGoods',
            name:'newGoods',
            component:newGoods
        },
        {
            path:'/inspiration',
            name:'inspiration',
            component:inspiration
        },
        // {
        //     path:'',
        //     name:'',
        //     component:xxx
        // },
    ]
})