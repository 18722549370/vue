import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //   @ /src

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  //根路径默认组件
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  mode: 'history' //去掉地址栏#
})
