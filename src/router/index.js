import Vue from 'vue'
import Router from 'vue-router'
import First from '@/pages/First' //默认组件 @根目录
import Second from '@/pages/Second'
import login from '@/pages/login'
import register from '@/pages/register'
import detail from '@/pages/detail'
Vue.use(Router)

//给Router对象添加统一的返回方法
Router.prototype.backPage = function () {
  this.isBack = true
  if (window.history.length > 1) {
    window.history.go(-1) //后退一页
  }
}
export default new Router({
  /*
   * path: 浏览器端的地址 
  */
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/', //对应路由路径 to='/First' 一致
      name: 'First', //设置路由名称
      component: First //路由组件
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second,
      children: [
        {
          path: 'detail',
          name: 'detail',
          component: detail,
          meta: {
            isChecked: true
          }
        }
      ]
    }
  ],
  mode: 'history' //去掉地址栏#
})
