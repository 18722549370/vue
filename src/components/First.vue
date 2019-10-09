<template>
  <div>
    <header>
      <ul>
        <li>返回</li>
        <li>标题</li>
        <li>菜单</li>
      </ul>
    </header>
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
export default {
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
      this.$router.push({name: 'Second',params:{itemData:this.mockList[index]}})
    }
  }
}
</script>
<style scoped>
header ul {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #ff0000;
}
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