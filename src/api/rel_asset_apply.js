import request from '@/utils/request'

export function fetchRelAssetApply(params) {
  return request({
    url: '/api/rel/asset/applys',
    method: 'get',
    params
  })
}
