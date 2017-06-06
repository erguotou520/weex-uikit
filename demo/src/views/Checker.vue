<template>
  <div class="v-checkers" style="padding:20px;">
    <div class="row">
      <v-checker :value="subs" @input="onSelectAll">全选/非全选</v-checker>
    </div>
    <div class="row">
      <v-checker :value="subs[0]" @input="v=>onChange(0, v)">item1</v-checker>
    </div>
    <div class="row">
      <v-checker :value="subs[1]" @input="v=>onChange(1, v)">item2</v-checker>
    </div>
    <div class="row">
      <v-checker :value="subs[2]" @input="v=>onChange(2, v)">item3</v-checker>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      subs: [false, false, false]
    }
  },
  methods: {
    onSelectAll (v) {
      this.subs = this.subs.map(sub => v)
    },
    onChange (index, v) {
      const tmp = this.subs.slice()
      tmp[index] = v
      this.subs = tmp
    }
  }
}
</script>
<style lang="stylus" scoped>
.row
  margin-top 20px
  margin-bottom 20px
</style>
