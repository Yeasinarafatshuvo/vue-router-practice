import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import Jobs from '../views/jobs/Jobs.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/jobs',
    name:'jobs',
    component:Jobs
  },
  {
    path:'/jobs/:id',
    name:'JobDetails',
    component:JobDetails,
    props:true
  },
  //redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  //catchall 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
