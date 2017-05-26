<template>
  <div class="select">
    <div class="item" :class="[disabled?'disabled':'']" @click="toggle">
      <text class="text" :class="[!text?'placeholder':'',disabled?'text-disabled':'']">{{text?text:placeholder}}</text>
      <text v-if="!disabled" class="icon"></text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-select',
  props: {
    placeholder: String,
    value: [String, Number, Boolean, Object, Array],
    data: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    renderFn: Function
  },
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    text () {
      if (this.value) {
        for (const opt of this.data) {
          if (opt.value === this.value) {
            return opt.label
          }
        }
      }
      return ''
    }
  },
  methods: {
    toggle () {
      if (!this.disabled) {
        this.expanded = !this.expanded
        if (this.expanded) {
          this.$emit('expand')
          this.$uSelectPopup.showPopup(this)
        }
      }
    },
    collapse () {
      this.expanded = false
    }
  },
  created () {
    this.$on('selected', opt => {
      this.$emit('input', opt.value)
    })
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
</style>
