<!-- 强调信息,标题 -->
<template>
  <text class="u-h1" :class="['color-' + color]"><slot></slot></text>
</template>
<script>
export default {
  name: 'u-h1',
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
.u-h1
  font-size 60px
.color-primary
  color $color-text-primary
.color-highlight
  color $color-text-highlight
.color-minor
  color $color-text-minor
</style>
