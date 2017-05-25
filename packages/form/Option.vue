<template>
  <div class="option" :class="[selected?'selected':'',disabled?'disabled':'']" @click="select">
    <text class="text" :class="[disabled?'text-disabled':'']"><slot></slot></text>
    <text class="text-r" :class="[disabled?'text-disabled':'']"><slot name="right"></slot></text>
  </div>
</template>
<script>
const modal = weex.requireModule('modal')
export default {
  name: 'u-option',
  props: {
    value: [String, Number, Boolean, Object, Array],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      $select: null,
      selected: false
    }
  },
  methods: {
    select () {
      if (!this.disabled && this.$select) {
        this.$select.selectOption(this)
      }
    },
    setSelected (selected) {
      this.selected = selected
    }
  },
  created () {
    let parent = this.$parent.$parent
    while (parent.$parent && parent.$options._componentTag !== 'u-select') {
      parent = parent.$parent
    }
    if (parent.$options._componentTag !== 'u-select') {
      modal.toast({ message: 'u-option不能单独使用', duration: 0.3 })
      return
    }
    this.$select = parent
    parent.addOption(this)
  },
  beforeDestroy () {
    this.$select.removeOption(this)
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
$option-height = 88px
.option
  flex-direction row
  height $option-height
  padding-left 20px
  align-items center
  border-top-style solid
  border-top-width 1px
  border-top-color $color-disabled
  border-bottom-left-radius 4px
  border-bottom-right-radius 4px
.option:active
  background-color $color-select-active
.disabled:active
  background-color #fff
.selected
  background-color $color-select-active
.text
  color $color-text-primary
.text-r
  color $color-text-primary
.text-disabled
  color $color-text-disabled
</style>
