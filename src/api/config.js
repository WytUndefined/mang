import request from '@/utils/request'

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/sys/configs',
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getConfig(id) {
  return request({
    url: `/api/sys/configs/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addConfig(data) {
  return request({
    url: '/api/sys/configs',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateConfig(data) {
  return request({
    url: `/api/sys/configs`,
    method: 'put',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteConfig(id) {
  return request({
    url: `/api/sys/configs/${id}`,
    method: 'delete'
  })
}

