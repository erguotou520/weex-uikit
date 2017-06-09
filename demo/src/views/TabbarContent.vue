<template>
  <text class="text">路由模式:{{content}}</text>
</template>
<script>
export default {
  props: {
    content: String
  }
}
</script>
<style lang="stylus" scoped>
.text
  color #667180
  padding-left 20px
  line-height 88px
</style>
