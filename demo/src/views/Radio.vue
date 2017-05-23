<template>
  <div class="v-radios">
    <div class="radio-block">
      <u-radio class="radio-item" v-model="checked1" value="r1">按钮1</u-radio>
      <u-radio class="radio-item" v-model="checked1" value="r2">按钮2</u-radio>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked1: 'r2'
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
