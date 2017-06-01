<template>
  <div class="loading">
    <image class="img" src="https://media.giphy.com/media/l0Iy9nEw0XgbPeT16/giphy.gif"></image>
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
  width 200px
  height @width
.text
  margin-top 10px
  color #fcfcfc
  text-align center
</style>
