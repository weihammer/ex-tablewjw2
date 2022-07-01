import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import exTablelocal from '../package/index.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(exTablelocal)

Vue.config.productionTip = false
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

new Vue({
  render: h => h(App)
}).$mount('#app')
