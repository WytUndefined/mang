import request from '@/utils/request'

export function fetchAssetCheckTask(query) {
  return request({
    url: '/api/asset/check/tasks',
    method: 'get',
    params: query
  })
}

export function fetchAssetCheckTaskById(id) {
  return request({
    url: `/api/asset/check/tasks/${id}`,
    method: 'get'
  })
}

export function createAssetCheckTask(data) {
  return request({
    url: '/api/asset/check/tasks',
    method: 'post',
    data
  })
}

export function updateAssetCheckTask(data) {
  return request({
    url: '/api/asset/check/tasks',
    method: 'put',
    data
  })
}

export function deleteAssetCheckTask(id) {
  return request({
    url: `/api/asset/check/tasks/${id}`,
    method: 'delete'
  })
}
