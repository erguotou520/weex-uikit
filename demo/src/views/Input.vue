<template>
  <div class="v-inputs">
    <u-input class="input-item" v-model="input1" placeholder="input something"></u-input>
    <u-input class="input-item" v-model="input2" placeholder="input something" ref="input2">
      <text slot="left" style="font-family:'inputfont';font-size:24px;">&#xe639;</text>
      <text v-if="!!input2" slot="right" @click="input2='';$refs.input2.focus()" style="font-family:'inputfont';font-size:20px;">&#xe60e;</text>
    </u-input>
  </div>
</template>
<script>
const domModule = weex.requireModule('dom')
export default {
  data () {
    return {
      input1: '',
      input2: 'hello world'
    }
  },
  created () {
    domModule.addRule('fontFace', {
      'fontFamily': 'inputfont',
      'src': "url('//at.alicdn.com/t/font_1uf08qmz45tgldi.ttf')"
    })
  }
}
</script>
<style lang="stylus" scoped>
.v-inputs
  padding 20px
.input-item
  margin-top 20px
  margin-bottom 20px
</style>
