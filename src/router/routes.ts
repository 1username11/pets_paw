import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from '@/router/route-names'
import Home from '@/views/HomePage/Home.vue'
import Breeds from '@/views/Breeds/Breeds.vue'
import BreedsInfo from '@/views/Breeds/components/BreedsInfo.vue'
import Gallery from '@/views/Gallery/Gallery.vue'
import Voting from '@/views/Voting/Voting.vue'
import Likes from '@/views/Likes/Likes.vue'
import Dislikes from '@/views/Dislikes/Dislikes.vue'
import Favorite from '@/views/Favorite/Favorite.vue'

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
  },
  {
    path: '/likes',
    name: routeNames.likes,
    component: Likes
  },
  {
    path: '/dislikes',
    name: routeNames.dislikes,
    component: Dislikes
  },
  {
    path: '/favorite',
    name: routeNames.favorite,
    component: Favorite
  },
  {
    path: '/breeds/:id',
    name: routeNames.breedsInfo,
    component: BreedsInfo
  }

]

export {
  routes
}
