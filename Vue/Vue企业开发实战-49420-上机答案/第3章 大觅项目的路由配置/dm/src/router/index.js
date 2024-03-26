import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import TicketList from '@/pages/ticketList'
import TicketDesc from '@/pages/ticketDesc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ticketList',
      name: 'TicketList',
      component: TicketList
    },
    {
      path: '/ticketDesc',
      name: 'TicketDesc',
      component: TicketDesc
    },
  ]
})
