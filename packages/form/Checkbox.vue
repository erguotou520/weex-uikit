<template>
  <div class="checkbox" @click="change">
    <text class="box" :class="[checked ? 'checked-box' : '', disabled ? 'disabled-box' : '']"></text>
    <text v-if="checked" class="icon" :class="[disabled ? 'disabled-icon' : '']"></text>
    <text v-if="$slots.default" class="text" :class="[disabled ? 'disabled-text' : '']"><slot></slot></text>
  </div>
</template>
<script>
export default {
  name: 'u-checkbox',
  props: {
    value: [Array],
    val: [String, Number, Object, Array],
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
.checked-box
  border-color $color-primary
.disabled-box
  border-color $color-text-disable
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
.disabled-icon
  border-left-color $color-text-disable
  border-bottom-color $color-text-disable
.text
  margin-left 40px
  color $color-text-primary
.disabled-text
  color $color-text-disable
</style>
