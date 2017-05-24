<template>
  <div class="v-buttons">
    <u-button class="button-item" @click="toast">primary</u-button>
    <u-button class="button-item" disabled>primary disabled</u-button>
    <u-button class="button-item" type="highlight" @click="showVueVersion">highlight</u-button>
    <u-button class="button-item" type="highlight" disabled>highlight disabled</u-button>
    <u-button class="button-item" type="minor" @click="getDocument">minor</u-button>
    <u-button class="button-item" type="minor" disabled>minor disabled</u-button>
  </div>
</template>
<script>
const modal = weex.requireModule('modal')
const clipboard = weex.requireModule('clipboard')
export default {
  methods: {
    toast () {
      modal.toast({
        message: 'This is a toast',
        duration: 0.3
      })
    },
    showVueVersion () {
      modal.toast({
        message: Vue.version,
        duration: 0.3
      })
    },
    getDocument () {
      modal.toast({
        message: weex.document,
        duration: 0.3
      })
      clipboard.setString(JSON.stringify(weex.document))
    }
  }
}
</script>
<style lang="stylus" scoped>
.button-item
  margin-top 20px
  margin-bottom 20px
</style>
