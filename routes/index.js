var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/article/detail', function (req, res, next) {
  res.json({
    data: {
      title: "wahtsdfasdf",
      id: req.body.id,
      content: `
        <h1>hellos</h1>
        <h2>nod</h2>
        <p>joinuse</p>
      `,
      time: new Date()
    },
    message: 'success',
    code: 1
  })
});

router.post('/logistics', function (req, res, next) {
  let list = [
    {
      id: "1",
      department: "IT维护/申请",
      phone: "0611-8888-1644",
      address: "服务大厦C座4层"
    },
    {
      id: "2",
      department: "工卡故障/换新",
      phone: 13288487600,
      address: "大厦C座2层"
    },
    {
      id: "3",
      department: "系统故障/异常",
      phone: "0611-8888-1644",
      address: "技术大厦A座4层"
    },
    {
      id: "4",
      department: "公共设施维护",
      phone: 13288487600,
      address: "大厦C座2层"
    },
    {
      id: "5",
      department: "安防故障",
      phone: 13288487600,
      address: "C座人力资源"
    },
    {
      id: "6",
      department: "IT维护/申请",
      phone: "0611-8888-1644",
      address: "服务大厦C座4层"
    },
    {
      id: "7",
      department: "工卡故障/换新",
      phone: 13288487600,
      address: "大厦C座2层"
    },
    {
      id: "8",
      department: "系统故障/异常",
      phone: "0611-8888-1644",
      address: "技术大厦A座4层"
    },
    {
      id: "9",
      department: "公共设施维护",
      phone: 13288487600,
      address: "大厦C座2层"
    },
    {
      id: "10",
      department: "安防故障",
      phone: 13288487600,
      address: "C座人力资源"
    },
  ]
  if (req.body.search) {
    list = [{
      id: "9",
      department: "公共设施维护",
      phone: 13288487600,
      address: "大厦C座2层"
    },
    {
      id: "10",
      department: "安防故障",
      phone: 13288487600,
      address: "C座人力资源"
    },]
  }
  res.json({
    data: list,
    message: 'success',
    code: 1
  })
});

