<template>
  <div class="mg-10">
    <slot name="header"></slot>
    <p>{{param1}}</p>
    <!-- 插槽留坑 -->
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['param1'] //组件传参
}
</script>
<style scoped>
  .mg-10{
    margin: 10px;
  }
</style>