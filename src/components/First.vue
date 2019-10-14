<template>
  <div>
    <Head leftTitle="返回" centerTitle="首页" :isFlag="false"></Head>
    <main>
      <ul>
        <li v-for="(item,index) in mockList" :key="index" @click=nav(index)>
          <p>序号：{{index}}</p>
          <p>姓名：{{item.name}}</p>
          <p>年龄：{{item.age}}</p>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
import Head from './Head'
export default {
  components: {
    Head
  },
  data () {
    return {
      mockList:[
        {name: 'tigerchain', age: 30},
        {name: 'areay', age: 30},
        {name: 'chdea', age: 30},
        {name: 'eeler', age: 30},
      ]
    }
  },
  methods: {
    nav(index){
      this.$router.push({name: 'Second',params:{itemData:this.mockList[index]}}) //路由跳转一
      // this.$router.push({path:'/Second',query:{itemData:this.mockList[index]}}) //路由跳转二 
    }
  }
}
</script>
<style scoped>
main ul {
  margin: 0 10px;
}
main ul li {
  background-color: green;
  margin-top: 10px;
}
main ul li p {
  padding: 10px;
}
</style>