<template>
  <text :style="style"
    @click="e=>$emit('click', e)"
    @longpress="e=>$emit('longpress', e)"><slot></slot></text>
</template>
<script>
const domModule = weex.requireModule('dom')
export default {
  name: 'v-icon',
  props: {
    size: {
      type: String,
      default: '34px'
    },
    color: {
      type: String,
      default: '#667180'
    }
  },
  computed: {
    style () {
      return {
        fontFamily: 'iconfont',
        color: this.color,
        fontSize: `${this.size}px`
      }
    }
  },
  created () {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('//at.alicdn.com/t/font_r8w53dkq0dnxko6r.ttf')"
    })
  }
}
</script>
