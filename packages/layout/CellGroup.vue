<template>
  <div class="cell-group">
    <div class="header">
      <text v-if="!$slots.left&&title" class="title">{{title}}</text>
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'u-cell-group',
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
.cell-group
  background-color #fff
.header
  padding-top 16px
  padding-bottom 16px
  padding-left 20px
  padding-right 20px
  background-color $color-background
.title
  color $color-text-minor
  font-size 22px
.text
  color $color-text-highlight
</style>
