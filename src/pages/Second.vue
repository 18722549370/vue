<template>
  <div>
    <Head leftTitle="左边" centerTitle="第二页" rightTitle="侧边栏"></Head>
    <main>
      <!-- 第一种传参方式 -->
      <!-- <p>我是第二个页面，取得传过来的值是：{{this.$route.params.itemData.name}}</p> -->
      <!-- 第二种传参方式 -->
      <!-- <p>我是第二个页面，取得传过来的值是：{{this.$route.query.itemData.name}}</p> -->
      <ul>
        <li v-for="(item, index) in tabTitle" :key="index" :class="[index === num ? 'active' : '']" @click="tab(item,index)">
          {{item.name}}
        </li>
      </ul>
      <!-- 组件显示 -->
      <div :is="currentComp">
        <slotTemplate :param1="'父组件传参'">
          <span>默认插槽的值</span>
        </slotTemplate>
      </div>
      <div @click="setToken">设置tokenId值</div>
      <router-link :to="{name: 'detail'}">商品详情</router-link>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Head from '@/components/Head'
import testOne from '@/component/testOne'
import testTwo from '@/component/testTwo'
import slotTemplate from '@/component/Slot'
export default {
  components: {
    Head,
    testOne,
    testTwo,
    slotTemplate
  },
  data () {
    return {
      //组件标题
      tabTitle: [
        {name: '组件一', comp: 'testOne'}, 
        {name: '组件二', comp: 'testTwo'}
        ],
      //当前选中的组件
      currentComp: 'testOne',
      num: 0
    }
  },
  methods: {
    go () {
      this.$router.backPage()
    },
    //tab切换
    tab (item, index) {
      this.num = index
      this.currentComp = item.comp
    },
    setToken () {
      this.$store.commit('setUserInfo', 'panpan') //激活事件里的方法
    } 
  }
}
</script>
<style scoped lang="less">
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
ul {
  display: flex;
  text-align: center;
  background-color: gray;
  li {
    padding: 10px 0;
    flex-grow: 1;
  }
  .active {
    background: green;
  }
}
</style>