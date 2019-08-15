import request from '@/utils/request'

export function fetchAssetScrap(params) {
  return request({
    url: '/api/asset/scrap/historys',
    method: 'get',
    params
  })
}
export function fetchAssetScrapById(id) {
  return request({
    url: `/api/asset/scrap/historys/${id}`,
    method: 'get'
  })
}
export function createAssetScrap(data) {
  return request({
    url: '/api/asset/scrap/historys',
    method: 'post',
    data
  })
}
