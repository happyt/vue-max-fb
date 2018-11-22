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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in and currentUser will no longer return null.
        console.log("Auth: signed in")
        this.$store.dispatch('autoSignIn', user)
      } else {
        // No user is signed in.
        console.log("Auth: not signed in")
      }
    });
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
