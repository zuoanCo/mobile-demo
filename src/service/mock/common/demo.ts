import Mock from "mockjs";

const demo = [
  {
    api: '/demo',
    name: 'demo示例',
    data: {
        'list|1-10': [{
            'id|+1': 1,
            'name': '@cname',
            'age|1-100': 100,
            'address': '@city(true)',
            'birthday': '@date',
            'desc': '@cparagraph',
            'avatar': '@image',
            'gender|1': ['男', '女'],
            'status|1': ['启用', '禁用'],
            'createTime': '@datetime',
            'updateTime': '@datetime',
            'remark': '@cparagraph',
            'deleted|1': [0, 1],
            'version|1-100': 100,
        }],
    }
  }

]

export default demo.map(item => Mock.mock(item.api, item.data))     