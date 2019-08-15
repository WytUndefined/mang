import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    code: '2019@integer(10000, 99999)',
    'name|1': ['DELL服务器', '联想显示器', 'HP笔记本', '苹果平板电脑'],
    'type|1': ['服务器', '显示器', '笔记本', '平板电脑'],
    stockInTime: +Mock.Random.date('T'),
    createTime: +Mock.Random.date('T'),
    model: '',
    'unit|1': ['个', '台', '枚', '只'],
    'sourceName|1': ['自购', '借用', '租赁', '其他'],
    price: '@integer(1, 200)',
    'brand|1': ['联想', '惠普', '戴尔', '苹果'],
    buyTime: +Mock.Random.date('T'),
    usageLimit: '@title(1, 48)',
    sn: '@guid()',
    specifiation: '{}',
    depreciation: '@integer(1, 3)',
    'status|1': ['1001', '1002', '1003', '1004'],
    remark: '@title(3, 8)'
  }))
}

export default [
  {
    url: '/asset/office/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20 } = config.query
      const pageList = List.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 200,
        data: {
          total: List.length,
          items: pageList
        }
      }
    }
  },
  {
    url: '/asset/office/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const asset of List) {
        if (asset.id === +id) {
          return {
            code: 200,
            data: asset
          }
        }
      }
    }
  },
  {
    url: '/asset/office/pv',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },
  {
    url: '/asset/office/create',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  },
  {
    url: '/asset/office/update',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
