<template>
  <div class="v-homepage grid">
    <div class="grid-row">
      <div class="grid-cell" @click="jump('/color')"><text>颜色</text></div>
      <div class="grid-cell" @click="jump('/text')"><text>文本</text></div>
      <div class="grid-cell" @click="jump('/button')"><text>按钮</text></div>
    </div>
    <div class="grid-row">
      <div class="grid-cell" @click="jump('/radio')"><text>单选</text></div>
      <div class="grid-cell" @click="jump('/checkbox')"><text>多选</text></div>
      <div class="grid-cell" @click="jump('/')"><text></text></div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import "../../../packages/theme-default/var.styl"
.grid-row
  flex-direction row
.grid-cell
  flex 1
  align-items center
  justify-content center
  padding 32px
  border-style solid
  border-width 1px
  border-color $color-text-disable
</style>
