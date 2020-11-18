<template>
  <div>
    <h1>商品详情</h1>
    <canvas id="canvas" width="160" height="160"></canvas>
  </div>
</template>
<script>
export default {
  data () {
    return {
      canvas: ''
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas')
    console.error(this.canvas.width)
  }
}
</script>