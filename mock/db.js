// 用mockjs模拟生成数据
var Mock = require('mockjs');


module.exports = () => {
  
  // 使用 Mock
    var data = Mock.mock({
      'course|30': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          course_name: '@ctitle(5,10)',
          // autor: '@cname',
          content: '@ctitle(100)',
          // 'category_Id|1-6': 1
        }
      ]
      // 'course_category|6': [
      //   {
      //     "id|+1": 1,
      //     "pid": -1,
      //     cName: '@ctitle(4)'
      //   }
      // ]
    });
  
  // 返回的data会作为json-server的数据
  return data;
    
};