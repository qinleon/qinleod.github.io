import Vue from 'vue'
import App from './App.vue'
import { Calendar, ButtonGroup, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Calendar)
Vue.use(ButtonGroup)
Vue.use(Button)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
