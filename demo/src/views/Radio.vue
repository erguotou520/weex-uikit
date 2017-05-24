<!-- weex 0.10不支持costom-component上使用v-model -->
<template>
  <div class="v-radios">
    <div class="radio-block">
      <u-radio class="radio-item" :value="checked1" @input="v=>checked1=v" val="r1">按钮1</u-radio>
      <u-radio class="radio-item" :value="checked1" @input="v=>checked1=v" val="r2">按钮2</u-radio>
    </div>
    <div class="radio-block">
      <u-radio class="radio-item" :value="checked2" @input="v=>checked2=v" val="r3" disabled>按钮3</u-radio>
      <u-radio class="radio-item" :value="checked2" @input="v=>checked2=v" val="r4" disabled>按钮4</u-radio>
    </div>
    <div class="radio-block">
      <u-switch :value="checked3" @input="v=>checked3=v" size="small"
        true-value="male" false-value="female"></u-switch>
      <u-switch :value="checked4" @input="v=>checked4=v"
        true-value="male" false-value="female" style="margin-left:100px"></u-switch>
    </div>
    <div class="radio-block">
      <u-switch :value="checked5" @input="v=>checked5=v" size="large"
        true-value="male" false-value="female"></u-switch>
      <u-switch :value="checked6" @input="v=>checked6=v" disabled
        true-value="ok" false-value="no" style="margin-left:100px"></u-switch>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked1: 'r2',
      checked2: 'r3',
      checked3: 'male',
      checked4: 'female',
      checked5: 'male',
      checked6: 'ok'
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-radios
  padding 20px
.radio-block
  flex-direction row
  margin-top 20px
  margin-bottom 20px
.radio-item
  flex 1
</style>
