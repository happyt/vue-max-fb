import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
var fbconfig = require(`./fb-config.js`)
import router from './router'
import store from './store'
import './registerServiceWorker'
import DateFilter from './Filters/date'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(fbconfig)
  }
}).$mount('#app')
