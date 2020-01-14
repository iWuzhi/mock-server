
const Mock = require('mockjs');

module.exports = {
  'GET /api/user/list': {
    resultCode: 0,
    data: Mock.mock({
      'list|0-19': [
        {
          id: '@id',
          name: '@cname'
        }
      ]
    })
  },
  'GET /api/user/detail': {
    resultCode: 0,
    data: Mock.mock({
          id: '@id',
          name: '@cname'
        })
  },
}