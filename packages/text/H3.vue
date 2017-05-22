<!-- 标题,数字,按钮 -->
<template>
  <text class="u-h3" :class="['color-' + color]"><slot></slot></text>
</template>
<script>
export default {
  name: 'u-h3',
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
.u-h3
  font-size 34px
  font-weight 300
.color-primary
  color $color-text-primary
.color-highlight
  color $color-text-highlight
.color-minor
  color $color-text-minor
</style>
