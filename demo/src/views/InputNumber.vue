<template>
  <div class="v-input-number">
    <div class="number-row">
      <div class="number-cell">
        <u-input-number :value="number1" @input="v=>number1=v"></u-input-number>
      </div>
      <div class="number-cell">
        <u-input-number :value="number2" :min="0" :max="20" @input="v=>number2=v"></u-input-number>
      </div>
    </div>
    <div class="number-row">
      <div class="number-cell">
        <u-input-number :value="number3" disabled></u-input-number>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      number1: 1,
      number2: 1,
      number3: 10
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-input-number
  padding 20px
.number-row
  flex-direction row
  margin-top 20px
  margin-bottom 20px
.number-cell
  flex 1
</style>
