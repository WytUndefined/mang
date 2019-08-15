import request from '@/utils/request'

export function fetchNotifyList(query) {
  return request({
    url: '/api/sys/notifys',
    method: 'get',
    params: query
  })
}

export function fetchNotifyById(id) {
  return request({
    url: `/api/sys/notifys/${id}`,
    method: 'get'
  })
}

export function createNotify(data) {
  return request({
    url: '/api/sys/notifys',
    method: 'post',
    data
  })
}

export function updateNotify(data) {
  return request({
    url: '/api/sys/notifys',
    method: 'put',
    data
  })
}

export function deleteNotify(id) {
  return request({
    url: `/api/sys/notifys/${id}`,
    method: 'delete'
  })
}
