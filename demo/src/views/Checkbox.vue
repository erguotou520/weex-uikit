<!-- weex 0.10不支持costom-component上使用v-model -->
<template>
  <div class="v-checkboxs">
    <div class="checkbox-block">
      <u-checkbox class="checkbox-item" :value="checked1" @input="v=>checked1=v" val="c1">按钮1</u-checkbox>
      <u-checkbox class="checkbox-item" :value="checked1" @input="v=>checked1=v" val="c2">按钮2</u-checkbox>
      <u-checkbox class="checkbox-item" :value="checked1" @input="v=>checked1=v" val="c3" disabled>按钮3</u-checkbox>
      <u-checkbox class="checkbox-item" :value="checked1" @input="v=>checked1=v" val="c4" disabled>按钮4</u-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked1: ['c2', 'c3']
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-checkboxs
  padding 20px
.checkbox-block
  flex-direction row
  margin-top 20px
  margin-bottom 20px
.checkbox-item
  flex 1
</style>
