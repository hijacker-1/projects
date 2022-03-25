import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _693951d1 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _db2028f6 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _73e28329 = () => interopDefault(import('../pages/blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _2cf7ad0e = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _fd413d98 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _5e926fa2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _72c46725 = () => interopDefault(import('../pages/diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _e5dda6da = () => interopDefault(import('../pages/diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _fed46b26 = () => interopDefault(import('../pages/gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _0171a0eb = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _67b4a652 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _791c6986 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _ddd09d1c = () => interopDefault(import('../pages/products-details/_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _37c9fdd4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _693951d1,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _db2028f6,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _73e28329,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _2cf7ad0e,
    name: "cart"
  }, {
    path: "/checkout",
    component: _fd413d98,
    name: "checkout"
  }, {
    path: "/contact",
    component: _5e926fa2,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _72c46725,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _e5dda6da,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _fed46b26,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _0171a0eb,
    name: "login"
  }, {
    path: "/products",
    component: _67b4a652,
    name: "products"
  }, {
    path: "/signup",
    component: _791c6986,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _ddd09d1c,
    name: "products-details-id"
  }, {
    path: "/",
    component: _37c9fdd4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
