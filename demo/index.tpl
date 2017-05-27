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
  <style scoped>
  ._btn {
    width: 50px;
    height: 50px;
    background-color: #ff3083;
    position: fixed;
    top: 20px;
    right: 20px;
    border-radius: 25px;
    font-size: 40px;
    color: #fff;
    text-align: center;
    line-height: 45px;
    display: none;
  }

  ._mask {
    background: rgba(25, 170, 228, .7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
  }
  
  ._box {
    background-color: #fefbf4;
    border-radius: 10px;
    /* padding: 20px; */
    border: 1px solid #4390ae;
    box-shadow: 0 5px 10px #197092;
  }

  .tip {
    background-color: #00db98;
    border-radius: 10px 10px 0 0;
    width: 100%;
    color: #fff;
    /* margin-top: 20px; */
    padding: 20px;
    margin-bottom: 10px;
    text-align: center;
    display: none;
  }
  #qr {
    max-width: 320px;
    margin: 10px auto 2px;
    display: none;
  }
  #link {
    margin: 2px auto 10px;
    text-align: center;
  }
  </style>
</head>
<body>
  <p class="_btn" id="btn">er</p>
  <div class="_mask">
  <div class="_box">
    <p class="tip">用playground扫码打开</p>
    <img id="qr" src="" alt="qrcode">
    <a id="link" href=""></a>
  </div>
  </div>
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
    document.getElementById('link').setAttribute('href', link)
    document.getElementById('link').textContent = link

    //添加悬浮
    document.getElementsByClassName('tip')[0].style.display = 'block'
    document.getElementById('btn').style.display = 'block'
    var mask = document.getElementsByClassName("_mask")[0];
    document.getElementById('btn').onclick = function () {
        mask.style.display = "flex";
        if(event && event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
    document.onclick = function (event) {
        if(event.target.className != ""){
            mask.style.display = "none";
        }
    }
  }

</script>
</html>
