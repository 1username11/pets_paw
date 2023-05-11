import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from '@/router/route-names'
import Home from '@/views/HomePage/Home.vue'
import Breeds from '@/views/Breeds/Breeds.vue'
import Gallery from '@/views/Gallery/Gallery.vue'
import Voting from '@/views/Voting/Voting.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeNames.home,
    component: Home
  },
  {
    path: '/breeds',
    name: routeNames.breeds,
    component: Breeds
  },
  {
    path: '/gallery',
    name: routeNames.gallery,
    component: Gallery
  },
  {
    path: '/voting',
    name: routeNames.voting,
    component: Voting
  }

]

export {
  routes
}
