<!-- 文章标题栏 -->
<template>
  <text class="u-h2" :class="['color-' + color]"><slot></slot></text>
</template>
<script>
export default {
  name: 'u-h2',
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
.u-h2
  font-size 44px
  line-height 64px
  font-weight 500
.color-primary
  color $color-text-primary
.color-highlight
  color $color-text-highlight
.color-minor
  color $color-text-minor
</style>
