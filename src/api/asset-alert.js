import request from '@/utils/request'

export function fetchAssetAlert(params) {
  return request({
    url: '/api/asset/alert/configs',
    method: 'get',
    params
  })
}
export function fetchAssetAlertById(id) {
  return request({
    url: `/api/asset/alert/configs/${id}`,
    method: 'get'
  })
}
export function createAssetAlert(data) {
  return request({
    url: '/api/asset/alert/configs',
    method: 'post',
    data
  })
}

export function updateAssetAlert(data) {
  return request({
    url: '/api/asset/alert/configs',
    method: 'put',
    data
  })
}
