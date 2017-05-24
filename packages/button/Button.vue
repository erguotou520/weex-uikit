<template>
  <div class="btn">
    <text class="btn-text"
      :class="['btn-tp-' + type, 'btn-sz-' + size, 'btn-text-' + type, disabled ? ('btn-tpd-' + type) : '']"
      @click="e => $emit('click', e)"
      @longpress="e => $emit('longpress', e)">
      <slot></slot>
    </text>
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
  position relative
  align-items center
  justify-content center
.btn-text
  width 670px
  height 96px
  line-height @height
  border-radius 4px
  font-size 34px
  font-weight 300
  text-align center
.btn-tp-primary
  background-color $color-primary
.btn-tp-highlight
  background-color $color-highlight
.btn-tp-minor
  background-color $color-btn-minor
.btn-tp-primary:active
  background-color darken($color-primary, 10%)
.btn-tp-highlight:active
  background-color darken($color-highlight, 10%)
.btn-tp-minor:active
  background-color darken($color-btn-minor, 10%)
.btn-tpd-primary
  background-color rgba($color-primary, 0.52)
.btn-tpd-highlight
  background-color rgba($color-highlight, 0.52)
.btn-tpd-minor
  background-color rgba($color-btn-minor, 0.52)
.btn-tpd-primary:active
  background-color rgba($color-primary, 0.52)
.btn-tpd-highlight:active
  background-color rgba($color-highlight, 0.52)
.btn-tpd-minor:active
  background-color rgba($color-btn-minor, 0.52)
.btn-text-primary
  color #fff
.btn-text-highlight
  color #fff
.btn-text-minor
  color #fff
</style>
