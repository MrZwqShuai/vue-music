import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {}
components.index = r => require.ensure([], () => r(require('@/pages/index')), 'index')

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
const routes = []
for (let key in components) {
  routes.push(route(key))
}

export default new Router({
  routes
})
