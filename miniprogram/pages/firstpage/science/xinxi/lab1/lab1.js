const db = wx.cloud.database()
var app = getApp()
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
    showToast(){
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 3000
      })
      setTimeout(function () {
        wx.redirectTo({
          url: '/pages/firstpage/science/xinxi/xinxi',
        })
       }, 1000)
      
    },
    onShareAppMessage() {
      return {
        title: 'checkbox',
        path: 'page/component/pages/checkbox/checkbox'
      }
    },
    data: {
        imgurl:[],
        exam:[],
        exam1:[],
        exam2:[],
        exam3:[],
        exam4:[],

        item1:{value: 'USA', name: '无问题', checked: 'true'},
        items: [
          {value: 'CHN', name: '没有实验室准入许可'},
          {value: 'BRA', name: '没有安全负责人信息'},
          {value: 'JPN', name: '没有实验室规章管理制度'},
          {value: 'ENG', name: '实验物品乱堆放'},
          {value: 'FRA', name: '实验室存在其他隐患'}
        ]
      },
      onLoad:function(){
        const items= this.data.items
        const item1=this.data.item1
        const infor_lab1_detail=app.globalData.infor_lab1_detail
        const imgurl=app.globalData.infor_lab1_photo
        const exam=app.globalData.infor_lab1_photo1
        const exam1=app.globalData.infor_lab1_photo2
        const exam2=app.globalData.infor_lab1_photo3
        const exam3=app.globalData.infor_lab1_photo4
        const exam4=app.globalData.infor_lab1_photo5
        this.setData({
          imgurl,
          exam,
          exam1,
          exam2,
          exam3,
          exam4,
        })
        for(let i=0;i<infor_lab1_detail.length;i++)
        {
          if(infor_lab1_detail[i].value=="1"){
            items[i].checked=true
            console.log(i,'值为',items[i].checked)
            item1.checked=false
          }
        }
        this.setData({
          items,
          item1
        })
      },
      chooseImg:function(){
        let that=this
        wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const imgurl = res.tempFilePaths
              app.globalData.infor_lab1_photo=imgurl
            that.setData({
              imgurl,
            })
              
              const cloudPath =filePath.match(/\.[^.]+?$/)[0]
              wx.cloud.uploadFile({
                cloudPath,
                filePath,
                success: res => {
                    wx.showToast({
                        title: '上传成功',
                        icon: 'success',
                        duration: 2000
                      })
                  app.globalData.fileID = res.fileID
                  app.globalData.cloudPath = cloudPath
                  app.globalData.imagePath = filePath
                  
                },
                fail: e => {
                  console.error('[上传文件] 失败：', e)
                  wx.showToast({
                    icon: 'none',
                    title: '上传成功',
                  })
                },
                
              })
          }
        })
      },
      chooseImg1:function(){
        let that=this
        wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam = res.tempFilePaths
              app.globalData.infor_lab1_photo1=exam
            that.setData({
              exam,
            })
              
              const cloudPath =filePath.match(/\.[^.]+?$/)[0]
              wx.cloud.uploadFile({
                cloudPath,
                filePath,
                success: res => {
                    wx.showToast({
                        title: '上传成功',
                        icon: 'success',
                        duration: 2000
                      })
                  app.globalData.fileID = res.fileID
                  app.globalData.cloudPath = cloudPath
                  app.globalData.imagePath = filePath
                  
                },
                fail: e => {
                  console.error('[上传文件] 失败：', e)
                  wx.showToast({
                    icon: 'none',
                    title: '上传成功',
                  })
                },
                
              })
          }
        })
      },
      chooseImg2:function(){
        let that=this
        wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam1 = res.tempFilePaths
              app.globalData.infor_lab1_photo2=exam1
            that.setData({
              exam1,
            })
              
              const cloudPath =filePath.match(/\.[^.]+?$/)[0]
              wx.cloud.uploadFile({
                cloudPath,
                filePath,
                success: res => {
                    wx.showToast({
                        title: '上传成功',
                        icon: 'success',
                        duration: 2000
                      })
                  app.globalData.fileID = res.fileID
                  app.globalData.cloudPath = cloudPath
                  app.globalData.imagePath = filePath
                  
                },
                fail: e => {
                  console.error('[上传文件] 失败：', e)
                  wx.showToast({
                    icon: 'none',
                    title: '上传成功',
                  })
                },
                
              })
          }
        })
      },
      chooseImg3:function(){
        let that=this
        wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: [ 'camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam2 = res.tempFilePaths
              app.globalData.infor_lab1_photo3=exam2
            that.setData({
              exam2,
            })
              
              const cloudPath =filePath.match(/\.[^.]+?$/)[0]
              wx.cloud.uploadFile({
                cloudPath,
                filePath,
                success: res => {
                    wx.showToast({
                        title: '上传成功',
                        icon: 'success',
                        duration: 2000
                      })
                  app.globalData.fileID = res.fileID
                  app.globalData.cloudPath = cloudPath
                  app.globalData.imagePath = filePath
                  
                },
                fail: e => {
                  console.error('[上传文件] 失败：', e)
                  wx.showToast({
                    icon: 'none',
                    title: '上传成功',
                  })
                },
                
              })
          }
        })
      },
      chooseImg4:function(){
        let that=this
        wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam3 = res.tempFilePaths
              app.globalData.infor_lab1_photo4=exam3
            that.setData({
              exam3,
            })
              
              const cloudPath =filePath.match(/\.[^.]+?$/)[0]
              wx.cloud.uploadFile({
                cloudPath,
                filePath,
                success: res => {
                    wx.showToast({
                        title: '上传成功',
                        icon: 'success',
                        duration: 2000
                      })
                  app.globalData.fileID = res.fileID
                  app.globalData.cloudPath = cloudPath
                  app.globalData.imagePath = filePath
                  
                },
                fail: e => {
                  console.error('[上传文件] 失败：', e)
                  wx.showToast({
                    icon: 'none',
                    title: '上传成功',
                  })
                },
                
              })
          }
        })
      },
      chooseImg5:function(){
        let that=this
        wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam4 = res.tempFilePaths
              app.globalData.infor_lab1_photo5=exam4
            that.setData({
              exam4,
            })
              
              const cloudPath =filePath.match(/\.[^.]+?$/)[0]
              wx.cloud.uploadFile({
                cloudPath,
                filePath,
                success: res => {
                    wx.showToast({
                        title: '上传成功',
                        icon: 'success',
                        duration: 2000
                      })
                  app.globalData.fileID = res.fileID
                  app.globalData.cloudPath = cloudPath
                  app.globalData.imagePath = filePath
                  
                },
                fail: e => {
                  console.error('[上传文件] 失败：', e)
                  wx.showToast({
                    icon: 'none',
                    title: '上传成功',
                  })
                },
                
              })
          }
        })
      },
      checkboxChange1(e){
        const items= this.data.items
        app.globalData.infor_gate2="1"
          items[0].checked=false
          items[1].checked=false
          items[2].checked=false
          items[3].checked=false
          items[4].checked=false
          this.setData({
          items
          })
          app.globalData.infor_lab1="1"
      },
      checkboxChange(e){
        const items= this.data.items
        const values = e.detail.value
        const item1=false
        const infor_lab1_detail=app.globalData.infor_lab1_detail
        this.setData({
          item1
        })
        for (let i = 0, lenI = items.length; i < lenI; ++i) {
              items[i].checked = false
              for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (items[i].value === values[j]) {
                  db.collection('checkdata').add({
                    data: {
                      _id:'xinxilab'+i,
                      place:'信息学院',
                      unqualified:items[i].name,
                      examiner:app.globalData.username
                    },
    })


                  infor_lab1_detail[i].value="1"
                  
                  // console.log('选中的值为',i)
                  // if(i===0)
                  // {
                  //   items[i].checked=true
                  //   items[1].checked=false
                  //   items[2].checked=false
                  //   items[3].checked=false
                  //   items[4].checked=false
                  //   items[5].checked=false
                  //   this.setData({
                  //     items
                  //   })
                  //   return
                  // }
                  // else{
                  //   items[i].checked = true
                  //   items[0].checked = false
                  //   this.setData({
                  //     items
                  //   })
                  // }
                }
               
              }
      }
      app.globalData.infor_lab1_detail=infor_lab1_detail
      app.globalData.infor_lab1="-1"
    }

      // checkboxChange(e) {
      //   console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    
      //   const items = this.data.items
        
      //   const values = e.detail.value
      //   for (let i = 0, lenI = items.length; i < lenI; ++i) {
      //     items[i].checked = false
      //     items[0].checked=false
      //     for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
      //       if (items[i].value === values[j]) {
      //         items[i].checked = true
      //         break
      //       }
      //     }
      //   }
    
      //   this.setData({
      //     items
      //   })
      // }
      
  })


