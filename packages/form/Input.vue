<template>
  <div class="input-field">
    <div v-if="$slots.left" class="left">
      <slot name="left"></slot>
    </div>
    <input class="input" :class="[!!$slots.left ? 'with-left' : '', !!$slots.right ? 'with-right': '']"
      :type="type" :placeholder="placeholder" :value="inputVal"
      @input="handleInput"
      @change="e=>$emit('change', e)"
      @focus="e=>$emit('focus', e)"
      @blur="e=>$emit('blur', e)"
      @return="e=>$emit('return', e)"
      ref="input">
    </input>
    <div v-if="$slots.right" class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'u-input',
  props: {
    type: String,
    value: String,
    placeholder: String
  },
  data () {
    return {
      inputVal: this.value
    }
  },
  watch: {
    value (val) {
      this.inputVal = val
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.value)
    },
    focus () {
      this.$refs.input.focus()
    },
    blur () {
      this.$refs.input.blur()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
$input-height = 88
.input-field
  position relative
  justify-content center
.left
  position absolute
  left 0
  top 0
  width ($input-height)px
  height @width
  align-items center
  justify-content center
.right
  position absolute
  right 0
  top 0
  width ($input-height)px
  height @width
  align-items center
  justify-content center
.input
  padding-left 20px
  padding-right 20px
  height ($input-height)px
  font-size 34px
  border-radius 4px
  border-color $color-disabled
  border-width 1px
  border-style solid
.with-left
  padding-left ($input-height)px
.with-right
  padding-right ($input-height)px
.input:focus
.input:active
  border-color $color-primary
  color $color-primary
  placeholder-color $color-primary
.input:focus::-webkit-input-placeholder
  color $color-primary
</style>
