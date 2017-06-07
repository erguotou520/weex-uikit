<template>
  <div class="v-ranges">
    <div class="row">
      <v-range :value="range1" @input="v=>range1=v"></v-range>
    </div>
    <div class="row">
      <v-range :value="range2" :min="64" :max="1024" @input="v=>range2=v"></v-range>
    </div>
    <div class="row">
      <v-range :value="range3" disabled></v-range>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      range1: 10,
      range2: 64,
      range3: 99
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-ranges
  padding 20px
.row
  flex-direction row
  margin-top 20px
  margin-bottom 20px
</style>
