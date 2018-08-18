import Vue from 'vue'
import App from './App.vue'
import { init as initRest } from './engine/Rest'
import 'lib-flexible/flexible'

initRest()

new Vue({
  el: '#app',
  render: h => h(App)
})
