<template>
  <div class="v-colors">
    <text class="text-block t-primary">#489cff</text>
    <text class="text-block t-highlight">#ff8038</text>
    <text class="text-block t-home-icon">#21d3ac</text>
    <text class="text-block t-star-icon">#ffd56c</text>
    <text class="text-block t-text-highlight">#233040</text>
    <text class="text-block t-text-primary">#667180</text>
    <text class="text-block t-text-minor">#98a4b3</text>
    <text class="text-block t-text-disable">#e6ecf2</text>
    <text class="text-block t-background">#f9fafc</text>
  </div>
</template>
<style lang="stylus" scoped>
@import "../../../packages/theme-default/var.styl"
.v-colors
  padding 20px
.text-block
  margin-top 20px
  margin-bottom 20px
  line-height 90px
  border-radius 10px
  color #fff
  text-align center
.t-primary
  background-color $color-primary
.t-highlight
  background-color $color-highlight
.t-home-icon
  background-color $color-home-icon
.t-star-icon
  background-color $color-star-icon
.t-text-highlight
  background-color $color-text-highlight
.t-text-primary
  background-color $color-text-primary
.t-text-minor
  background-color $color-text-minor
.t-text-disable
  background-color $color-text-disabled
  color $color-text-primary
.t-background
  background-color $color-background
  color $color-text-primary
</style>
