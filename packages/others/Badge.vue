<template>
  <div class="badge-wrapper">
    <slot></slot>
    <text v-if="dot" class="dot"></text>
    <text v-if="count" class="count">{{count}}</text>
  </div>
</template>
<script>
export default {
  name: 'u-badge',
  props: {
    dot: Boolean,
    count: [String, Number]
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
$dot-width = 12
$badge-height = 24
.badge-wrapper
  position relative
.dot
  position absolute
  right -($dot-width / 2)px
  top @right
  width ($dot-width)px
  height @width
  background-color $color-warning
  border-radius ($dot-width / 2)px
.count
  position absolute
  right -($badge-height / 2)px
  top @right
  min-width ($badge-height)px
  height ($badge-height)px
  line-height @height
  color #fff
  font-size 18px
  text-align center
  background-color $color-warning
  border-radius ($badge-height / 2)px
</style>
