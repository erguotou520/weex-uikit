<template>
  <div class="loading">
    <image class="img" src="http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif"></image>
    <text class="text"><slot></slot></text>
  </div>
</template>
<script>
export default {
  name: 'u-loading'
}
</script>
<style lang="stylus" scoped>
.loading
  background-color #535353
  width 360px
  height @width
  align-items center
  justify-content center
  border-radius 20px
.img
  width 240px
  height @width
.text
  margin-top 10px
  color #fcfcfc
  text-align center
</style>
