<template>
  <div class="v-buttons">
    <u-button class="button-item" @click="toast">primary</u-button>
    <u-button class="button-item" disabled>primary disabled</u-button>
    <u-button class="button-item" type="highlight">highlight</u-button>
    <u-button class="button-item" type="highlight" disabled>highlight disabled</u-button>
    <u-button class="button-item" type="minor">minor</u-button>
    <u-button class="button-item" type="minor" disabled>minor disabled</u-button>
  </div>
</template>
<script>
const modal = weex.requireModule('modal')
export default {
  methods: {
    toast () {
      modal.toast({
        message: 'This is a toast',
        duration: 0.3
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.button-item
  margin-top 20px
  margin-bottom 20px
</style>
