import request from '@/utils/request'

export function fetchAssetMaintain(params) {
  return request({
    url: '/api/asset/maintain/historys',
    method: 'get',
    params
  })
}
export function fetchAssetMaintainById(id) {
  return request({
    url: `/api/asset/maintain/historys/${id}`,
    method: 'get'
  })
}
export function createAssetMaintain(data) {
  return request({
    url: '/api/asset/maintain/historys',
    method: 'post',
    data
  })
}
