import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/store' //   @ /src
import Head from '@/components/Head'
import First from '@/components/First' //默认组件
import Second from '@/components/Second'
Vue.use(Router)

//给Router对象添加统一的返回方法
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1) //后退一页
}

export default new Router({
  /*
   * path: 浏览器端的地址 
  */
  routes: [
    // {
    //   path: '/',  //根路径默认组件
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/', //对应路由路径 to='/First' 一致
      name: 'First', //设置路由名称
      component: First //路由组件
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head
    }
  ],
  mode: 'history' //去掉地址栏#
})
