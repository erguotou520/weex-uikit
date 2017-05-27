<!-- 右侧icon相距20px -->
<template>
  <div class="header" :class="['bg-' + type]" :style="bg?{'background-color':bg}:{}">
    <div class="left">
      <text v-if="!$slots.left">&nbsp;</text>
      <slot name="left"></slot>
    </div>
    <text class="title"><slot></slot></text>
    <div class="right">
      <text v-if="!$slots.right">&nbsp;</text>
      <slot v-else name="right"></slot>
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
.left
  flex-direction row
  flex 1
.right
  flex-direction row
  justify-content flex-end
  flex 1
.title
  flex 4
  color #fff
  font-size 34px
  font-weight 300
  text-align center
</style>
