import request from '@/utils/request'

export function fetchAssetHandle(params) {
  return request({
    url: '/api/asset/handle/historys',
    method: 'get',
    params
  })
}
export function createAssetHandle(data) {
  return request({
    url: '/api/asset/handle/historys',
    method: 'post',
    data
  })
}

