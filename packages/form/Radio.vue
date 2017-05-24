<template>
  <div @click="change" style="flex-direction:row">
    <div class="icon" :class="clz"></div>
    <text v-if="$slots.default" class="text" :class="[disabled?'text-disabled':'']"><slot></slot></text>
  </div>
</template>
<script>
const modal = weex.requireModule('modal')
export default {
  name: 'u-radio',
  props: {
    value: [String, Number, Object],
    val: [String, Number, Object],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clz () {
      const result = []
      modal.toast({
        message: this.val + ',' + this.value,
        duration: 1
      })
      const checked = this.val === this.value
      if (checked) {
        result.push('checked')
      }
      if (this.disabled) {
        result.push(checked ? 'checked-disabled' : 'disabled')
      }
      return result
    }
  },
  methods: {
    change () {
      if (!this.disabled) {
        this.$emit('input', this.val)
        this.$emit('change', this.val)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
.icon
  width 38px
  height @width
  background-color #fff
  border-radius 20px
  border-style solid
  border-width 2px
  border-color $color-text-minor
.checked
  border-width 12px
  border-color $color-primary
.disabled
  border-color $color-text-disable
.checked-disabled
  border-color $color-text-disable
.text
  color $color-text-primary
  margin-left 40px
.text-disabled
  color $color-text-disable
</style>
