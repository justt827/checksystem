// pages/firstpage/firstpage.js
Page({
  /*页面切换*/
  /**
   * 页面的初始数据
   */
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
  change1:function(){
    wx.navigateTo({
       url: '/pages/firstpage/science/science',
     })
  },
  change2:function(){
    wx.navigateTo({
      url: '/pages/firstpage/literary/literary',
    })
 },
 change3:function(){
  wx.navigateTo({
    url: '/pages/firstpage/office/office',
  })
},
change4:function(){
  wx.navigateTo({
    url: '/pages/firstpage/sservice/sservice',
  })
},
  science:function(){
    wx.navigateTo({
      url: '/pages/firstpage/science/science',
    })
  },
  sservice:function(){
    wx.navigateTo({
      url: '/pages/firstpage/sservice/sservice',
    })
  },
  literary:function(){
    wx.navigateTo({
      url: '/pages/firstpage/literary/literary',
    })
  },
  office:function(){
    wx.navigateTo({
      url: '/pages/firstpage/office/office',
    })
  },
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