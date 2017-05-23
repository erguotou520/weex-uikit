<template>
  <div @click="$emit('u-change', value);$emit('change', value)" style="flex-direction:row">
    <div class="icon" :class="{checked: checked === value}"></div>
    <text v-if="$slots.default" class="text"><slot></slot></text>
  </div>
</template>
<script>
export default {
  name: 'u-radio',
  model: {
    prop: 'u-checked',
    event: 'change'
  },
  props: {
    checked: [String, Number, Object],
    value: [String, Number, Object]
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
.text
  margin-left 40px
</style>
