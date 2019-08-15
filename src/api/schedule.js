import request from '@/utils/request'

/**
 * 分页查询
 * @param query
 */
export function fetchList(query) {
  return request({
    url: '/api/sys/schedules',
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getSchedule(id) {
  return request({
    url: `/api/sys/schedules/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addSchedule(data) {
  return request({
    url: '/api/sys/schedules',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateSchedule(data) {
  return request({
    url: `/api/sys/schedules`,
    method: 'put',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteSchedule(id) {
  return request({
    url: `/api/sys/schedules/${id}`,
    method: 'delete'
  })
}

