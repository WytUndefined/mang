import request from '@/utils/request'

export function fetchAssetReturn(params) {
  return request({
    url: '/api/asset/return/historys',
    method: 'get',
    params
  })
}
export function fetchAssetReturnById(id) {
  return request({
    url: `/api/asset/return/historys/${id}`,
    method: 'get'
  })
}
export function createAssetReturn(data) {
  return request({
    url: '/api/asset/return/historys',
    method: 'post',
    data
  })
}
