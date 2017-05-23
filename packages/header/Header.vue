<!-- 右侧icon相距20px -->
<template>
  <div class="header" :class="['bg-' + type]" :style="bg?{'background-color':bg}:{}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <text class="title"><slot></slot></text>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-header',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    bg: String
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
.header
  flex-direction row
  justify-content space-between
  align-items center
  height 88px
  padding-left 20px
  padding-right 20px
.bg-primary
  background-color $color-primary
.title
  color #fff
  font-size 34px
  font-weight 300
</style>
