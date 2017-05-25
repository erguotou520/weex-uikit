<template>
  <div class="v-selects">
    <u-select v-model="select1" placeholder="请选择" class="select-item">
      <u-option value="male">男</u-option>
      <u-option value="female">女</u-option>
      <u-option value="other">其它</u-option>
    </u-select>
    <u-select v-model="select2" placeholder="请选择" class="select-item">
      <u-option value="male">男</u-option>
      <u-option value="female">女</u-option>
      <u-option value="other" disabled>其它</u-option>
    </u-select>
    <u-select placeholder="请选择" disabled class="select-item">
      <u-option value="male">男</u-option>
      <u-option value="female">女</u-option>
      <u-option value="other" disabled>其它</u-option>
    </u-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      select1: '',
      select2: 'female'
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-selects
  padding 20px
.select-item
  margin-top 20px
  margin-bottom 20px
</style>
