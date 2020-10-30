import Vue from 'vue'
import App from "./App.vue"
import router from './router'
// import marked from "marked"

Vue.config.productionTip = false

// Vue.use(sass);

new Vue({
  router,
  // marked,
  render: h => h(App)
}).$mount('#app')
