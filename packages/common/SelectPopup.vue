<script>
export default {
  name: 'u-select-popup',
  data () {
    return {
      options: [],
      renderFn: item => this.$createElement('text', { staticClass: 'text' }, item.label)
    }
  },
  methods: {
    showPopup (options, renderFn) {
      this.options = options
      if (typeof renderFn === 'function') {
        this.renderFn = renderFn
      }
    }
  },
  render (h) {
    const $options = this.options.map(opt => this.renderFn(opt))
    return h('div', {
      staticClass: 'popup'
    }, $options)
  },
  created () {
    Vue.prototype.$selectPopup = this
  }
}
</script>
