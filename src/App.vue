<template>
  <div id="app">
    <!-- <p>
      <router-link to='/First'>Home页面</router-link>
      <router-link to='/Second'>Company页面</router-link>
    </p>
    <router-view/> -->
    <transition :name="transitionName">
      <router-view class="Router"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to,from) { // to 目标路由，from 原路由 
      let isBack = this.$router.isBack //监听状态变化
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  },
}
</script>

<style>
body,div,input,p,a,span,i,select,table,ul,li,ol,dl,img{
  margin:0;
  padding:0;
}
ul {
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.Router {
  position: absolute;
  width: 100%;
  transition: all .5s ease;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%,0);
  transform: translate(100%,0);
}
.slide-right-enter, .slide-left-leave-active {
  opacity: 0;
  -webkit-transform: translate(-100%,0);
  transform: translate(-100%,0);
}
</style>
