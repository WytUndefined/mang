import request from '@/utils/request'

export function fetchAssetUsage(params) {
  return request({
    url: '/api/asset/usage/historys',
    method: 'get',
    params
  })
}
export function fetchAssetUsageById(id) {
  return request({
    url: `/api/asset/usage/historys/${id}`,
    method: 'get'
  })
}
export function createAssetUsage(data) {
  return request({
    url: '/api/asset/usage/historys',
    method: 'post',
    data
  })
}
