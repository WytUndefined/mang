import request from '@/utils/request'

export function fetchAssetLocation(params) {
  return request({
    url: '/api/asset/locations',
    method: 'get',
    params
  })
}

/**
 * 查询详情
 * @param id
 */
export function getAssetLocation(id) {
  return request({
    url: `/api/asset/locations/${id}`,
    method: 'get'
  })
}

/**
 * 新增
 * @param data
 */
export function addAssetLocation(data) {
  return request({
    url: '/api/asset/locations',
    method: 'post',
    data
  })
}

/**
 * 修改
 * @param id
 * @param data
 */
export function updateAssetLocation(data) {
  return request({
    url: `/api/asset/locations`,
    method: 'put',
    data
  })
}

/**
 * 删除
 * @param id
 */
export function deleteAssetLocation(id) {
  return request({
    url: `/api/asset/locations/${id}`,
    method: 'delete'
  })
}

