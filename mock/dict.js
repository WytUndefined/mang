const DictData = [
  { id: 1, code: 'asset-status', name: '资产状态' },
  { id: 2, code: 'source-code', name: '资产来源' }
]

const DictItemData = [
  // 资产状态字典
  { id: 1, typeCode: 'asset-status', code: '1001', name: '在用' },
  { id: 2, typeCode: 'asset-status', code: '1002', name: '闲置' },
  { id: 3, typeCode: 'asset-status', code: '1003', name: '报废' },
  { id: 4, typeCode: 'asset-status', code: '1004', name: '维修' },
  { id: 5, typeCode: 'asset-status', code: '1005', name: '出借' },
  // 来源字典
  { id: 6, typeCode: 'asset-source-code', code: '1001', name: '自购' },
  { id: 7, typeCode: 'asset-source-code', code: '1002', name: '租赁' },
  { id: 8, typeCode: 'asset-source-code', code: '1003', name: '借用' },
  { id: 9, typeCode: 'asset-source-code', code: '1004', name: '自产' },
  { id: 10, typeCode: 'asset-source-code', code: '1005', name: '赠送' },
  { id: 11, typeCode: 'asset-source-code', code: '1006', name: '其他' },
  // 盘点
  { id: 12, typeCode: 'check-status', code: '0', name: '盘点中' },
  { id: 13, typeCode: 'check-status', code: '1', name: '盘点完成' }
]

export default [
  {
    name: '查询字典',
    url: '/sys/dicts',
    type: 'get',
    response: config => {
      const { code } = config.query
      const pageList = DictData.filter((item, index) => item.code === code)
      return {
        code: 20000,
        message: 'success',
        data: {
          total: pageList.length,
          rows: pageList
        }
      }
    }
  },
  {
    name: '查询字典详情',
    url: '/sys/dict$',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const dict of DictData) {
        if (dict.id === +id) {
          return {
            code: 20000,
            message: 'success',
            data: dict
          }
        }
      }
    }
  },
  {
    name: '添加字典',
    url: '/sys/dict',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        message: 'success',
        data: 'success'
      }
    }
  },
  {
    name: '修改字典',
    url: '/sys/dict/[A-Za-z0-9]',
    type: 'put',
    response: _ => {
      return {
        code: 20000,
        message: 'success',
        data: 'success'
      }
    }
  },
  {
    name: '删除字典',
    url: '/sys/dict/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      message: 'success',
      data: 'success'
    }
  },
  {
    name: '查询字典项',
    url: '/sys/dict/items',
    type: 'get',
    response: config => {
      const { code } = config.query
      const pageList = DictItemData.filter((item, index) => item.typeCode === code)
      return {
        code: 20000,
        message: 'success',
        data: {
          total: pageList.length,
          rows: pageList
        }
      }
    }
  },
  {
    name: '查询字典项详情',
    url: '/sys/dict/item\.*',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const item of DictItemData) {
        if (item.id === +id) {
          return {
            code: 20000,
            message: 'success',
            data: item
          }
        }
      }
    }
  },
  {
    name: '添加字典项',
    url: '/sys/dict/item',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        message: 'success',
        data: 'success'
      }
    }
  },
  {
    name: '修改字典项',
    url: '/sys/dict/item/[A-Za-z0-9]',
    type: 'put',
    response: _ => {
      return {
        code: 20000,
        message: 'success',
        data: 'success'
      }
    }
  },
  {
    name: '删除字典项',
    url: '/sys/dict/item/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      message: 'success',
      data: 'success'
    }
  }
]
