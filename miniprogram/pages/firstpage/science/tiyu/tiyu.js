const db = wx.cloud.database()
const app = getApp()
Page({   tofirstpage:function(){
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
        tiyu_lab1:"",
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
            tiyu_gate2,
            tiyu_place
        }=app.globalData
        if(tiyu_gate2=="-1")
        {
            gate="weui-icon-warn weui-icon_msg"
        }
        else if(tiyu_gate2=="1")
        {
            gate="weui-icon-success weui-icon_msg"
        }
        else
        {
            gate="weui-icon-waiting weui-icon_msg"
        }
       
       
        if(tiyu_place=="-1")
        {
            place="weui-icon-warn weui-icon_msg"
        }
        else if(tiyu_place=="1")
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
            tiyu_gate2,
            tiyu_place
        }=app.globalData
        if(tiyu_gate2=="-1"||tiyu_place=="-1")
        {
            app.globalData.tiyuschool="-1"
        }
        else if(tiyu_gate2=="0"||tiyu_place=="0")
        {
            app.globalData.tiyuschool="0"
        }
        else
        {
            app.globalData.tiyuschool="1"
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
        app.globalData.tiyu_gate2="1"
        wx.navigateTo({
          url: '/pages/firstpage/science/tiyu/gate2/gate2',
        })
    },
    okkkk1:function(){
        app.globalData.tiyu_place="1"
        wx.navigateTo({
            url: '/pages/firstpage/science/tiyu/place/place',
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



