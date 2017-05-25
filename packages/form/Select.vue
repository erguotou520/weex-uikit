<template>
  <div class="select">
    <div class="item" :class="[disabled?'disabled':'']" @click="toggle">
      <text class="text" :class="[!text?'placeholder':'',disabled?'text-disabled':'']">{{text?text:placeholder}}</text>
      <text v-if="!disabled" class="icon"</text>
    </div>
    <div v-if="expanded" class="mask">
      <div class="candidates">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-select',
  props: {
    placeholder: String,
    value: [String, Number, Boolean, Object, Array],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      expanded: false,
      options: [],
      text: ''
    }
  },
  methods: {
    toggle () {
      if (!this.disabled) {
        this.expanded = !this.expanded
      }
    },
    addOption (opt) {
      this.options.push(opt)
      if (this.value && opt.value === this.value) {
        opt.setSelected()
      }
    },
    removeOption (opt) {
      this.options.splice(this.options.indexOf(opt), 1)
    },
    selectOption (opt) {
      this.text = opt.$slots.default[0].text
      this.expanded = false
      this.options.forEach(op => {
        opt.setSelected(op === opt)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
$select-height = 88px
.select
  position relative
.item
  flex-direction row
  align-items center
  padding-left 20px
  padding-right 20px
  height $select-height
  font-size 34px
  border-radius 4px
  border-color $color-disabled
  border-width 1px
  border-style solid
.disabled
  background-color $color-text-disabled
  border-color lighten($color-disabled, 30%)
.text
  flex 1
  font-size 34px
  font-weight 300
  color $color-text-primary
.placeholder
  color lighten($color-text-primary, 30%)
.text-disabled
  color $color-disabled
.icon
  width 20px
  height @width
  margin-top -12px
  margin-right 6px
  border-left-style solid
  border-left-width 3px
  border-left-color $color-text-minor
  border-bottom-style solid
  border-bottom-width 3px
  border-bottom-color $color-text-minor
  transform rotate(-45deg)
.mask
  position fixed
  left 0
  top 0
  bottom 0
  right 0
  justify-content flex-end
  background-color rgba(0, 0, 0, .5)
.candidates
  background-color #fff
</style>
