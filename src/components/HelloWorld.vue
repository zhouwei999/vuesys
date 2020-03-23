<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
  </div>
</template>

<script>
import {get,post} from '../axios/http.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  mounted(){ 
      // e.g
      this.$api.article.getWeather({        
          "showapi_appid": 27292,
          "showapi_sign": '829aecc822384203adc70d2c4853f5e3',
          'showapi_timestamp':'20200323142239',
          'showapi_res_gzip':0,
          "from": "5",
          "area": '常州',
          "needMoreDay": "1",
          "needIndex": "0",
          "needHourData": "0",
          "need3HourForcast": "0",
          "needAlarm": "0"     
      }).then(res=> {
          // 执行某些操作      
      })    
       
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
