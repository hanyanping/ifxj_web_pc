import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import productserver from '@/views/productserver'
import aboutour from '@/views/aboutour'
import health from '@/views/health'
import news from '@/views/news'
import healthDetail from '@/views/healthDetail'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/base/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
      {
          path: '/productserver',
          name: 'productserver',
          component: productserver
      },
      {
          path: '/aboutour',
          name: 'aboutour',
          component: aboutour
      },{
          path: '/health',
          name: 'health',
          component: health
      },
      {
          path: '/news',
          name: 'news',
          component: news
      },
      {
          path:'/healthDetail',
          name: 'healthDetail',
          component: healthDetail
      }
  ]
})
