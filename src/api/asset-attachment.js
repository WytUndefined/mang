import request from '@/utils/request'

export function fetchAttachment(params) {
  return request({
    url: '/api/asset/attachments',
    method: 'get',
    params
  })
}

export function deleteAttachment(id) {
  return request({
    url: `/api/asset/attachments/${id}`,
    method: 'delete'
  })
}
