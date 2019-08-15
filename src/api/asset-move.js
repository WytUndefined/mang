import request from '@/utils/request'

export function fetchAssetMove(params) {
  return request({
    url: '/api/asset/move/historys',
    method: 'get',
    params
  })
}
export function fetchAssetMoveById(id) {
  return request({
    url: `/api/asset/move/historys/${id}`,
    method: 'get'
  })
}
export function createAssetMove(data) {
  return request({
    url: '/api/asset/move/historys',
    method: 'post',
    data
  })
}
