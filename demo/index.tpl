<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>weex-vue-demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-touch-fullscreen" content="yes">
  <meta name="format-detection" content="telephone=no, email=no">
  <style>
  .tip {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    display: none;
  }
  #qr {
    max-width: 320px;
    margin: 10px auto 20px;
    display: none;
  }
  </style>
</head>
<body>
  <p class="tip">用playground扫码打开</p>
  <img id="qr" src="" alt="qrcode">
  <div id="root"></div>
</body>
<script src="//unpkg.com/jr-qrcode"></script>
<script>
  if (!/mobile/.test(navigator.userAgent.toLowerCase())) {
    var link
    if (/github.io/.test(location.href)) {
      link = location.href.replace(/#\//, 'app.weex.js')
    } else {
      var ip = '<%= process.env.IP %>:' + location.port
      link = 'http://' + ip + '/app.weex.js'
    }
    var code = jrQrcode.getQrBase64(link);
    document.getElementById('qr').src = code;
    document.getElementById('qr').style.display = 'block'
    document.getElementsByClassName('tip')[0].style.display = 'block'
  }
</script>
</html>
