import request from '@/utils/request'

// 字典相关接口
export function getDicts(query) {
  return request({
    url: '/api/sys/dicts',
    method: 'get',
    params: query
  })
}

/**
 * 查询详情
 * @param id
 */
export function getDict(id) {
  return request({
    url: `/api/sys/dicts/${id}`,
    method: 'get'
  })
}

export function addDict(data) {
  return request({
    url: '/api/sys/dicts',
    method: 'post',
    data
  })
}

export function updateDict(data) {
  return request({
    url: '/api/sys/dicts',
    method: 'put',
    data
  })
}

export function deleteDict(id) {
  return request({
    url: `/api/sys/dicts/${id}`,
    method: 'delete'
  })
}

// 字典项相关接口
export function getDictItems(query) {
  return request({
    url: '/api/sys/dict/items',
    method: 'get',
    params: query
  })
}

// 字典项详情
export function getDictItem(id) {
  return request({
    url: `/api/sys/dict/items/${id}`,
    method: 'get'
  })
}

// 字典项相关接口
export function getDictItemsList(query) {
  return request({
    url: '/api/sys/dict/items/list',
    method: 'get',
    params: query
  })
}

export function addDictItem(data) {
  return request({
    url: '/api/sys/dict/items',
    method: 'post',
    data
  })
}

export function updateDictItem(data) {
  return request({
    url: '/api/sys/dict/items',
    method: 'put',
    data
  })
}

export function deleteDictItem(id) {
  return request({
    url: `/api/sys/dict/items/${id}`,
    method: 'delete'
  })
}
