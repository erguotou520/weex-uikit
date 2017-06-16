<template>
  <div class="checkbox" @click="change">
    <text class="box" :class="[checked ? 'box-checked' : '', disabled ? 'box-disabled' : '']"></text>
    <text v-if="checked" class="icon" :class="[disabled ? 'icon-disabled' : '']"></text>
    <text v-if="$slots.default" class="text" :class="[disabled ? 'text-disabled' : '']"><slot></slot></text>
  </div>
</template>
<script>
export default {
  name: 'u-checkbox',
  props: {
    value: [Array],
    val: [String, Number, Boolean, Object, Array],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked () {
      return this.value.indexOf(this.val) > -1
    }
  },
  methods: {
    change () {
      if (!this.disabled) {
        const copyed = this.value.slice()
        if (this.checked) {
          copyed.splice(this.value.indexOf(this.val), 1)
        } else {
          copyed.push(this.val)
        }
        this.$emit('input', copyed)
        this.$emit('change', copyed)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
.checkbox
  position relative
  align-items center
  flex-direction row
.box
  width 40px
  height 40px
  border-style solid
  border-width 2px
  border-color $color-text-primary
  border-radius 10px
.box-checked
  border-color $color-primary
.box-disabled
  border-color $color-disabled
.icon
  position absolute
  left 8px
  top 12px
  width 24px
  height 12px
  border-left-style solid
  border-left-width 3px
  border-left-color $color-primary
  border-bottom-style solid
  border-bottom-width 3px
  border-bottom-color $color-primary
  border-radius 2px
  transform rotate(-45deg)
.icon-disabled
  border-left-color $color-disabled
  border-bottom-color $color-disabled
.text
  margin-left 40px
  color $color-text-primary
  font-size 32px
.text-disabled
  color $color-text-disabled
</style>
