<template>
  <div class="range">
    <text class="min">{{min}}</text>
    <div class="axis" :class="[disabled?'axis-disabled':'']" ref="axis"></div>
    <div class="completed" :class="[disabled?'completed-disabled':'']" :style="{width:`${offset}px`}"></div>
    <text class="circle" :class="[disabled?'circle-disabled':'']"
      @panstart="onPanStart" @panmove="onPanMove" @panend="onPanEnd"
      ref="circle" :style="{transform:`translateX(${offset}px) scale(${isDragging?1.2:1})`}">{{value}}</text>
    <text class="max">{{max}}</text>
  </div>
</template>
<script>
const dom = weex.requireModule('dom')
import { Draggable } from '../../../packages/mixins/draggable'
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
      axisWidth: 0,
      $circle: null
    }
  },
  computed: {
    rate () {
      return (this.max - this.min) / this.axisWidth
    },
    isDragging () {
      return this.$circle && this.$circle.isDragging
    }
  },
  methods: {
    _onDragStart (_offset) {
      if (!this.disabled) {
        this.x1 = _offset.x
      }
    },
    _onDragMove (_offset) {
      if (!this.disabled) {
        const offset = _offset.x - this.x1
        // 超出边界
        if ((this.offset === 0 && offset <= 0) || (this.offset === this.axisWidth && offset >= 0)) {
          return
        }
        const targetOffset = this.offset + offset
        if (targetOffset < 0) {
          this.offset = 0
        } else if (targetOffset > this.axisWidth) {
          this.offset = this.axisWidth
        } else {
          this.offset = this.offset + offset
        }
        this.x1 = _offset.x
        this.$emit('input', Math.round(this.offset * this.rate + this.min))
      }
    },
    onPanStart (e) {
      this._onDragStart({ x: e.changedTouches[0].pageX })
    },
    onPanMove (e) {
      this._onDragMove({ x: e.changedTouches[0].pageX })
    },
    onPanEnd () {
      if (!this.disabled) {
        this.$emit('change', Math.round(this.offset * this.rate + this.min))
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      dom.getComponentRect(this.$refs.axis, option => {
        this.axisWidth = option.size.width
        this.offset = (this.value - this.min) / this.rate
      })
      this.$circle = new Draggable(this.$refs.circle.$el, {
        start: this._onDragStart,
        move: this._onDragMove,
        end: this._onDragEnd
      })
    })
  },
  beforeDestroy () {
    this.$circle && this.$circle.removeListener()
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
  box-shadow 1px 1px 15px $color-primary
.circle-disabled
  background-color lighten($color-primary, 50%)
</style>
