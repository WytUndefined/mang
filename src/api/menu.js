import request from '@/utils/request'

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/sys/menus',
    method: 'get',
    params: query
  })
}

/**
 * 菜单树
 * @param query
 */
export function getMenuTree(query) {
  return request({
    url: '/api/sys/menus/tree',
    method: 'get',
    params: query
  })
}

/**
 * 用户菜单树
 * @param query
 */
export function getUserMenuTree(query) {
  return request({
    url: `/api/sys/menus/user/${query.id}`,
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getMenu(id) {
  return request({
    url: `/api/sys/menus/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addMenu(data) {
  return request({
    url: '/api/sys/menus',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateMenu(data) {
  return request({
    url: `/api/sys/menus`,
    method: 'put',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteMenu(id) {
  return request({
    url: `/api/sys/menus/${id}`,
    method: 'delete'
  })
}

