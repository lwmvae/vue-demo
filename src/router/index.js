import Vue from 'vue'
import Router from 'vue-router'
// import demo from '@/components/demo'
import sign from '@/components/sign/sign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: sign
    }
  ]
})
