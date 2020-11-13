//app.js
var app = getApp()
App({ 
  onLaunch: function () {
     // 展示本地存储能力
     var logs = wx.getStorageSync('logs') || []
     logs.unshift(Date.now())
     wx.setStorageSync('logs', logs)
 
     // 登录
     wx.login({
       success: res => {
         // 发送 res.code 到后台换取 openId, sessionKey, unionId
       }
     })
     // 获取用户信息
     wx.getSetting({
       success: res => {
         if (res.authSetting['scope.userInfo']) {
           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
           wx.getUserInfo({
             success: res => {
               // 可以将 res 发送给后台解码出 unionId
               this.globalData.userInfo = res.userInfo
 
               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
               // 所以此处加入 callback 以防止这种情况
               if (this.userInfoReadyCallback) {
                 this.userInfoReadyCallback(res)
               }
             }
           })
         }
       }
     })
     // 获取系统状态栏信息
     wx.getSystemInfo({
       success: e => {
         this.globalData.StatusBar = e.statusBarHeight;
         let capsule = wx.getMenuButtonBoundingClientRect();
         if (capsule) {
            this.globalData.Custom = capsule;
           this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
         } else {
           this.globalData.CustomBar = e.statusBarHeight + 50;
         }
       }
     })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      username:'',
      inforschool:"0",
      infor_gate2:"0",
      infor_gate2_photo:[],
      infor_gate2_photo1:[],
      infor_gate2_photo2:[],
      infor_gate2_photo3:[],
      infor_gate2_photo4:[],
      infor_gate2_photo5:[],
      infor_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      infor_place:"0",
      infor_place_photo:[],
      infor_place_photo1:[],
      infor_place_photo2:[],
      infor_place_photo3:[],
      infor_place_photo4:[],
      infor_place_photo5:[],
      infor_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      infor_lab1:"0",
      infor_lab1_photo:[],
      infor_lab1_photo1:[],
      infor_lab1_photo2:[],
      infor_lab1_photo3:[],
      infor_lab1_photo4:[],
      infor_lab1_photo5:[],
      infor_lab1_detail:[
          {value: '-1', name: '没有实验室准入许可'},
          {value: '-1', name: '没有安全负责人信息'},
          {value: '-1', name: '没有实验室规章管理制度'},
          {value: '-1', name: '实验物品乱堆放'},
          {value: '-1', name: '实验室存在其他隐患'}
      ],
      huagongschool:"0",
      huagong_gate2:"0",
      huagong_gate2_photo:[],
      huagong_gate2_photo1:[],
      huagong_gate2_photo2:[],
      huagong_gate2_photo3:[],
      huagong_gate2_photo4:[],
      huagong_gate2_photo5:[],
      huagong_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      huagong_place:"0",
      huagong_place_photo:[],
      huagong_place_photo1:[],
      huagong_place_photo2:[],
      huagong_place_photo3:[],
      huagong_place_photo4:[],
      huagong_place_photo5:[],
      huagong_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      huagong_lab1:"0",
      huagong_lab1_photo:[],
      huagong_lab1_photo1:[],
      huagong_lab1_photo2:[],
      huagong_lab1_photo3:[],
      huagong_lab1_photo4:[],
      huagong_lab1_photo5:[],
      huagong_lab1_detail:[
          {value: '-1', name: '没有实验室准入许可'},
          {value: '-1', name: '没有安全负责人信息'},
          {value: '-1', name: '没有实验室规章管理制度'},
          {value: '-1', name: '实验物品乱堆放'},
          {value: '-1', name: '实验室存在其他隐患'}
      ],
      shenghuanschool:"0",
      shenghuan_gate2:"0",
      shenghuan_gate2_photo:[],
      shenghuan_gate2_photo1:[],
      shenghuan_gate2_photo2:[],
      shenghuan_gate2_photo3:[],
      shenghuan_gate2_photo4:[],
      shenghuan_gate2_photo5:[],
      shenghuan_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      shenghuan_place:"0",
      shenghuan_place_photo:[],
      shenghuan_place_photo1:[],
      shenghuan_place_photo2:[],
      shenghuan_place_photo3:[],
      shenghuan_place_photo4:[],
      shenghuan_place_photo5:[],
      shenghuan_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      shenghuan_lab1:"0",
      shenghuan_lab1_photo:[],
      shenghuan_lab1_photo1:[],
      shenghuan_lab1_photo2:[],
      shenghuan_lab1_photo3:[],
      shenghuan_lab1_photo4:[],
      shenghuan_lab1_photo5:[],
      shenghuan_lab1_detail:[
          {value: '-1', name: '没有实验室准入许可'},
          {value: '-1', name: '没有安全负责人信息'},
          {value: '-1', name: '没有实验室规章管理制度'},
          {value: '-1', name: '实验物品乱堆放'},
          {value: '-1', name: '实验室存在其他隐患'}
      ],
      ruanjianschool:"0",
      ruanjian_gate2:"0",
      ruanjian_gate2_photo:[],
      ruanjian_gate2_photo1:[],
      ruanjian_gate2_photo2:[],
      ruanjian_gate2_photo3:[],
      ruanjian_gate2_photo4:[],
      ruanjian_gate2_photo5:[],
      ruanjian_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      ruanjian_place:"0",
      ruanjian_place_photo:[],
      ruanjian_place_photo1:[],
      ruanjian_place_photo2:[],
      ruanjian_place_photo3:[],
      ruanjian_place_photo4:[],
      ruanjian_place_photo5:[],
      ruanjian_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      ruanjian_lab1:"0",
      ruanjian_lab1_photo:[],
      ruanjian_lab1_photo1:[],
      ruanjian_lab1_photo2:[],
      ruanjian_lab1_photo3:[],
      ruanjian_lab1_photo4:[],
      ruanjian_lab1_photo5:[],
      ruanjian_lab1_detail:[
          {value: '-1', name: '没有实验室准入许可'},
          {value: '-1', name: '没有安全负责人信息'},
          {value: '-1', name: '没有实验室规章管理制度'},
          {value: '-1', name: '实验物品乱堆放'},
          {value: '-1', name: '实验室存在其他隐患'}
      ],
      wutianschool:"0",
      wutian_gate2:"0",
      wutian_gate2_photo:[],
      wutian_gate2_photo1:[],
      wutian_gate2_photo2:[],
      wutian_gate2_photo3:[],
      wutian_gate2_photo4:[],
      wutian_gate2_photo5:[],
      wutian_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      wutian_place:"0",
      wutian_place_photo:[],
      wutian_place_photo1:[],
      wutian_place_photo2:[],
      wutian_place_photo3:[],
      wutian_place_photo4:[],
      wutian_place_photo5:[],
      wutian_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      wutian_lab1:"0",
      wutian_lab1_photo:[],
      wutian_lab1_photo1:[],
      wutian_lab1_photo2:[],
      wutian_lab1_photo3:[],
      wutian_lab1_photo4:[],
      wutian_lab1_photo5:[],
      wutian_lab1_detail:[
          {value: '-1', name: '没有实验室准入许可'},
          {value: '-1', name: '没有安全负责人信息'},
          {value: '-1', name: '没有实验室规章管理制度'},
          {value: '-1', name: '实验物品乱堆放'},
          {value: '-1', name: '实验室存在其他隐患'}
      ],
      shengkeschool:"0",
      shengke_gate2:"0",
      shengke_gate2_photo:[],
      shengke_gate2_photo1:[],
      shengke_gate2_photo2:[],
      shengke_gate2_photo3:[],
      shengke_gate2_photo4:[],
      shengke_gate2_photo5:[],
      shengke_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      shengke_place:"0",
      shengke_place_photo:[],
      shengke_place_photo1:[],
      shengke_place_photo2:[],
      shengke_place_photo3:[],
      shengke_place_photo4:[],
      shengke_place_photo5:[],
      shengke_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      shengke_lab1:"0",
      shengke_lab1_photo:[],
      shengke_lab1_photo1:[],
      shengke_lab1_photo2:[],
      shengke_lab1_photo3:[],
      shengke_lab1_photo4:[],
      shengke_lab1_photo5:[],
      shengke_lab1_detail:[
          {value: '-1', name: '没有实验室准入许可'},
          {value: '-1', name: '没有安全负责人信息'},
          {value: '-1', name: '没有实验室规章管理制度'},
          {value: '-1', name: '实验物品乱堆放'},
          {value: '-1', name: '实验室存在其他隐患'}
      ],
      shutongschool:"0",
      shutong_gate2:"0",
      shutong_gate2_photo:[],
      shutong_gate2_photo1:[],
      shutong_gate2_photo2:[],
      shutong_gate2_photo3:[],
      shutong_gate2_photo4:[],
      shutong_gate2_photo5:[],
      shutong_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      shutong_place:"0",
      shutong_place_photo:[],
      shutong_place_photo1:[],
      shutong_place_photo2:[],
      shutong_place_photo3:[],
      shutong_place_photo4:[],
      shutong_place_photo5:[],
      shutong_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      shutong_lab1:"0",
      shutong_lab1_photo:[],
      shutong_lab1_photo1:[],
      shutong_lab1_photo2:[],
      shutong_lab1_photo3:[],
      shutong_lab1_photo4:[],
      shutong_lab1_photo5:[],
      shutong_lab1_detail:[
          {value: '-1', name: '没有实验室准入许可'},
          {value: '-1', name: '没有安全负责人信息'},
          {value: '-1', name: '没有实验室规章管理制度'},
          {value: '-1', name: '实验物品乱堆放'},
          {value: '-1', name: '实验室存在其他隐患'}
      ],
      gongguanschool:"0",
      gongguan_gate2:"0",
      gongguan_gate2_photo:[],
      gongguan_gate2_photo1:[],
      gongguan_gate2_photo2:[],
      gongguan_gate2_photo3:[],
      gongguan_gate2_photo4:[],
      gongguan_gate2_photo5:[],
      gongguan_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      gongguan_place:"0",
      gongguan_place_photo:[],
      gongguan_place_photo1:[],
      gongguan_place_photo2:[],
      gongguan_place_photo3:[],
      gongguan_place_photo4:[],
      gongguan_place_photo5:[],
      gongguan_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      jingjischool:"0",
      jingji_gate2:"0",
      jingji_gate2_photo:[],
      jingji_gate2_photo1:[],
      jingji_gate2_photo2:[],
      jingji_gate2_photo3:[],
      jingji_gate2_photo4:[],
      jingji_gate2_photo5:[],
      jingji_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      jingji_place:"0",
      jingji_place_photo:[],
      jingji_place_photo1:[],
      jingji_place_photo2:[],
      jingji_place_photo3:[],
      jingji_place_photo4:[],
      jingji_place_photo5:[],
      jingji_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      wenxueschool:"0",
      wenxue_gate2:"0",
      wenxue_gate2_photo:[],
      wenxue_gate2_photo1:[],
      wenxue_gate2_photo2:[],
      wenxue_gate2_photo3:[],
      wenxue_gate2_photo4:[],
      wenxue_gate2_photo5:[],
      wenxue_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      wenxue_place:"0",
      wenxue_place_photo:[],
      wenxue_place_photo1:[],
      wenxue_place_photo2:[],
      wenxue_place_photo3:[],
      wenxue_place_photo4:[],
      wenxue_place_photo5:[],
      wenxue_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      minzuschool:"0",
      minzu_gate2:"0",
      minzu_gate2_photo:[],
      minzu_gate2_photo1:[],
      minzu_gate2_photo2:[],
      minzu_gate2_photo3:[],
      minzu_gate2_photo4:[],
      minzu_gate2_photo5:[],
      minzu_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      minzu_place:"0",
      minzu_place_photo:[],
      minzu_place_photo1:[],
      minzu_place_photo2:[],
      minzu_place_photo3:[],
      minzu_place_photo4:[],
      minzu_place_photo5:[],
      minzu_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      gewuschool:"0",
      gewu_gate2:"0",
      gewu_gate2_photo:[],
      gewu_gate2_photo1:[],
      gewu_gate2_photo2:[],
      gewu_gate2_photo3:[],
      gewu_gate2_photo4:[],
      gewu_gate2_photo5:[],
      gewu_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      gewu_place:"0",
      gewu_place_photo:[],
      gewu_place_photo1:[],
      gewu_place_photo2:[],
      gewu_place_photo3:[],
      gewu_place_photo4:[],
      gewu_place_photo5:[],
      gewu_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      mingyuanschool:"0",
      mingyuan_gate2:"0",
      mingyuan_gate2_photo:[],
      mingyuan_gate2_photo1:[],
      mingyuan_gate2_photo2:[],
      mingyuan_gate2_photo3:[],
      mingyuan_gate2_photo4:[],
      mingyuan_gate2_photo5:[],
      mingyuan_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      mingyuan_place:"0",
      mingyuan_place_photo:[],
      mingyuan_place_photo1:[],
      mingyuan_place_photo2:[],
      mingyuan_place_photo3:[],
      mingyuan_place_photo4:[],
      mingyuan_place_photo5:[],
      mingyuan_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
      tiyuschool:"0",
      tiyu_gate2:"0",
      tiyu_gate2_photo:[],
      tiyu_gate2_photo1:[],
      tiyu_gate2_photo2:[],
      tiyu_gate2_photo3:[],
      tiyu_gate2_photo4:[],
      tiyu_gate2_photo5:[],
      tiyu_gate2_detail:[
          {value: '-1', name: '大门消防通道被堵'},
          {value: '-1', name: '大门无消防设施'},
          {value: '-1', name: '大门地面湿滑'},
          {value: '-1', name: '大门有杂货摆放'},
          {value: '-1', name: '大门有其他问题'}
      ],
      tiyu_place:"0",
      tiyu_place_photo:[],
      tiyu_place_photo1:[],
      tiyu_place_photo2:[],
      tiyu_place_photo3:[],
      tiyu_place_photo4:[],
      tiyu_place_photo5:[],
      tiyu_place_detail:[
          {value: '-1', name: '公共区域消防通道被堵'},
          {value: '-1', name: '公共区域消防设施没有定期检查'},
          {value: '-1', name: '公共区域电闸未断开'},
          {value: '-1', name: '公共区域信号灯不可使用'},
          {value: '-1', name: '公共区域有其他问题'}
      ],
    }
  },
  
  globalData: {
    userInfo: null
  }
})
