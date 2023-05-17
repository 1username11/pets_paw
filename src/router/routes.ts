import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from '@/router/route-names'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeNames.home,
    component: import('@/views/home-page/Home.vue')
  },
  {
    path: '/breeds',
    name: routeNames.breeds,
    component: import('@/views/breeds/Breeds.vue')
  },
  {
    path: '/gallery',
    name: routeNames.gallery,
    component: import('@/views/gallery/Gallery.vue')
  },
  {
    path: '/voting',
    name: routeNames.voting,
    component: import('@/views/voting/Voting.vue')
  },
  {
    path: '/likes',
    name: routeNames.likes,
    component: import('@/views/likes/Likes.vue')
  },
  {
    path: '/dislikes',
    name: routeNames.dislikes,
    component: import('@/views/dislikes/Dislikes.vue')
  },
  {
    path: '/favorite',
    name: routeNames.favorite,
    component: import('@/views/favorite/Favorite.vue')
  },
  {
    path: '/breeds/:id',
    name: routeNames.breedsInfo,
    component: import('@/views/breeds/components/BreedsInfo.vue')
  },
  {
    path: '/search',
    name: routeNames.search,
    component: import('@/views/search/Search.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: routeNames.home }
  }

]

export {
  routes
}
