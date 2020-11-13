// pages/firstpage/science/science.js
Page({
  tofirstpage:function(){
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
  xinxi:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/xinxi/xinxi',
    })
  },
  shenghuan:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/shenghuan/shenghuan',
    })
  },
  wutian:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/wutian/wutian',
    })
  },
  ruanjian:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/ruanjian/ruanjian',
    })
  },
  shengke:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/shengke/shengke',
    })
  },
  huagong:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/huagong/huagong',
    })
  },
  tiyu:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/tiyu/tiyu',
    })
  },
  shutong:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/shutong/shutong',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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