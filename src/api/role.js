import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/routes',
    method: 'get'
  })
}

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/sys/roles',
    method: 'get',
    params: query
  })
}

/**
 * 分页查询已绑定角色
 * @param query
 */
export function fetchUserRelation(query) {
  return request({
    url: '/api/sys/roles/user/relation',
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getRole(id) {
  return request({
    url: `/api/sys/roles/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addRole(data) {
  return request({
    url: '/api/sys/roles',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateRole(data) {
  return request({
    url: `/api/sys/roles`,
    method: 'put',
    data
  })
}

/**
 * 保存用户已绑定角色
 * @param query
 */
export function updateUserRelation(data) {
  return request({
    url: '/api/sys/roles/user/relation',
    method: 'post',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteRole(id) {
  return request({
    url: `/api/sys/roles/${id}`,
    method: 'delete'
  })
}

