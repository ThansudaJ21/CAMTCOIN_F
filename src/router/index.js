import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Authentication/LoginForm.vue'
import Register from '@/views/Authentication/RegisterForm.vue'
import Trading from '../views/Trading.vue'
import Buycoins from '@/views/TradingForm/Buyform.vue'
import Sellcoins from '@/views/TradingForm/Sellform.vue'
import NotFound from '@/views/NotFound.vue'
import NetWorkError from '@/views/NetworkError.vue'
import NProgress from 'nprogress'
// import About from '../views/About.vue'
// import EventDetails from '@/views/event/Details.vue'
// import EventRegister from '@/views/event/Register.vue'
// import EventEdit from '@/views/event/Edit.vue'
/* import EventLayout from '@/views/event/Layout.vue' */
// import AddEvent from '@/views/EventForm.vue'
/* import EventService from '@/services/EventService.js'
import GStore from '@/store' */
// import OrganizerService from '@/services/OrganizerService.js'

const routes = [
  {
    path: '/',
    name: 'Trading',
    component: Trading,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },

  // {
  //   path: '/add-event',
  //   name: 'AddEvent',
  //   component: AddEvent,
  //   beforeEnter: () => {
  //     return OrganizerService.getOrganizers()
  //       .then((response) => {
  //         GStore.organizers = response.data
  //       })
  //       .catch(() => {
  //         GStore.organizers = null
  //         console.log('cannot load organizer')
  //       })
  //   }
  // },
/*   {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      return EventService.getEvent(to.params.id) // Return and params.id
        .then((response) => {
          // Still need to set the data here
          GStore.event = response.data // <--- Store the event
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              // <--- Return
              name: '404Resource',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'NetworkError' } // <--- Return
          }
        })
    },
    children: [

    ]
  }, */
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registers',
    name: 'Register',
    component: Register
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  },
  {
    path: '/buycoins',
    name: 'Buycoins',
    component: Buycoins
  },
  {
    path: '/sellcoins',
    name: 'Sellcoins',
    component: Sellcoins
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
