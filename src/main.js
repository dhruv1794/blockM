import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueSweetalert2 from 'vue-sweetalert2';
 
Vue.use(VueSweetalert2);



Vue.use(VueResource)
Vue.http.options.root = 'http://tapdiscover.com:9000/design-suggestions/'
new Vue({
  el: '#app',
  render: h => h(App)
})
