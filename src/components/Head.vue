<template>
  <header>
    <ul class="clearfix">
      <li @click="goBack()">{{leftTitle}}</li>
      <li>{{centerTitle}}</li>
      <li v-show="isFlag">{{rightTitle}}</li>
    </ul>
  </header>
</template>
<script>
export default {
  name: 'v-head',
  props: {
    //titlebar 左边默认文字
    leftTitle: {
      default: 'left'
    },
    //titlebar 中间默认文字
    centerTitle: {
      default: 'center'
    },
    //titlebar 右边默认文字
    rightTitle: {
      default: 'right'
    },
    //是否显示右边布局
    isFlag: {
      default: true
    },
    //返回按钮
    goBack: {
      type: Function
    }
  }
}
</script>
<style scoped>
header ul {
  /* display: flex;
  justify-content: space-between; */
  padding: 10px;
  background-color: #ff0000;
}
.clearfix:after
{
	clear:both;/* 清除全部样式 */
	content:".";
	display:block;/* 块级元素 */
	font-size:0;
	height:0;/* 高度为0 */
	line-height:0;/* 行高为0 */
	visibility:hidden;/* 规定元素隐藏 */
}
.clearfix
{
	zoom:1;/* 检查页面是否清楚浮动 标签是否关闭*/
}
li {
  float: left;
  width: 33.33%;
}
li:nth-of-type(2) { /*匹配同类型中的第n个同级兄弟元素*/
  text-align: center;
}
li:nth-of-type(3) {
  text-align: right;
}
</style>