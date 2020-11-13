// pages/firstpage/literary/literary.js
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
  jingji:function(){
    wx.navigateTo({
      url: '/pages/firstpage/literary/jingji/jingji',
    })
  },
  gongguan:function(){
    wx.navigateTo({
      url: '/pages/firstpage/literary/gongguan/gongguan',
    })
  },
  wenxue:function(){
    wx.navigateTo({
      url: '/pages/firstpage/literary/wenxue/wenxue',
    })
  },
  minzu:function(){
    wx.navigateTo({
      url: '/pages/firstpage/literary/minzu/minzu',
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

