<template>
  <div class="timeline-item">
    <text class="dot" :class="[isFirst?'dot-active':'']"></text>
    <div class="line-top" :class="[isFirst?'line-top-first':(index===1?'line-top-second':'')]"></div>
    <div class="line-bottom" :class="[isLast?'line-bottom-last':(isFirst?'line-bottom-first':'')]"></div>
    <div class="content">
      <text class="title" :class="[isFirst?'title-active':'']"><slot></slot></text>
      <slot v-if="!isFirst" name="extra"></slot>
      <slot v-else name="extra-active"></slot>
      <text class="date" :class="[isFirst?'date-active':'']">{{date}}</text>
    </div>
  </div>
</template>
<script>
const modal = weex.requireModule('modal')
export default {
  name: 'v-timeline-item',
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      index: -1,
      $parent: null
    }
  },
  computed: {
    isFirst () {
      return this.index === 0
    },
    isLast () {
      return this.$parent && this.$parent.childrenCount === this.index + 1
    }
  },
  created () {
    let parent = this.$parent
    while (parent.$parent && parent.$options._componentTag !== 'v-timeline') {
      parent = parent.$parent
    }
    if (parent.$options._componentTag !== 'v-timeline') {
      modal.toast({ message: 'v-timeline-item不能单独使用', duration: 0.3 })
      return
    } else {
      this.index = parent.addLine()
    }
    this.$parent = parent
  }
}
</script>
<style lang="stylus" scoped>
@import "../../../packages/theme-default/var.styl"
.timeline-item
  position relative
  flex-direction row
  flex 1
  padding-top 20px
  padding-bottom 20px
.dot
  width 13px
  height @width
  margin-top 12px
  margin-left 16px
  margin-right 44px
  border-radius 6px
  background-color #98a4b3
.dot-active
  width 25px
  height @width
  margin-left 10px
  margin-top 6px
  margin-right 38px
  border-style solid
  border-width 6px
  border-color #95c5ff
  border-radius 13px
  background-color #489cff
.line-top
  position absolute
  left 22px
  top 0
  height 32px
  width 1px
  background-color #98a4b3
.line-top-first
  height 0
.line-top-second
  background-color #489cff
.line-bottom
  position absolute
  left 22px
  top 45px
  bottom 0
  width 1px
  background-color #98a4b3
.line-bottom-first
  top 45px
  background-color #489cff
.line-bottom-last
  height 0
.line-last
  height 0
.content
  flex 1
.title
  color $color-text-minor
  margin-bottom 12px
  font-size 30px
.date
  color $color-text-minor
  font-size 24px
.title-active
  color #489cff
.date-active
  color #489cff
</style>
