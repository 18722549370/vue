<template>
  <div>
    <header>
      <ul>
        <li @click="goBack">返回</li>
        <li>标题</li>
        <li>菜单</li>
      </ul>
    </header>
    <main>
      <p>我是第二个页面，取得传过来的值是：{{this.$route.params.itemData.name}}</p>
    </main>
  </div>
</template>
<script>
export default {
  methods: {
    goBack () {
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