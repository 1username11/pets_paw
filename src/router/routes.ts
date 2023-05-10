import { routeNames } from './route-names'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: routeNames.home
  }
]

export {
  routes
}
