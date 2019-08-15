import request from '@/utils/request'

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/sys/permissions',
    method: 'get',
    params: query
  })
}

/**
 * 分页查询已绑定权限
 * @param query
 */
export function fetchRoleRelation(id) {
  return request({
    url: `/api/sys/permissions/role/relation/${id}`,
    method: 'get'
  })
}

/**
 * 查询详情
 * @param id
 */
export function getPermission(id) {
  return request({
    url: `/api/sys/permissions/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addPermission(data) {
  return request({
    url: '/api/sys/permissions',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updatePermission(data) {
  return request({
    url: `/api/sys/permissions`,
    method: 'put',
    data
  })
}

/**
 * 保存用户已绑定权限
 * @param query
 */
export function updateRoleRelation(data) {
  return request({
    url: '/api/sys/permissions/role/relation',
    method: 'post',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deletePermission(id) {
  return request({
    url: `/api/sys/permissions/${id}`,
    method: 'delete'
  })
}

