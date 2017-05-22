<template>
  <div class="btn" :class="['btn-tp-' + type, 'btn-sz-' + size, disabled ? 'disabled' : '']">
    <text class="btn-text" :class="['btn-text-' + type]"><slot></slot></text>
  </div>
</template>
<script>
export default {
  name: 'u-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
.btn
  align-items center
  justify-content center
  margin-left auto
  margin-right auto
  width 670px
  height 96px
  text-align center
  border-radius 4px
.btn-text
  font-size 34px
  font-weight 300
.btn-tp-primary
  background-color $color-primary
.btn-tp-highlight
  background-color $color-highlight
.btn-tp-minor
  background-color $color-btn-minor
.btn-text-primary
  color #fff
.btn-text-highlight
  color #fff
.btn-text-minor
  color #fff
</style>
