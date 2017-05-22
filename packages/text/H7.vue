<!-- 注释,tab,次要信息 -->
<template>
  <text class="u-h7" :class="['color-' + color]"><slot></slot></text>
</template>
<script>
export default {
  name: 'u-h7',
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
.u-h7
  font-size 22px
.color-primary
  color $color-text-primary
.color-highlight
  color $color-text-highlight
.color-minor
  color $color-text-minor
</style>
