import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import CreateMeetup from '@/views/CreateMeetup.vue'
import Meetups from '@/views/Meetups.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Profile from '@/views/Profile.vue'
import Meetup from '@/views/Meetup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/meetups',
      name: 'meetups',
      component: Meetups
    },{
      path: '/meetup/new',
      name: 'createMeetup',
      component: CreateMeetup
    },{
      path: '/meetup/:id',
      name: 'Meetup',
      component: Meetup
    },{
      path: '/signup',
      name: 'signup',
      component: SignUp
    },{
      path: '/signin',
      name: 'signin',
      component: SignIn
    },{
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  mode: 'history'
})
