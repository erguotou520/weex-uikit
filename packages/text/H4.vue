<!-- 文章正文 -->
<template>
  <text class="u-h4" :class="['color-' + color]"><slot></slot></text>
</template>
<script>
export default {
  name: 'u-h4',
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
.u-h4
  font-size 34px
  line-height 52px
  font-weight 200
.color-primary
  color $color-text-primary
.color-highlight
  color $color-text-highlight
.color-minor
  color $color-text-minor
</style>
