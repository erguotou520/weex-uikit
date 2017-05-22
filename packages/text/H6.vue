<!-- 副标题,提示,次要信息 -->
<template>
  <text class="u-h6" :class="['color-' + color]"><slot></slot></text>
</template>
<script>
export default {
  name: 'u-h6',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
.u-h6
  font-size 26px
  line-height 48px
.color-primary
  color $color-text-primary
.color-highlight
  color $color-text-highlight
.color-minor
  color $color-text-minor
</style>
