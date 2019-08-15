import request from '@/utils/request'

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/wx/users',
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getWxUser(id) {
  return request({
    url: `/api/wx/users/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addWxUser(data) {
  return request({
    url: '/api/wx/users',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateWxUser(data) {
  return request({
    url: `/api/wx/users`,
    method: 'put',
    data
  })
}

/**
 * 绑定用户
 * @param id
 * @param data
 */
export function bindUserToWxUser(data) {
  return request({
    url: `/api/wx/users/bind`,
    method: 'post',
    data
  })
}

/**
 * 取消绑定用户
 * @param id
 * @param data
 */
export function unBindUserToWxUser(data) {
  return request({
    url: `/api/wx/users/unbind`,
    method: 'post',
    params: data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteWxUser(id) {
  return request({
    url: `/api/wx/users/${id}`,
    method: 'delete'
  })
}

