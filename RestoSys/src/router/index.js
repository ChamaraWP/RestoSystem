import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Resavation from '@/components/Resavation'
import Orders from '@/components/Orders'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/resavation',
            name: 'resavation',
            component: Resavation
        }, {
            path: '/orders',
            name: 'orders',
            component: Orders
        },
        {
            path: '/about',
            name: 'about',
            component: About

        }
    ]

})