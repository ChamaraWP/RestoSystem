// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from './components/NavBar'
import Register from './components/Register'
import Home from './components/HelloWorld'

Vue.config.productionTip = false
Vue.component('app-nav', Navbar)


/* eslint-disable no-new */



new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})