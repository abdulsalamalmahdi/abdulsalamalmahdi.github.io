import Vue from 'vue'
import App from './App.vue'
import VanillaTilt from "vanilla-tilt";
Vue.config.productionTip = false
Vue.directive('tilting', function (el, binding) {
  
  console.log(el)
  VanillaTilt.init(el, Object.assign({},binding.value));
    
  }
);
new Vue({
  render: h => h(App),
}).$mount('#app')
