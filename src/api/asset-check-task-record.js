import request from '@/utils/request'

export function fetchAssetCheckTaskRecord(query) {
  return request({
    url: '/api/asset/check/task/records',
    method: 'get',
    params: query
  })
}
