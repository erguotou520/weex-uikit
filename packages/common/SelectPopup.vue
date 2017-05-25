<script>
export default {
  name: 'u-select-popup',
  data () {
    const h = this.$createElement
    return {
      options: [],
      renderFn: item => h('div', {
        staticClass: 'option',
        on: {
          click () {
            this.$emit('hide-mask')
          }
        }}, [
          h('text', { staticClass: 'text', 'class': [item.selected ? 'text-active' : ''] }, item.label),
          h('text', { staticClass: 'icon', 'class': [item.selected ? 'icon-active' : ''] })
        ]
      )
    }
  },
  methods: {
    showPopup (options, selectedValue, renderFn) {
      options.forEach(opt => {
        opt.selected = opt.value === selectedValue
      })
      this.options = options
      if (typeof renderFn === 'function') {
        this.renderFn = renderFn
      }
    }
  },
  render (h) {
    const $options = this.options.map(opt => this.renderFn.bind(this)(opt))
    return h('div', {
      staticClass: 'popup'
    }, $options)
  },
  created () {
    Vue.prototype.$uSelectPopup = this
  }
}
</script>
<style lang="stylus" scoped>
@import "../theme-default/var.styl"
$option-height = 88px
.option
  flex-direction row
  align-items center
  justify-content space-between
  height $option-height
  padding-left 20px
  padding-right 20px
  background-color #fff
  border-bottom-style solid
  border-bottom-width 1px
  border-bottom-color $color-text-disabled
.option:active
  background-color $color-select-active
.disabled:active
  background-color #fff
.text
  color $color-text-primary
.text-active
  color $color-primary
.text-disabled
  color $color-text-disabled
.icon
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
  opacity 0
.icon-active
  opacity 1
</style>
