<template>
  <div class="cell"
    @click="e=>$emit('click', e)"
    @longpress="e=>$emit('longpress', e)">
    <div class="left">
      <slot name="icon"></slot>
      <text class="text" :style="[$slots.icon ? {'margin-left':'20px'}: {}]">{{text}}</text>
    </div>
    <div class="right">
      <text class="value" :style="[$slots.right ? {'margin-right':'20px'}: {}]">{{value}}</text>
      <slot name="right"></slot>
      <div v-if="showArrow" class="arrow"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-cell',
  props: {
    text: String,
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
.cell
  flex-direction row
  align-items center
  justify-content space-between
  min-height 94px
  padding-left 20px
  padding-right 20px
  background-color #fff
  border-bottom-style solid
  border-bottom-width 1px
  border-bottom-color $color-text-disabled
.left
  flex-direction row
  align-items center
.right
  min-height 30px
  flex-direction row
  align-items center
.text
  color $color-text-highlight
  font-size 28px
.value
  margin-right 20px
  color $color-text-primary
  font-size 26px
.arrow
  width 20px
  height @width
  margin-top 6px
  margin-right 10px
  border-right-style solid
  border-right-width 2px
  border-right-color $color-text-primary
  border-bottom-style solid
  border-bottom-width 2px
  border-bottom-color $color-text-primary
  transform rotate(-45deg)
</style>
