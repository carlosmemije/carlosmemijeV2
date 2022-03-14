import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61cea72e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _711d2df8 = () => interopDefault(import('../pages/education.vue' /* webpackChunkName: "pages/education" */))
const _7c218684 = () => interopDefault(import('../pages/experience.vue' /* webpackChunkName: "pages/experience" */))
const _44e632ce = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _225ef1a4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _61cea72e,
    name: "about"
  }, {
    path: "/education",
    component: _711d2df8,
    name: "education"
  }, {
    path: "/experience",
    component: _7c218684,
    name: "experience"
  }, {
    path: "/projects",
    component: _44e632ce,
    name: "projects"
  }, {
    path: "/",
    component: _225ef1a4,
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
