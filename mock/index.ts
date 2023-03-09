export default [
  //模拟返回10条用户信息
  {
    url: '/mock/test', //匹配到指定url
    method: 'get', //请求类型
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          //需要返回的参数
          'list|10': [
            {
              id: '@natural(100,200)', //100-200之间的随机整数
              city: '@county(true)', //随机省市区
              'moblie|1': [
                //数组中的号码随机返回一个
                '13531544954',
                '13632250649',
                '15820292420',
                '15999905612'
              ],
              name: '@cname', //随机返回名字
              state: '@integer(0,1)', //随机返回0/1(用户性别)
              'company|1': [
                //与手机号码同理
                '广州某有限公司',
                '深圳某有限公司',
                '佛山某有限公司',
                '惠州某有限公司'
              ],
              'address|1': ['中山路3号', '教育路10号', '民兴路9号', '北京路23号']
            }
          ]
        }
      }
    }
  },
  // 返回测试菜单
  {
    url: '/test/menu', //匹配到指定url
    method: 'get', //请求类型
    response: () => {
      return {
        code: 200,
        msg: '请求成功！',
        data: [
          {
            icon: 'UserOutlined',
            path: '/main/tubiao',
            auth: 'false',
            label: '用户展示',
            children: [
              {
                // icon: 'icon-tianjia iconfont',
                path: '/main/tubiao/zhuxingtu',
                auth: 'false',
                label: '普通会员列表'
              },
              {
                // icon: 'icon-tianjia iconfont',
                path: '/main/tubiao/zhexiantu',
                auth: 'false',
                label: '高阶会员列表'
              }
            ]
          },
          {
            icon: 'NotificationOutlined',
            path: '/main/config',
            auth: 'false',
            label: '消息通知'
          },
          {
            icon: 'PieChartOutlined',
            path: '/main/big',
            auth: 'false',
            label: '数据分析'
          },
          {
            icon: 'AccountBookOutlined',
            path: '/main/peo',
            auth: 'false',
            label: '收支情况'
          }
        ]
      }
    }
  },
  //用户登录
  {
    url: '/user/login', //匹配到指定url
    method: 'post', //请求类型
    response: () => {
      return {
        code: 200,
        token: 'basjhbdashdkajshdjkashkjdhj',
        data: {
          list: [
            {
              username: '熊旋风',
              age: 18
            }
          ]
        }
      }
    }
  }
]
