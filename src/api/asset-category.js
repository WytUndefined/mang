import request from '@/utils/request'

export function fetchAssetCategory(query) {
  return request({
    url: '/api/asset/categorys',
    method: 'get',
    params: query
  })
}

export function fetchAssetCategoryTree() {
  return request({
    url: '/api/asset/categorys/tree',
    method: 'get'
  })
}

export function fetchAssetCategoryById(id) {
  return request({
    url: `/api/asset/categorys/${id}`,
    method: 'get'
  })
}
export function createAssetCategory(data) {
  return request({
    url: '/api/asset/categorys',
    method: 'post',
    data
  })
}

export function updateAssetCategory(data) {
  return request({
    url: '/api/asset/categorys',
    method: 'put',
    data
  })
}

export function deleteAssetCategory(id) {
  return request({
    url: `/api/asset/categorys/${id}`,
    method: 'delete'
  })
}
