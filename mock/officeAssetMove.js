import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    type: 0,
    id: 'PD@date("yyMMdd")@integer(100000000,999999999)',
    createTime: '@date("yyyy-MM-dd")',
    receiverName: '@cname()',
    receiveGroupName: '@ctitle(3, 8)',
    usageLocationName: '@ctitle(3, 8)',
    remark: '@ctitle(3, 8)',
    receiveGroupId: '@increment',
    moveTime: '@date("yyyy-MM-dd")',
    usageLocationCode: '@ctitle(3, 8)'
  }))
}

export default [
  {
    url: '/asset/office/move/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20 } = config.query
      const pageList = List.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 20000,
        data: {
          total: List.length,
          items: pageList
        }
      }
    }
  }
]
