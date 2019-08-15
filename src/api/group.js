import request from '@/utils/request'

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/sys/groups',
    method: 'get',
    params: query
  })
}

/**
 * 分页查询子机构
 * @param query
 */
export function fetchChildrenList(query) {
  return request({
    url: '/api/sys/groups/children',
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getGroup(id) {
  return request({
    url: `/api/sys/groups/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addGroup(data) {
  return request({
    url: '/api/sys/groups',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateGroup(data) {
  return request({
    url: `/api/sys/groups`,
    method: 'put',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteGroup(id) {
  return request({
    url: `/api/sys/groups/${id}`,
    method: 'delete'
  })
}
