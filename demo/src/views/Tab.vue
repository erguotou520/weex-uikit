<template>
  <div class="v-tabs">
    <u-tabs :value="tab1" @input="v=>tab1=v">
      <u-tab label="新闻" value="news">
        <list class="list">
          <refresh class="refresh" @refresh="refresh1" :display="refreshing1?'show':'hide'">
            <text class="refresh-text">Refreshing ...</text>
          </refresh>
          <cell v-for="n in count1" class="cell"><text class="text">新闻{{n}}</text></cell>
          <loading class="loadmore">
            <text class="loadmore-text" @loading="more1" :display="loading1?'show':'hide'">Loadmore ...</text>
          </loading>
        </list>
      </u-tab>
      <u-tab label="娱乐" value="entertainment">
        <list class="list">
          <refresh class="refresh" @refresh="refresh2" :display="refreshing2?'show':'hide'">
            <text class="refresh-text">Refreshing ...</text>
          </refresh>
          <cell v-for="n in count2" class="cell"><text class="text">娱乐{{n}}</text></cell>
          <loading class="loadmore">
            <text class="loadmore-text" @loading="more2" :display="loading2?'show':'hide'">Loadmore ...</text>
          </loading>
        </list>
      </u-tab>
      <u-tab label="八卦" value="gossip"><text>八卦。。。</text></u-tab>
      <u-tab label="体育" value="sport"><text>体育。。。</text></u-tab>
    </u-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab1: 'sport',
      count1: 20,
      count2: 20,
      refreshing1: false,
      refreshing2: false,
      loading1: false,
      loading2: false
    }
  },
  methods: {
    refresh1 () {
      this.refreshing1 = true
      setTimeout(() => {
        this.refreshing1 = false
      }, 800)
    },
    refresh2 () {
      this.refreshing2 = true
      setTimeout(() => {
        this.refreshing2 = false
      }, 800)
    },
    more1 () {
      this.loading1 = true
      setTimeout(() => {
        this.loading1 = false
        this.count1 += 20
      }, 800)
    },
    more2 () {
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false
        this.count2 += 20
      }, 800)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../packages/theme-default/var.styl'
.v-tabs
  padding 20px
.list
  background-color #f9fafc
.refresh
.loadmore
  padding 20px
  justify-content center
  align-items center
.refresh-text
.loadmore-text
  color $color-primary
.cell
  margin-top 20px
  margin-bottom @margin-top
  padding 20px
.text
  color #666
  font-size 30px
</style>
