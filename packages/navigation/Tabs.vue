<template>
  <div>
    <div class="tab-nav" ref="tabs">
      <text v-for="tab in tabs" class="tab" :class="[tab.value===value? 'tab-active' : '']" @click="selectTab(tab)">{{tab.label}}</text>
      <div class="line" ref="line" :style="{width: lineWidth+'px'}"></div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const animation = weex.requireModule('animation')
const dom = weex.requireModule('dom')
export default {
  name: 'u-tabs',
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: 0
    }
  },
  data () {
    return {
      tabs: [],
      lineWidth: 0
    }
  },
  computed: {
    activeIndex () {
      return this.tabs.map(tab => tab.value).indexOf(this.value) || 0
    }
  },
  watch: {
    value (val) {
      this.$nextTick(() => {
        this.animateLine()
      })
    }
  },
  methods: {
    addTab (tab) {
      this.tabs.push(tab)
    },
    removeTab (tab) {
      this.tabs.splice(this.tabs.indexOf(tab), 1)
    },
    selectTab (tab) {
      this.$emit('input', tab.value)
      this.$emit('change', tab.value)
    },
    animateLine () {
      animation.transition(this.$refs.line, {
        duration: 300,
        timingFunction: 'ease-in-out',
        styles: {
          transform: `translateX(${this.activeIndex * this.lineWidth}px)`
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      dom.getComponentRect(this.$refs.tabs, option => {
        this.lineWidth = option.size.width / this.tabs.length
        this.animateLine()
      })
    })
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
$tab-height = 88px
.tab-nav
  position relative
  flex-direction row
  height $tab-height
.tab
  flex 1
  height $tab-height
  line-height $tab-height
  font-size 30px
  text-align center
  color $color-text-highlight
.tab-active
  color $color-primary
.line
  position absolute
  bottom 0
  left 0
  height 4px
  background-color $color-primary
.tab-content
  padding-top 20px
</style>
