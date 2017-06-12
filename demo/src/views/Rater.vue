<template>
  <div class="v-rates">
    <div class="cell">
      <v-rater :value="rate1" @input="v=>rate1=v"></v-rater>
    </div>
    <div class="cell">
      <v-rater :max="10" :value="rate2"></v-rater>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rate1: 0,
      rate2: 3.4
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-rates
  padding 20px
.row
  flex-direction row
  margin-top 20px
  margin-bottom 20px
.cell
  flex 1
</style>
