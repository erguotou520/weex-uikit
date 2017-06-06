<template>
  <div class="input-number" :class="[disabled?'input-number-disabled':'']">
    <text class="minus" :class="[minusDisabled?'minus-disabled':'']" @click="minus">-</text>
    <input v-if="!disabled" type="tel" class="input" :class="[disabled?'input-disabled':'']" :value="value" @input="onInput"></input>
    <text v-else class="input" :class="[disabled?'input-disabled':'']">{{value}}</text>
    <text class="plus" :class="[plusDisabled?'plus-disabled':'']" @click="plus">+</text>
  </div>
</template>
<script>
export default {
  name: 'u-input-number',
  props: {
    value: {
      type: Number,
      required: true
    },
    min: Number,
    max: Number,
    disabled: Boolean
  },
  computed: {
    minusDisabled () {
      return this.disabled || (this.min !== undefined && this.value <= this.min)
    },
    plusDisabled () {
      return this.disabled || (this.max !== undefined && this.value >= this.max)
    }
  },
  methods: {
    minus () {
      if (this.min === undefined || this.value > this.min) {
        this.$emit('input', -1 + this.value)
      }
    },
    plus () {
      if (this.max === undefined || this.value < this.max) {
        this.$emit('input', 1 + this.value)
      }
    },
    onInput (e) {
      if ((this.min === undefined || e.value > this.min) || (this.max === undefined || e.value < this.max)) {
        this.$emit('input', +e.value)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
$height = 60px
.input-number
  flex-direction row
  width 220px
  align-items center
  height $height
  border-style solid
  border-width 1px
  border-color $color-text-primary
  border-radius 4px
.minus
  width $height
  height $height
  line-height @height
  text-align center
  font-size 48px
  color $color-text-primary
  border-right-style solid
  border-right-width 1px
  border-right-color $color-text-minor
.minus-disabled
  color $color-text-disabled
.plus
  width $height
  height $height
  line-height @height
  text-align center
  font-size 48px
  color $color-text-primary
  border-left-style solid
  border-left-width 1px
  border-left-color $color-text-minor
.plus-disabled
  color $color-text-disabled
.input
  width 100px
  height $height
  line-height @height
  font-size 28px
  text-align center
  color $color-text-primary
  background-color transparent
  border-left-style none
  border-right-style none
  border-top-style none
  border-bottom-style none
.input-disabled
  color $color-text-disabled
</style>
