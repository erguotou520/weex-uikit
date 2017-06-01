<template>
  <div class="v-tabs">
    <u-tabs :value="tab1" @input="v=>tab1=v">
      <u-tab label="新闻" value="news"><text>新闻。。。</text></u-tab>
      <u-tab label="娱乐" value="entertainment"><text>娱乐。。。</text></u-tab>
      <u-tab label="八卦" value="gossip"><text>八卦。。。</text></u-tab>
      <u-tab label="体育" value="sport"><text>体育。。。</text></u-tab>
    </u-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab1: 'sport'
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-tabs
  padding 20px
</style>
