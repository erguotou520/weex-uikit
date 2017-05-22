<!-- 标题 -->
<template>
  <text class="u-h5" :class="['color' + color]"><slot></slot></text>
</template>
<script>
export default {
  name: 'u-h5',
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
.u-h5
  font-size 30px
.color-primary
  color $color-text-primary
.color-highlight
  color $color-text-highlight
.color-minor
  color $color-text-minor
</style>