router.post('/article/list', function (req, res, next) {
  res.json({
    data: [
      {
        id: 12345,
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title: "每日精选--前端技术选型",
        detail: "前端技术几乎每天都有新事物冒出来，技术也是由时尚来驱动了，我们常常臣服于时尚，面对快速的变化常常让我们感觉局促不安，开始焦虑，唯恐错过了些什么。如何打破这种焦虑呢？需要在快速变化的前端世界里保持清醒，保持独立的思考和认知。让我们回归到技术的本质，因为解决现实中存在的问题，技术才会有价值。真正厉害的技术都静悄悄的跑在线上。"
      },
      {
        id: 1278042,
        avatar: "http://59.110.163.1/houseworker/img/meghna.png",
        title: "每日精选--中年程序员如何脱困",
        detail: "第一，对于每一个人都要有深刻的理念，就是这个世界一定是由技术所驱动的；第二，遇到一个问题，要考虑下是不是有人已经解决了？我是不是可以把更好的时间去做更好的创新上？第三，做一件事情，就一定要做到最优，做到行业最好；"
      },
      {
        id: 1234,
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        title: "每日精选--如何成为leader",
        detail: "信息在传递过程中会失真，也会衰减。加上受到命令者表达的能力，接受者理解及还原能力等等方面因素的影响，作为中间段的传递者，中层主管一定首先要确保自己的理解没有误差，方能保障自己的传达不会出错，因此需要对接到的指令进行确认"
      },
      {
        id: 12342,
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title: "每日精选--前端技术选型",
        detail: "前端技术几乎每天都有新事物冒出来，技术也是由时尚来驱动了，我们常常臣服于时尚，面对快速的变化常常让我们感觉局促不安，开始焦虑，唯恐错过了些什么。如何打破这种焦虑呢？需要在快速变化的前端世界里保持清醒，保持独立的思考和认知。让我们回归到技术的本质，因为解决现实中存在的问题，技术才会有价值。真正厉害的技术都静悄悄的跑在线上。"
      },
      {
        id: 1242,
        avatar: "http://59.110.163.1/houseworker/img/meghna.png",
        title: "每日精选--中年程序员如何脱困",
        detail: "第一，对于每一个人都要有深刻的理念，就是这个世界一定是由技术所驱动的；第二，遇到一个问题，要考虑下是不是有人已经解决了？我是不是可以把更好的时间去做更好的创新上？第三，做一件事情，就一定要做到最优，做到行业最好；"
      },
      {
        id: 1278042,
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        title: "每日精选--如何成为leader",
        detail: "信息在传递过程中会失真，也会衰减。加上受到命令者表达的能力，接受者理解及还原能力等等方面因素的影响，作为中间段的传递者，中层主管一定首先要确保自己的理解没有误差，方能保障自己的传达不会出错，因此需要对接到的指令进行确认"
      }, {
        id: 12780942,
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title: "每日精选--前端技术选型",
        detail: "前端技术几乎每天都有新事物冒出来，技术也是由时尚来驱动了，我们常常臣服于时尚，面对快速的变化常常让我们感觉局促不安，开始焦虑，唯恐错过了些什么。如何打破这种焦虑呢？需要在快速变化的前端世界里保持清醒，保持独立的思考和认知。让我们回归到技术的本质，因为解决现实中存在的问题，技术才会有价值。真正厉害的技术都静悄悄的跑在线上。"
      },
      {
        id: 1278742,
        avatar: "http://59.110.163.1/houseworker/img/meghna.png",
        title: "每日精选--中年程序员如何脱困",
        detail: "第一，对于每一个人都要有深刻的理念，就是这个世界一定是由技术所驱动的；第二，遇到一个问题，要考虑下是不是有人已经解决了？我是不是可以把更好的时间去做更好的创新上？第三，做一件事情，就一定要做到最优，做到行业最好；"
      },
      {
        id: 1278142,
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        title: "每日精选--如何成为leader",
        detail: "信息在传递过程中会失真，也会衰减。加上受到命令者表达的能力，接受者理解及还原能力等等方面因素的影响，作为中间段的传递者，中层主管一定首先要确保自己的理解没有误差，方能保障自己的传达不会出错，因此需要对接到的指令进行确认"
      }, {
        id: 1278042,
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title: "每日精选--前端技术选型",
        detail: "前端技术几乎每天都有新事物冒出来，技术也是由时尚来驱动了，我们常常臣服于时尚，面对快速的变化常常让我们感觉局促不安，开始焦虑，唯恐错过了些什么。如何打破这种焦虑呢？需要在快速变化的前端世界里保持清醒，保持独立的思考和认知。让我们回归到技术的本质，因为解决现实中存在的问题，技术才会有价值。真正厉害的技术都静悄悄的跑在线上。"
      },
      {
        id: 127242,
        avatar: "http://59.110.163.1/houseworker/img/meghna.png",
        title: "每日精选--中年程序员如何脱困",
        detail: "第一，对于每一个人都要有深刻的理念，就是这个世界一定是由技术所驱动的；第二，遇到一个问题，要考虑下是不是有人已经解决了？我是不是可以把更好的时间去做更好的创新上？第三，做一件事情，就一定要做到最优，做到行业最好；"
      },
      {
        id: 1278442,
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        title: "每日精选--如何成为leader",
        detail: "信息在传递过程中会失真，也会衰减。加上受到命令者表达的能力，接受者理解及还原能力等等方面因素的影响，作为中间段的传递者，中层主管一定首先要确保自己的理解没有误差，方能保障自己的传达不会出错，因此需要对接到的指令进行确认"
      },
      {
        id: 127942,
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title: "每日精选--前端技术选型",
        detail: "前端技术几乎每天都有新事物冒出来，技术也是由时尚来驱动了，我们常常臣服于时尚，面对快速的变化常常让我们感觉局促不安，开始焦虑，唯恐错过了些什么。如何打破这种焦虑呢？需要在快速变化的前端世界里保持清醒，保持独立的思考和认知。让我们回归到技术的本质，因为解决现实中存在的问题，技术才会有价值。真正厉害的技术都静悄悄的跑在线上。"
      },
      {
        id: 127842,
        avatar: "http://59.110.163.1/houseworker/img/meghna.png",
        title: "每日精选--中年程序员如何脱困",
        detail: "第一，对于每一个人都要有深刻的理念，就是这个世界一定是由技术所驱动的；第二，遇到一个问题，要考虑下是不是有人已经解决了？我是不是可以把更好的时间去做更好的创新上？第三，做一件事情，就一定要做到最优，做到行业最好；"
      },
      {
        id: 12742,
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        title: "每日精选--如何成为leader",
        detail: "信息在传递过程中会失真，也会衰减。加上受到命令者表达的能力，接受者理解及还原能力等等方面因素的影响，作为中间段的传递者，中层主管一定首先要确保自己的理解没有误差，方能保障自己的传达不会出错，因此需要对接到的指令进行确认"
      },
    ],
    message: 'success',
    code: 1
  }
  )
});

