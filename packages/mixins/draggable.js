let isDragging = false
export default {
  data () {
    return {
      dragOption: {
        start: null,
        move: null,
        end: null
      },
      isDragging: false,
      supportTouch: WXEnvironment.platform === 'Web' && 'ontouchstart' in window
    }
  },
  methods: {
    _getOffset (e) {
      if (this.supportTouch) {
        return {
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY
        }
      } else {
        return {
          x: e.pageX,
          y: e.pageY
        }
      }
    },
    onDragStart (e) {
      if (!isDragging) {
        isDragging = true
        this.isDragging = true
        document.onselectstart = () => false
        document.ondragstart = () => false
        if (this.dragOption.start) {
          this.dragOption.start(this._getOffset(e))
        }
      }
    },
    onDragMove (e) {
      if (this.dragOption.move) {
        this.dragOption.move(this._getOffset(e))
      }
    },
    onDragEnd (e) {
      isDragging = false
      this.isDragging = false
      if (this.dragOption.end) {
        this.dragOption.end(this._getOffset(e))
      }

      document.onselectstart = null
      document.ondragstart = null
    },
    initWebDragEvent (ele) {
      if (WXEnvironment.platform === 'Web') {
        ele.addEventListener(this.supportTouch ? 'touchstart' : 'mousedown', this.onDragStart, false)
        ele.addEventListener(this.supportTouch ? 'touchmove' : 'mousemove', this.onDragMove, false)
        ele.addEventListener(this.supportTouch ? 'touchend' : 'mouseup', this.onDragEnd, false)
        if (this.supportTouch) {
          ele.addEventListener('touchcancel', this.onDragEnd, false)
        }
      }
    },
    removeWebDragEvent (ele) {
      if (WXEnvironment.platform === 'Web') {
        ele.removeEventListener(this.supportTouch ? 'touchstart' : 'mousedown', this.onPanStart, false)
        ele.removeEventListener(this.supportTouch ? 'touchmove' : 'mousemove', this.onPanMove, false)
        ele.removeEventListener(this.supportTouch ? 'touchend' : 'mouseup', this.onPanEnd, false)
        if (this.supportTouch) {
          ele.removeEventListener('touchcancel', this.onDragEnd, false)
        }
      }
    }
  }
}
