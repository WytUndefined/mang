import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '桌面管理', icon: 'dashboard', affix: true }
      }
    ]
  }
]

// 顶山资产管理系统菜单
export const routerMap = {
  Layout: Layout,
  Notify: () => import('@/views/sys/notify/index'),
  Group: () => import('@/views/sys/group/index'),
  User: () => import('@/views/sys/user/index'),
  WxUser: () => import('@/views/sys/wxuser/index'),
  Role: () => import('@/views/sys/role/index'),
  PermissionManage: () => import('@/views/sys/permission/index'),
  Menu: () => import('@/views/sys/permission/menu/index'),
  Dictionary: () => import('@/views/sys/dict/index'),
  Config: () => import('@/views/sys/config/index'),
  Log: () => import('@/views/sys/log/index'),
  Schedule: () => import('@/views/sys/schedule/index'),
  Profile: () => import('@/views/sys/profile/index'),
  AssetLabelTemplate: () => import('@/views/setting/asset-label-template'),
  AssetCategory: () => import('@/views/setting/asset-category'),
  AssetLocation: () => import('@/views/setting/asset-location'),
  RealEstateStatistics: () => import('@/views/real-estate-asset/statistics'),
  RealEstateAssetCheck: () => import('@/views/real-estate-asset/list'),
  RealEstateAssetList: () => import('@/views/real-estate-asset/list'),
  RealEstateAssetAlert: () => import('@/views/real-estate-asset/alert'),
  RealEstateAssetAudit: () => import('@/views/real-estate-asset/audit'),
  OfficeAssetStatistics: () => import('@/views/office-asset/statistics'),
  OfficeAssetCheck: () => import('@/views/office-asset/check'),
  OfficeAssetAudit: () => import('@/views/office-asset/audit'),
  OfficeAssetList: () => import('@/views/office-asset/asset-list')
}

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
