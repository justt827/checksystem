// pages/checkline/checkline.js
var app=getApp()
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
    /**
     * 页面的初始数据
     */
    data: {
        type:"weui-icon-waiting weui-icon_msg",
        typehuagong:"weui-icon-waiting weui-icon_msg",
        typeshengke:"weui-icon-waiting weui-icon_msg",
        typewutian:"weui-icon-waiting weui-icon_msg",
        typeshutong:"weui-icon-waiting weui-icon_msg",
        typeshenghuan:"weui-icon-waiting weui-icon_msg",
        typeruanjian:"weui-icon-waiting weui-icon_msg",
        typetiyu:"weui-icon-waiting weui-icon_msg",
        typejingji:"weui-icon-waiting weui-icon_msg",
        typegongguan:"weui-icon-waiting weui-icon_msg",
        typeminzu:"weui-icon-waiting weui-icon_msg",
        typewenxue:"weui-icon-waiting weui-icon_msg",
        typemingyuan:"weui-icon-waiting weui-icon_msg",
        typegewu:"weui-icon-waiting weui-icon_msg",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const inforschool=app.globalData.inforschool
        let type=this.data
        if(inforschool=="-1")
        {
            type="weui-icon-warn weui-icon_msg"
        }
        else if(inforschool=="1")
        {
            type="weui-icon-success weui-icon_msg"
        }
        else
        {
            type="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            type
        })
        const wenxueschool=app.globalData.wenxueschool
        let typewenxue=this.data
        if(wenxueschool=="-1")
        {
            typewenxue="weui-icon-warn weui-icon_msg"
        }
        else if(wenxueschool=="1")
        {
            typewenxue="weui-icon-success weui-icon_msg"
        }
        else
        {
            typewenxue="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typewenxue
        })
        const jingjischool=app.globalData.jingjischool
        let typejingji=this.data
        if(jingjischool=="-1")
        {
            typejingji="weui-icon-warn weui-icon_msg"
        }
        else if(jingjischool=="1")
        {
            typejingji="weui-icon-success weui-icon_msg"
        }
        else
        {
            typejingji="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typejingji
        })
        const minzuschool=app.globalData.minzuschool
        let typeminzu=this.data
        if(minzuschool=="-1")
        {
            typeminzu="weui-icon-warn weui-icon_msg"
        }
        else if(minzuschool=="1")
        {
            typeminzu="weui-icon-success weui-icon_msg"
        }
        else
        {
            typeminzu="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typeminzu
        })
        const gongguanschool=app.globalData.gongguanschool
        let typegongguan=this.data
        if(gongguanschool=="-1")
        {
            typegongguan="weui-icon-warn weui-icon_msg"
        }
        else if(gongguanschool=="1")
        {
            typegongguan="weui-icon-success weui-icon_msg"
        }
        else
        {
            typegongguan="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typegongguan
        })
        const mingyuanschool=app.globalData.mingyuanschool
        let typemingyuan=this.data
        if(mingyuanschool=="-1")
        {
            typemingyuan="weui-icon-warn weui-icon_msg"
        }
        else if(mingyuanschool=="1")
        {
            typemingyuan="weui-icon-success weui-icon_msg"
        }
        else
        {
            typemingyuan="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typemingyuan
        })
        const gewuschool=app.globalData.gewuschool
        let typegewu=this.data
        if(gewuschool=="-1")
        {
            typegewu="weui-icon-warn weui-icon_msg"
        }
        else if(gewuschool=="1")
        {
            typegewu="weui-icon-success weui-icon_msg"
        }
        else
        {
            typegewu="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typegewu
        })
        const tiyuschool=app.globalData.tiyuschool
        let typetiyu=this.data
        if(tiyuschool=="-1")
        {
            typetiyu="weui-icon-warn weui-icon_msg"
        }
        else if(tiyuschool=="1")
        {
            typetiyu="weui-icon-success weui-icon_msg"
        }
        else
        {
            typetiyu="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typetiyu
        })
        const huagongschool=app.globalData.huagongschool
        let typehuagong=this.data
        if(huagongschool=="-1")
        {
            typehuagong="weui-icon-warn weui-icon_msg"
        }
        else if(huagongschool=="1")
        {
            typehuagong="weui-icon-success weui-icon_msg"
        }
        else
        {
            typehuagong="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typehuagong
        })
        const shenghuanschool=app.globalData.shenghuanschool
        let typeshenghuan=this.data
        if(shenghuanschool=="-1")
        {
            typeshenghuan="weui-icon-warn weui-icon_msg"
        }
        else if(shenghuanschool=="1")
        {
            typeshenghuan="weui-icon-success weui-icon_msg"
        }
        else
        {
            typeshenghuan="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typeshenghuan
        })
        const ruanjianschool=app.globalData.ruanjianschool
        let typeruanjian=this.data
        if(ruanjianschool=="-1")
        {
            typeruanjian="weui-icon-warn weui-icon_msg"
        }
        else if(ruanjianschool=="1")
        {
            typeruanjian="weui-icon-success weui-icon_msg"
        }
        else
        {
            typeruanjian="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typeruanjian
        })
        const shutongschool=app.globalData.shutongschool
        let typeshutong=this.data
        if(shutongschool=="-1")
        {
            typeshutong="weui-icon-warn weui-icon_msg"
        }
        else if(shutongschool=="1")
        {
            typeshutong="weui-icon-success weui-icon_msg"
        }
        else
        {
            typeshutong="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typeshutong
        })
        const shengkeschool=app.globalData.shengkeschool
        let typeshengke=this.data
        if(shengkeschool=="-1")
        {
            typeshengke="weui-icon-warn weui-icon_msg"
        }
        else if(shengkeschool=="1")
        {
            typeshengke="weui-icon-success weui-icon_msg"
        }
        else
        {
            typeshengke="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typeshengke
        })
        const wutianschool=app.globalData.wutianschool
        let typewutian=this.data
        if(wutianschool=="-1")
        {
            typewutian="weui-icon-warn weui-icon_msg"
        }
        else if(wutianschool=="1")
        {
            typewutian="weui-icon-success weui-icon_msg"
        }
        else
        {
            typewutian="weui-icon-waiting weui-icon_msg"
        }
        this.setData({
            typewutian
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