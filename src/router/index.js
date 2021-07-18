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

//-------------------------classificationEnd---------------------
import login from '../view/login/index.vue'
//-------------------------classificationEnd---------------------
// import { getCookie } from '../assets/js/cookie'
// 从cookie.js的文件中引入设置cookie和获取cookie的方法

Vue.use(Router)


export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/home',
			name: 'home',
			meta: { isLogin: true },
			component: home,

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
			meta: { isLogin: true },
			component: perIndex
		},
		{
			path: '/cart',
			name: 'cart',
			meta: { isLogin: true },
			component: cart
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		// {
		//     path:'',
		//     name:'',
		//     component:xxx
		// },
	]
})
// const router = new Router({})

// router.beforeEach((to, from, next) => {
// 	let token = false
// 	if (getCookie('username') && getCookie('password')) {
// 		token = true
// 	}
// 	if (to.path === '/login') {
// 		if (token == true) {
// 			next('/home')
// 		} else {
// 			next()
// 		}
// 	} else {
// 		let flag = Object.prototype.hasOwnProperty.call(to.meta, 'isLogin')
// 		if (flag) {
// 			if (to.meta.isLogin && token == true) {
// 				next()
// 			} else {
// 				next('login')
// 			}
// 		} else {
// 			next()
// 		}
// 	}
// })
