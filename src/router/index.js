import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {}
const index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const recommend = r => require.ensure([], () => r(require('@/pages/recommend-music')), 'recommend')
const hot = r => require.ensure([], () => r(require('@/pages/hot-music')), 'hot')
const search = r => require.ensure([], () => r(require('@/pages/search-music')), 'search')
const alias = {
  index: '/'
}
// const isChildren = true
const meta = {
  parent: true
}

const route = name => {
  return {
    path: `/${name}`,
    name,
    component: components[name],
    meta: meta,
    alias: alias[name]
  }
}
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: {name: 'recommend'},
    children: [{
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }, {
      path: '/hot',
      name: 'hot',
      component: hot
    }, {
      path: '/search',
      name: 'search',
      component: search
    }]
  }
]
for (let key in components) {
  routes.push(route(key))
}

export default new Router({
  routes
})
