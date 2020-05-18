<template>
  <div>
    <!-- <defined-head leftTitle="返回" centerTitle="首页" :isFlag="false"></defined-head> -->
    <definedHead leftTitle="返回" centerTitle="首页" :isFlag="false"></definedHead>
    <main>
      <ul class="mockList">
        <li v-for="(item,index) in mockList" :key="index" @click=nav(index)>
          <p>序号：{{index}}</p>
          <p>姓名：{{item.name}}</p>
          <p>年龄：{{item.age}}</p>
        </li>
      </ul>
      <h1>axios请求数据</h1>
      <ul>
        <li v-for="(item, index) in first" :key="index">{{item.name}}</li>
      </ul>
      <h1>插槽使用</h1>
      <slot-template :param1="'父组件传参'">
        <p>默认插槽的值</p>
        <p slot="header">具名插槽的值---头部插槽</p>
        <p slot="footer">具名插槽的值---尾部插槽</p>
      </slot-template>
    </main>
  </div>
</template>
<script>
import definedHead from '@/components/Head' //可自定义引入组件名
import slotTemplate from '@/component/Slot'
// import axios from 'axios'
export default {
  components: {
    definedHead,
    slotTemplate
  },
  data () {
    return {
      mockList:[
        {name: 'tigerchain', age: 30},
        {name: 'areay', age: 30},
        {name: 'chdea', age: 30},
        {name: 'eeler', age: 30},
      ],
      first: []
    }
  },
  mounted () {
    this.$axios.get('../../static/test.json').then(response => {
        this.first = response.data.first
    }, response => {
        console.log("error");
    });
  },
  methods: {
    nav(index){
      this.$router.push({name: 'Second',params:{itemData:this.mockList[index]}}) //路由跳转一
      // this.$router.push({path:'/Second',query:{itemData:this.mockList[index]}}) //路由跳转二 
    }
  }
}
</script>
<style scoped lang="less">
.mockList {
  margin: 0 10px;
  li {
    background-color: green;
    margin-top: 10px;
    p {
      padding: 10px;
    }
  }
}
</style>