router.post('/wage/info', function (req, res, next) {
  let current = [
    {
      type: "基本工资",
      value: 3700,
    },
    {
      type: "房补",
      value: 2300,
    },
    {
      type: "饭补",
      value: 1000,
    },
    {
      type: "提成",
      value: 1500,
    },
    {
      type: "奖金",
      value: 1500,
    },
    {
      type: "社保",
      value: 1000
    }
  ];
  let history = [
    {
      month: "1",
      value: 2083,
    },
    {
      month: "2",
      value: 3084,
    },
    {
      month: "3",
      value: 2083.5,
    },
    {
      month: "4",
      value: 8085,
    },
    {
      month: "5",
      value: 6084.9,
    },
    {
      month: "6",
      value: 4086,
    },
    {
      month: "7",
      value: 2087,
    },
    {
      month: "8",
      value: 2089,
    },
    {
      month: "9",
      value: 2013,
    },
    {
      month: "10",
      value: 2087,
    },
    {
      month: "11",
      value: 2089,
    },
    {
      month: "12",
      value: 2013,
    },
  ];
  res.json({
    data: {
      current: current,
      history: history
    },
    message: 'success',
    code: 1
  })
})

router.post('/askleave', function (req, res, next) {
  res.json({
    data: [
      { item: "剩余年假", count: 40, percent: 0.4 },
      { item: "病假", count: 2, percent: 0.21 },
      { item: "事假", count: 17, percent: 0.17 },
      { item: "产假", count: 0, percent: 0.13 },
      { item: "外派假期", count: 9, percent: 0.09 },
    ],
    message: 'success',
    code: 1
  })
});
router.post('/askleave/form', function (req, res, next) {
  res.json({
    message: 'success',
    code: 1
  })
})

router.post('/resign/form', function (req, res, next) {
  res.json({
    message: 'success',
    code: 1
  })
})
router.post('/entry/offer', function (req, res, next) {
  res.json({
    data: {
      name: "杨航",
      company: "管家婆",
      department: "技术部",
      position: "后台开发实习生",
      time: 6,
      start: {
        year: 2020,
        month: 12,
        day: 10,
        hour: 14
      },
      end: {
        year: 2020,
        month: 12,
        day: 10,
        hour: 14
      },
      hr: "白子煜",
      address: "陕西省西安市长安区西安邮电大学东区安悦北2531管家婆",
      tel: "1575454517"
    },
    message: 'success',
    code: 1
  })
})
router.post('/attendance', function (req, res, next) {
  res.json({
    data: [
      {
        week: "12.1",
        type: "start",
        time: 7
      },
      {
        week: "12.1",
        type: "end",
        time: 18
      },
      {
        week: "12.2",
        type: "start",
        time: 6.30
      },
      {
        week: "12.2",
        type: "end",
        time: 16.30
      },
      {
        week: "12.3",
        type: "start",
        time: 9.5
      },
      {
        week: "12.3",
        type: "end",
        time: 19.5
      },
      {
        week: "12.4",
        type: "start",
        time: 14
      },
      {
        week: "12.4",
        type: "end",
        time: 20
      },
      {
        week: "12.5",
        type: "start",
        time: 18
      },
      {
        week: "12.5",
        type: "end",
        time: 8
      },
      {
        week: "12.6",
        type: "start",
        time: 10
      },
      {
        week: "12.6",
        type: "end",
        time: 18.2
      },
      {
        week: "12.7",
        type: "start",
        time: 8.2
      },
      {
        week: "12.7",
        type: "end",
        time: 17.4
      }
    ],
    message: 'success',
    code: 1
  })
})
router.post('/attendance/form', function (req, res, next) {
  res.json({
    message: 'success',
    code: 1
  })
})

