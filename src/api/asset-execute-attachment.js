import request from '@/utils/request'

export function fetchAssetExecuteAttachment(params) {
  return request({
    url: '/api/asset/execute/attachments',
    method: 'get',
    params
  })
}

