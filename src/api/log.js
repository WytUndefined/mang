import request from '@/utils/request'

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/sys/logs',
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getLog(id) {
  return request({
    url: `/api/sys/logs/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addLog(data) {
  return request({
    url: '/api/sys/logs',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateLog(data) {
  return request({
    url: `/api/sys/logs`,
    method: 'put',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteLog(id) {
  return request({
    url: `/api/sys/logs/${id}`,
    method: 'delete'
  })
}

