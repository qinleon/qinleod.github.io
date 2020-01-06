import Vue from 'vue'
import Router from 'vue-router'
import Menu1 from '@/components/menu1'
import Menu2 from '@/components/menu2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu1',
      component: Menu1
    },
    {
      path: '/menu1',
      name: 'menu1',
      component: Menu1
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: Menu2
    },
  ]
})
