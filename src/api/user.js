import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login',
    method: 'post',
    params: { account: data.account, password: data.password, verifyCode: data.verifyCode }
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/info',
    method: 'get'
  })
}
export function fetchUsersByUserId(params) {
  return request({
    url: '/api/sys/users/group/children',
    method: 'get',
    params
  })
}

export function logout() {
  return request({
    url: '/api/logout',
    method: 'get'
  })
}

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/sys/users',
    method: 'get',
    params: query
  })
}

/**
 * 分页查询机构下用户
 * @param query
 */
export function fetchByGroup(query) {
  return request({
    url: '/api/sys/users/group/children',
    method: 'get',
    params: query
  })
}

/**
 * 分页查询机构下用户
 * @param query
 */
export function fetchUsersByGroupId(query) {
  return request({
    url: '/api/sys/users/group/children',
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getUser(id) {
  return request({
    url: `/api/sys/users/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addUser(data) {
  return request({
    url: '/api/sys/users',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateUser(data) {
  return request({
    url: `/api/sys/users`,
    method: 'put',
    data
  })
}

/**
 * 修改密码
 * @param id
 * @param data
 */
export function updateUserPassword(data) {
  return request({
    url: `/api/sys/users/password`,
    method: 'put',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteUser(id) {
  return request({
    url: `/api/sys/users/${id}`,
    method: 'delete'
  })
}
