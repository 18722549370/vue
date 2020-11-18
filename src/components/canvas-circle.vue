<template>
  <div>
    <canvas :id="id" width="160" height="160"></canvas>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'percent',
    'id'
  ]
}
</script>