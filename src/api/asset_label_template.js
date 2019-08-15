import request from '@/utils/request'

export function fetchAssetLabelTemplate(query) {
  return request({
    url: '/api/asset/label/templates',
    method: 'get',
    params: query
  })
}

export function updateAssetLabelTemplate(data) {
  return request({
    url: '/api/asset/label/templates',
    method: 'put',
    data
  })
}
