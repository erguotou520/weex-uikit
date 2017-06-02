<template>
  <div class="v-inputs">
    <u-input class="input-item" v-model="input1" placeholder="input something"></u-input>
    <u-input class="input-item" v-model="input2" placeholder="input something" ref="input2">
      <v-icon slot="left" size="24px">&#xe659;</v-icon>
      <v-icon v-if="!!input2" slot="right" @click="input2='';$refs.input2.focus()" size="20px">&#xe645;</v-icon>
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
