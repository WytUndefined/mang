import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    orderNo: 'PD@date("yyMMdd")@integer(100000000,999999999)',
    name: '@ctitle()',
    startTime: '@date("yyyy-MM-dd")',
    endTime: '@date("yyyy-MM-dd")',
    finishTime: '@date("yyyy-MM-dd")',
    people: '@cname()',
    'status|1': ['0', '1'],
    remark: '@ctitle(3, 8)'
  }))
}

export default [
  {
    url: '/asset/office/check/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, status } = config.query
      const statusList = List.filter(item => item.status === status)
      const pageList = statusList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 20000,
        data: {
          total: statusList.length,
          items: pageList
        }
      }
    }
  }
]
