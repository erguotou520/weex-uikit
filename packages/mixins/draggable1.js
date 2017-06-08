const supportTouch = WXEnvironment.platform === 'Web' && 'ontouchstart' in window
export class Draggable {
  constructor (element, option) {
    this.$el = element
    this.$option = option
    this.isDragging = false

    if (WXEnvironment.platform === 'Web') {
      element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', this.onDragStart.bind(this), false)

      if (supportTouch) {
        element.addEventListener('touchmove', this.onDragMove.bind(this), false)
        element.addEventListener('touchend', this.onDragEnd.bind(this), false)
        element.addEventListener('touchcancel', this.onDragEnd.bind(this), false)
      }
    }
  }

  _getOffset (e) {
    if (supportTouch) {
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
  }

  onDragStart (e) {
    console.log('start')
    this.isDragging = true
    if (WXEnvironment.platform === 'Web') {
      document.onselectstart = () => false
      document.ondragstart = () => false
    }
    if (!supportTouch) {
      this.$el.addEventListener('mousemove', e => this.onDragMove(e), false)
      this.$el.addEventListener('mouseup', this.onDragEnd.bind(this), false)
      this.$el.addEventListener('mouseout', this.onDragEnd.bind(this), false)
    }

    if (this.$option.start) {
      this.$option.start(this._getOffset(e))
    }
  }

  onDragMove (e) {
    console.log('move')
    if (this.$option.move) {
      this.$option.move(this._getOffset(e))
    }
  }

  onDragEnd (e) {
    console.log('end')
    this.isDragging = false
    if (WXEnvironment.platform === 'Web') {
      document.onselectstart = null
      document.ondragstart = null
    }

    if (!supportTouch) {
      this.$el.removeEventListener('mousemove', e => this.onDragMove(e), false)
      this.$el.removeEventListener('mouseup', this.onDragEnd.bind(this), false)
      this.$el.removeEventListener('mouseout', this.onDragEnd.bind(this), false)
    }

    if (this.$option.end) {
      this.$option.end(this._getOffset(e))
    }
  }

  removeListener () {
    if (WXEnvironment.platform === 'Web') {
      this.$el && this.$el.removeEventListener(supportTouch ? 'touchstart' : 'mousedown', this.onDragStart, false)
      if (supportTouch) {
        this.$el && this.$el.removeEventListener('touchmove', this.onDragMove.bind(this), false)
        this.$el && this.$el.removeEventListener('touchend', this.onDragEnd.bind(this), false)
        this.$el && this.$el.removeEventListener('touchcancel', this.onDragEnd.bind(this), false)
      }
    }
  }
}
