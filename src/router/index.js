import Vue from 'vue'
import Router from 'vue-router'

import home from '../view/home'

Vue.use(Router)


export default new Router({
    mode:'history',
    routes:[
        {
            path:'/home',
            name:'首页',
            component:home
        },
        // {
        //     path:'',
        //     name:'',
        //     component:xxx
        // },
    ]
})