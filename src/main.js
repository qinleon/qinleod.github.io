import Vue from 'vue'
import App from './App.vue'
import { Menu,Submenu,MenuItem,MenuItemGroup,Header, Aside ,Main,Container,Message,RadioGroup,RadioButton} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueRouter from 'vue-router'
import router from './router';
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.config.productionTip = false
Vue.prototype.$message = Message;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
