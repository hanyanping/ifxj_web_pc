// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
// Vue.config.productionTip = false
// Vue.use($);
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        next('/')
    } else {
        next()
    }

});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
    mounted() {
        document.dispatchEvent(new Event('render-event'))
    }
})
