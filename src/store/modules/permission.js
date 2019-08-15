import { constantRoutes, routerMap } from '@/router'
import { getUserMenuTree } from '@/api/menu'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, { roles, id }) {
    return new Promise((resolve, reject) => {
      let accessedRoutes
      getUserMenuTree({ limit: -1, id: id }).then(res => {
        if (!res.ok) {
          reject('系统菜单加载失败，请刷新后重试！')
        }
        const asyncRoutes = toTree(res.data.records)
        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    })
  }
}

// 生成菜单树
function toTree(data) {
  // 删除 所有 children,以防止多次调用
  data.forEach(function(item) {
    delete item.children
  })
  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  var menuRouteData = []
  data.forEach(function(item) {
    menuRouteData.push({
      id: item.id,
      pid: item.pid,
      path: item.url,
      component: routerMap[item.viewPath],
      name: item.code,
      hidden: item.hideFlag === 1,
      meta: {
        title: item.name,
        icon: item.icon
      }
    })
  })
  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  var map = {}
  menuRouteData.forEach(function(item) {
    map[item.id] = item
  })
  var val = []
  menuRouteData.forEach(function(item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    var parent = map[item.pid]
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item)
    }
  })
  return val
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
