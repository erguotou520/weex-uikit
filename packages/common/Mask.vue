<template>
  <div class="mask" @click="$emit('input', false)" :style="{height:height+'px'}"><slot></slot></div>
</template>
<script>
export default {
  name: 'u-mask',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      height: weex.config.deviceHeight
    }
  }
}
</script>
<style lang="stylus" scoped>
.mask
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  justify-content flex-end
  background-color rgba(0, 0, 0, .5)
</style>
