import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
  state: {  //存储组件需要的数据
    dataTop: [
      { name: '马云', price: 120 },
      { name: '马化腾', price: 180 },
      { name: '马地', price: 60 },
      { name: '马天', price: 10 }
    ] 
  },
  getters: {  //处理store.js中的数据
    salePrice(state){
      let discount = state.dataTop.map((disNum) => { //map()函数返回新数组
        return {
          name: '--' + disNum.name + '--',
          price: disNum.price/2
        }
      })
      return discount 
    }
  },
  mutations: { //处理store.js中的事件方法
    btnPrice(state){
      state.dataTop.forEach((item) => { //forEach()函数改变原数组
        item.price-=1
      })
    }
  },
  actions: { //异步处理mutations里面的事件方法
    timerPrice(context){
      setTimeout(function(){
        context.commit('btnPrice')
      }, 1000)
    }
  }
})