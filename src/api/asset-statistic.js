import request from '@/utils/request'

export function fetchAssetStatistic(params) {
  return request({
    url: '/api/asset/statistic',
    method: 'get',
    params
  })
}

export function exportExcel(query) {
  return request({
    url: '/api/asset/statistic/excel',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}
