// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  let tokenId = store.getters.getUserInfo.tokenId
  console.error(to)
  if (to.meta.isChecked) { //需要登录
    if (tokenId) { //已经登录
      next()
    } else { //未登录
      if (to.path === '/login') {
        next()
        return
      } else {
        next({
          path: '/login',
        })
      }
    }
  } else {
    next()
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if (to.fullPath == '/login') {
    if (tokenId) {
      next({path: from.fullPath})
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
