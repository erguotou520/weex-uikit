<template>
  <div class="radio" @click="change">
    <div class="icon" :class="clz"></div>
    <text v-if="$slots.default" class="text" :class="[disabled?'text-disabled':'']"><slot></slot></text>
  </div>
</template>
<script>
export default {
  name: 'u-radio',
  props: {
    value: [String, Number, Boolean, Object, Array],
    val: [String, Number, Boolean, Object, Array],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clz () {
      const result = []
      const checked = this.val === this.value
      if (checked) {
        result.push('checked')
      }
      if (this.disabled) {
        result.push('disabled')
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
.radio
  flex-direction row
  align-items center
.icon
  width 40px
  height @width
  background-color #fff
  border-radius 20px
  border-style solid
  border-width 2px
  border-color $color-text-primary
.checked
  border-width 16px
  border-color $color-primary
.disabled
  border-color $color-disabled
.text
  color $color-text-primary
  margin-left 40px
.text-disabled
  color $color-text-disabled
</style>
