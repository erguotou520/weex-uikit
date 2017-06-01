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
      <div class="grid-cell" @click="jump('/input')"><text>输入框(待优化)</text></div>
    </div>
    <div class="grid-row">
      <div class="grid-cell" @click="jump('/select')"><text>下拉(待优化)</text></div>
      <div class="grid-cell" @click="showLoading"><text>加载动画(仅做参考)</text></div>
      <div class="grid-cell" @click="jump('/tab')"><text>Tab页(待修复)</text></div>
    </div>
    <div class="grid-row">
      <div class="grid-cell" @click="jump('/progress')"><text>进度条</text></div>
      <div class="grid-cell" @click=""><text></text></div>
      <div class="grid-cell" @click=""><text></text></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['toggleLoading']),
    showLoading () {
      this.toggleLoading(true)
      setTimeout(() => {
        this.toggleLoading(false)
      }, 2000)
    }
  }
}
</script>
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
  border-color $color-text-disabled
</style>
