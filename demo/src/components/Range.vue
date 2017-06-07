<template>
  <div class="range">
    <text class="min">{{min}}</text>
    <div class="axis" :class="[disabled?'axis-disabled':'']" ref="axis"></div>
    <div class="completed" :class="[disabled?'completed-disabled':'']" :style="{width:`${offset}px`}"></div>
    <text class="circle" :class="[disabled?'circle-disabled':'']" @panstart="onPanStart" @panmove="onPanMove"
      ref="circle" :style="{transform:`translateX(${offset}px)`}">{{value}}</text>
    <text class="max">{{max}}</text>
  </div>
</template>
<script>
const dom = weex.requireModule('dom')
export default {
  name: 'v-range',
  props: {
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: Boolean
  },
  data () {
    return {
      x1: 0,
      offset: 0,
      axisWidth: 0
    }
  },
  computed: {
    rate () {
      return (this.max - this.min) / this.axisWidth
    }
  },
  methods: {
    onPanStart (e) {
      if (!this.disabled) {
        this.x1 = e.changedTouches[0].pageX
      }
    },
    onPanMove (e) {
      if (!this.disabled) {
        const offset = e.changedTouches[0].pageX - this.x1
        if (this.offset + offset >= 0 && this.offset + offset <= this.axisWidth) {
          this.offset += offset
          this.x1 = e.changedTouches[0].pageX
          this.$emit('input', Math.round(this.offset * this.rate + this.min))
        }
      }
    },
    webInit () {
      if (WXEnvironment.platform === 'Web') {
        this.$refs.circle.$el.addEventListener('touchstart', this.onPanStart, false)
        this.$refs.circle.$el.addEventListener('touchmove', this.onPanMove, false)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      dom.getComponentRect(this.$refs.axis, option => {
        this.axisWidth = option.size.width
        this.offset = (this.value - this.min) / this.rate
      })
      this.webInit()
    })
  },
  beforeDestroy () {
    if (WXEnvironment.platform === 'Web') {
      this.$refs.circle.$el.removeEventListener('touchstart', this.onPanStart, false)
      this.$refs.circle.$el.removeEventListener('touchmove', this.onPanMove, false)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../../packages/theme-default/var.styl"
$axis-height = 4
$range-height = 88
$circle-radius = 48
.range
  position relative
  flex-direction row
  align-items center
  flex 1
  height ($range-height)px
.min
  width 80px
  color $color-text-minor
.max
  width 80px
  color $color-text-minor
  text-align right
.axis
  flex 1
  height ($axis-height)px
  background-color $color-text-minor
.axis-disabled
  background-color lighten($color-text-minor, 20%)
.completed
  position absolute
  left 80px
  top (($range-height - $axis-height) / 2)px
  height ($axis-height)px
  background-color $color-primary
.completed-disabled
  background-color lighten($color-primary, 50%)
.circle
  position absolute
  left (80 - $circle-radius / 2)px
  top (($range-height - $circle-radius) / 2)px
  width ($circle-radius)px
  height @width
  line-height @height
  text-align center
  font-size 16px
  color #fff
  background-color $color-primary
  border-radius ($circle-radius / 2)px
.circle-disabled
  background-color lighten($color-primary, 50%)
</style>