router.post('/attendance/step', function (req, res, next) {
  res.json({
    data:[
      {
        status: "error",
        current: 1,
        steps: [
          {
            title: "提交",
            desc: "通过"
          },{
            title: "王洋",
            desc: "拒绝，操作太频繁"
          },
          {
            title: "提交",
            desc: "等待"
          }
        ]
      },
      {
        status: "process",
        current: 1,
        steps: [
          {
            title: "提交",
            desc: "通过"
          },{
            title: "王洋",
            desc: "拒绝，操作太频繁"
          },
          {
            title: "提交",
            desc: "等待"
          }
        ]
      },
      {
        status: "wait",
        current: 2,
        steps: [
          {
            title: "提交",
            desc: "通过"
          },{
            title: "王洋",
            desc: "通过"
          },
          {
            title: "提交",
            desc: "等待"
          }
        ]
      },
      {
        status: "error",
        current: 0,
        steps: [
          {
            title: "提交",
            desc: "拒绝，操作太频繁"
          },{
            title: "王洋",
            desc: "等待"
          },
          {
            title: "提交",
            desc: "等待"
          }
        ]
      },
    ],
    message: 'success',
    code: 1
  })
})

router.post("/manage/askleave/list",function (req, res, next) {
  res.json({
    data:[
      {
        id: "11111", name: "鲍涵妤",
        department: "技术部前端",
        type: "事假",
        start: "2020-11-20 14:00",
        end: "2020-12-1 9:00",
        JobId: "ng12145",
        reason_simple: "家里楼房拆迁",
        reason_detail: "家里楼房拆迁获得赔偿款两千万回家包地",
        reimbursement: "false"
      },
      {
        id: "1asdf11", name: "鲍涵妤",
        department: "技术部前端",
        type: "事假",
        start: "2020-11-20 14:00",
        end: "2020-12-1 9:00",
        JobId: "ng12145",
        reason_simple: "家里楼房拆迁",
        reason_detail: "家里楼房拆迁获得赔偿款两千万回家包地",
        reimbursement: "false"
      },
      {
        id: "11sdfasf111", name: "白子煜",
        department: "技术部前端",
        type: "事假",
        start: "2020-11-20 14:00",
        end: "2020-12-1 9:00",
        JobId: "ng12145",
        reason_simple: "家里楼房拆迁",
        reason_detail: "家里楼房拆迁获得赔偿款两千万回家包地",
        reimbursement: "false"
      },
      {
        id: "111a2323211", name: "王勇",
        department: "技术部前端",
        type: "事假",
        start: "2020-11-20 14:00",
        end: "2020-12-1 9:00",
        JobId: "ng12145",
        reason_simple: "家里楼房拆迁",
        reason_detail: "家里楼房拆迁获得赔偿款两千万回家包地",
        reimbursement: "false"
      },
      {
        id: "11123232311", name: "杨航",
        department: "技术部前端",
        type: "事假",
        start: "2020-11-20 14:00",
        end: "2020-12-1 9:00",
        JobId: "ng12145",
        reason_simple: "家里楼房拆迁",
        reason_detail: "家里楼房拆迁获得赔偿款两千万回家包地",
        reimbursement: "false"
      },
      {
        id: "11123232311", name: "鲍涵妤",
        department: "技术部前端",
        type: "事假",
        start: "2020-11-20 14:00",
        end: "2020-12-1 9:00",
        JobId: "ng12145",
        reason_simple: "家里楼房拆迁",
        reason_detail: "家里楼房拆迁获得赔偿款两千万回家包地",
        reimbursement: "false"
      },
      {
        id: "12323231111", name: "王洋",
        department: "技术部前端",
        type: "事假",
        start: "2020-11-20 14:00",
        end: "2020-12-1 9:00",
        JobId: "ng12145",
        reason_simple: "家里楼房拆迁",
        reason_detail: "家里楼房拆迁获得赔偿款两千万回家包地",
        reimbursement: "false"
      }
    ],
    message: 'success',
    code: 1
  })
})

