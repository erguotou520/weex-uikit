<template>
  <v-chat :height="height">
    <v-chat-text v-for="n in 20" :key="n" :right="n%6===0"
      :name="`${n%6!==0?'user'+n:''}`" :avatar="`https://randomuser.me/api/portraits/men/${n}.jpg`">{{n%4===0?'这个是特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长特别特别长':'短字'}} {{n}}</v-chat-text>
  </v-chat>
</template>
<script>
import ChatText from '../components/chat-item/ChatText'
// const modal = weex.requireModule('modal')
export default {
  data () {
    const deviceInfo = this.getDeviceInfo()
    return {
      height: deviceInfo.deviceHeight * 750 / deviceInfo.deviceWidth - 248
    }
  },
  components: {
    [ChatText.name]: ChatText
  },
  methods: {},
  mounted () {
    // modal.confirm({ message: JSON.stringify + ',' + this.height, okTitle: 'ok' })
  }
}
</script>
<style>

</style>
