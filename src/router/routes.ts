import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from '@/router/route-names'
import Home from '@/views/home-page/Home.vue'
import Breeds from '@/views/breeds/Breeds.vue'
import BreedsInfo from '@/views/breeds/components/BreedsInfo.vue'
import Gallery from '@/views/gallery/Gallery.vue'
import Voting from '@/views/voting/Voting.vue'
import Likes from '@/views/likes/Likes.vue'
import Dislikes from '@/views/dislikes/Dislikes.vue'
import Favorite from '@/views/favorite/Favorite.vue'
import Search from '@/views/search/Search.vue'

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
  },
  {
    path: '/search',
    name: routeNames.search,
    component: Search
  }

]

export {
  routes
}
