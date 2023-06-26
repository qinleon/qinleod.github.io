import Vue from 'vue'
import App from './App.vue'
import { Calendar } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Calendar)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
