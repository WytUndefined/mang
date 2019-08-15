import request from '@/utils/request'

export function fetchAssetRent(params) {
  return request({
    url: '/api/asset/rent/historys',
    method: 'get',
    params
  })
}
export function fetchAssetRentById(id) {
  return request({
    url: `/api/asset/rent/historys/${id}`,
    method: 'get'
  })
}
export function createAssetRent(data) {
  return request({
    url: '/api/asset/rent/historys',
    method: 'post',
    data
  })
}
