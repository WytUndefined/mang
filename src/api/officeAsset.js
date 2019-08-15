import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/assets',
    method: 'get',
    params: query
  })
}

export function fetchRecordList(query) {
  return request({
    url: '/api/assets/record',
    method: 'get',
    params: query
  })
}

export function exportExcel(query) {
  return request({
    url: '/api/assets/excel',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

export function exportPdf(query) {
  return request({
    url: '/api/assets/pdf',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

export function fetchAsset(id) {
  return request({
    url: `/api/assets/${id}`,
    method: 'get'
  })
}

export function fetchPv(pv) {
  return request({
    url: '/api/office/pv',
    method: 'get',
    params: { pv }
  })
}

export function createAsset(data) {
  return request({
    url: '/api/assets',
    method: 'post',
    data
  })
}

export function updateAsset(data) {
  return request({
    url: '/api/assets',
    method: 'put',
    data
  })
}

export function deleteAsset(id) {
  return request({
    url: `/api/assets/${id}`,
    method: 'delete'
  })
}
