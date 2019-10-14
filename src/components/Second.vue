<template>
  <div>
    <Head leftTitle="左边" centerTitle="第二页" rightTitle="侧边栏" :goBack="go"></Head>
    <main>
      <!-- 第一种传参方式 -->
      <p>我是第二个页面，取得传过来的值是：{{this.$route.params.itemData.name}}</p>
      <!-- 第二种传参方式 -->
      <!-- <p>我是第二个页面，取得传过来的值是：{{this.$route.query.itemData.name}}</p> -->
    </main>
  </div>
</template>
<script>
import Head from './Head'
export default {
  components: {
    Head
  },
  methods: {
    go () {
      this.$router.goBack()
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
p {
  margin: 10px;
  background-color: green;
}
</style>