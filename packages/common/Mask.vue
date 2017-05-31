<template>
  <div class="mask" :class="[show?'active':'']" @click="$emit('click', false)"
    :style="[{'justify-content':justify}]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'u-mask',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: 'center'
    }
  },
  created () {
    Vue.prototype.$uMask = this
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
  flex 1
  align-items center
  background-color rgba(0, 0, 0, .5)
  z-index 10
  opacity 0
  transform translate(-750px)
  transform translate(-100%)
.active
  opacity 1
  transform translate(0)
</style>
