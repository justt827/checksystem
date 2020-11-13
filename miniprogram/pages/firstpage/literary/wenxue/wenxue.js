const db = wx.cloud.database()
const app = getApp()
Page({    tofirstpage:function(){
  wx.reLaunch({
    url: '/pages/firstpage/firstpage',
  })
},
toshowdata:function(){
wx.reLaunch({
  url: '/pages/showdata/showdata',
})
},
tocheckline:function(){
wx.reLaunch({
  url: '/pages/checkline/checkline',
})
},
toindex:function(){
wx.reLaunch({
  url: '/pages/index/index',
})
},
    /**
     * 页面的初始数据
     */
    data: {
        wenxue_lab1:"",
        colour:"",
        gate:"weui-icon-waiting weui-icon_msg",
        place:"weui-icon-waiting weui-icon_msg"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let{
        gate,
        place
        }=this.data
        const {
            wenxue_gate2,
            wenxue_place
        }=app.globalData
        if(wenxue_gate2=="-1")
        {
            gate="weui-icon-warn weui-icon_msg"
        }
        else if(wenxue_gate2=="1")
        {
            gate="weui-icon-success weui-icon_msg"
        }
        else
        {
            gate="weui-icon-waiting weui-icon_msg"
        }
       
       
        if(wenxue_place=="-1")
        {
            place="weui-icon-warn weui-icon_msg"
        }
        else if(wenxue_place=="1")
        {
            place="weui-icon-success weui-icon_msg"
        }
        else 
        {
            place="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            gate,
            place
            })
    },

    okkkkkk:function(){
        const {
            wenxue_gate2,
            wenxue_place
        }=app.globalData
        if(wenxue_gate2=="-1"||wenxue_place=="-1")
        {
            app.globalData.wenxueschool="-1"
        }
        else if(wenxue_gate2=="0"||wenxue_place=="0")
        {
            app.globalData.wenxueschool="0"
        }
        else
        {
            app.globalData.wenxueschool="1"
        }
        wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 3000
          })
          setTimeout(function () {
        wx.reLaunch({
        url: '/pages/firstpage/firstpage',
      })
           }, 1000)
    },
    okkkk:function(){
        app.globalData.wenxue_gate2="1"
        wx.navigateTo({
          url: '/pages/firstpage/literary/wenxue/gate2/gate2',
        })
    },
    okkkk1:function(){
        app.globalData.wenxue_place="1"
        wx.navigateTo({
            url: '/pages/firstpage/literary/wenxue/place/place',
          })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})






