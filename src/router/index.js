import Vue from 'vue'
import Router from 'vue-router'


// ------------------------homeStrat-------------------------------
import home from '../view/home/index.vue'
import newGoods from '../view/home/newGoods'
// ------------------------homeEnd-------------------------------

// ------------------------findStart-------------------------------
import comCircle from '../view/find/comCircle'
import inspiration from '../view/find/inspiration'
import jointly from '../view/find/jointly'
import designer from '../view/find/designer'
// ------------------------findEnd-------------------------------


//-------------------------classificationStart-------------------
import classification from '../view/classification/classification.vue'
import newPage from '../view/classification/new.vue'
//-------------------------classificationEnd---------------------


//-------------------------classificationStart---------------------
import perIndex from '../view/personal/index.vue'
//-------------------------classificationEnd---------------------

//-------------------------classificationEnd---------------------
import cart from '../view/cart/index.vue'
//-------------------------classificationEnd---------------------

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/newGoods',
            name: 'newGoods',
            component: newGoods
        },
        {
            path: '/comCircle',
            name: 'comCircle',
            component: comCircle
        },
        {
            path: '/inspiration',
            name: 'inspiration',
            component: inspiration
        },
        {
            path: '/jointly',
            name: 'jointly',
            component: jointly
        },
        {
            path: '/designer',
            name: 'designer',
            component: designer
        },
        {
            path: '/classification',
            name: 'classification',
            component: classification
        },
        {
            path: '/newPage',
            name: 'newPage',
            component: newPage
        },
        {
            path: '/perIndex',
            name: 'perIndex',
            component: perIndex
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        },
        // {
        //     path:'',
        //     name:'',
        //     component:xxx
        // },
    ]
})