router.post("/manage/askleave/handle", function (req, res, next) {
  res.json({
    message: 'success',
    code: 1
  })
})
router.post("/manage/resign/list", function (req, res, next) {
  res.json({
    data: [
      {
        id: "11111",position:"技术研发", 
        name: "鲍涵妤",
        department: "技术部前端",
        type: "个人原因",
        future:"回家种地",next: true,
        JobId: "ng12145",
        reason: "家里楼房拆迁获得赔偿款两千万回家包地"
      },
      {
        id: "11111",position:"技术研发", 
        name: "鲍涵妤",
        department: "技术部前端",
        type: "其他原因",
        future:"回家种地",next: true,
        JobId: "ng12145",
        reason: "家里楼房拆迁获得赔偿款两千万回家包地"
      },
      {
        id: "11111",position:"技术研发", name: "白子煜",
        department: "技术部前端",
        type: "个人原因",
        future:"回家种地",next: true,
        JobId: "ng12145",
        reason: "家里楼房拆迁获得赔偿款两千万回家包地"
      },
      {
        id: "11111",position:"技术研发", name: "王勇",
        department: "技术部前端",
        type: "公司原因",
        future:"回家种地",next: true,
        JobId: "ng12145",
        reason: "家里楼房拆迁获得赔偿款两千万回家包地"
      },
      {
        id: "11111",position:"技术研发", name: "杨航",
        department: "技术部前端",
        type: "个人原因",
        future:"回家种地",next: true,
        JobId: "ng12145",
        reason: "家里楼房拆迁获得赔偿款两千万回家包地"
      },
      {
        id: "11111",position:"技术研发", name: "鲍涵妤",
        department: "技术部前端",
        type: "个人原因",
        future:"回家种地",next: true,
        JobId: "ng12145",
        reason: "家里楼房拆迁获得赔偿款两千万回家包地"
      },
      {
        id: "11111",position:"技术研发", name: "王洋",
        department: "技术部前端",
        type: "个人原因",
        future:"回家种地",next: true,
        JobId: "ng12145",
        reason: "家里楼房拆迁获得赔偿款两千万回家包地"
      }
    ],
    message: 'success',
    code: 1
  })
})
router.post("/manage/resign/handle", function (req, res, next) {
  res.json({
    message: 'success',
    code: 1
  })
})
router.post("/manage/attendance/handle", function (req, res, next) {
  res.json({
    message: 'success',
    code: 1
  })
})
router.post("/manage/attendance/list", function (req, res, next) {
  let data = [
    {
      id: "1a323",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "1233",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "122233",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "1243233",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "12sd5463",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "1a546s23",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "12sd5sd3",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "2"
    },
    {
      id: "125673",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "12sd343",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "1256sdf3",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
    {
      id: "1ss897df23",
      name: "王勇",
      jobId: "nj12346",
      department: "技术部",
      reson: "工卡丢失",
      time: "2020-12-6 19:00",
      current: "1"
    },
  ]
  if(req.body.search) {
    data = data.slice(2,4)
  }
  res.json({
    data: data,
    message: 'success',
    code: 1
  })
})
module.exports = router;
