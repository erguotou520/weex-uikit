<template>
  <div class="checker" @click="onClick">
    <text class="box" :class="[checked ? 'box-checked' : '']"></text>
    <text v-if="checked" class="icon"></text>
    <text v-if="$slots.default" class="text"><slot></slot></text>
  </div>
</template>
<script>
export default {
  name: 'v-checker',
  props: {
    value: {
      type: [Boolean, Array]
    }
  },
  computed: {
    checked () {
      if (typeof this.value === 'object') {
        return this.value.every(item => item)
      } else {
        return this.value
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('input', !this.checked)
      this.$emit('change', !this.checked)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../../packages/theme-default/var.styl"
.checker
  position relative
  align-items center
  flex-direction row
.box
  width 40px
  height 40px
  border-style solid
  border-width 2px
  border-color $color-text-primary
  border-radius 20px
.box-checked
  border-color $color-primary
.icon
  position absolute
  left 8px
  top 14px
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
.text
  margin-left 40px
  color $color-text-primary
</style>
