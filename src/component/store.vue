<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in dataTop" :key="index">{{ item.name }}{{ item.price }}</li>
    </ul>
    <ul>
      <li v-for="(item,index) in discount" :key="index">{{ item.name }}{{ item.price }}</li>
    </ul>
    <button @click="storeClickOne">价格-方法一</button>
    <button @click="storeClickTwo">价格-方法二</button>
    <ul>
      <li v-for="(item,index) in dataTop" :key="index">{{ item.name }}{{ item.price }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex'
export default {
  data () {
    return {
      msg: 'Welcome to HelloWorld'
    }
  },
  computed: {
    // ...mapGetters ({
    //   dataTop: 'getDataTop' //自定义取值
    // }),
    ...mapGetters(['getDataTop']), //相同值获取
    //---------------------------------------
    ...mapState(['dataTop']), //相同值获取 当映射的计算属性的名称与state的子节点名称相同时，可以传一个字符串数组
    // dataTop () { //
    //   return this.$store.state.dataTop
    // },
    discount () {
      return this.$store.getters.salePrice //处理数据
    }
  },
  methods: {
    storeClickOne () {
      this.$store.commit('btnPrice') //激活事件里的方法 
    },
    storeClickTwo () {
      this.$store.dispatch('timerPrice') //激活异步事件方法
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
