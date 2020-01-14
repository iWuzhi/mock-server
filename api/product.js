
const Mock = require('mockjs');

module.exports = {
  'GET /api/product/list': {
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
}