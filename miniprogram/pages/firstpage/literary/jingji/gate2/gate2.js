const db = wx.cloud.database()
var app = getApp()
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
    showToast(){
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 3000
      })
      setTimeout(function () {
  wx.redirectTo({
    url: '/pages/firstpage/literary/jingji/jingji',
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
          {value: 'CHN', name: '大门消防通道被堵'},
          {value: 'BRA', name: '大门无消防设施'},
          {value: 'JPN', name: '大门地面湿滑'},
          {value: 'ENG', name: '大门有杂货摆放'},
          {value: 'FRA', name: '大门有其他问题'}
        ]
      },
      onLoad:function(){
        const items= this.data.items
        const item1=this.data.item1
        const jingji_gate2_detail=app.globalData.jingji_gate2_detail
        const imgurl=app.globalData.jingji_gate2_photo
        const exam=app.globalData.jingji_gate2_photo1
        const exam1=app.globalData.jingji_gate2_photo2
        const exam2=app.globalData.jingji_gate2_photo3
        const exam3=app.globalData.jingji_gate2_photo4
        const exam4=app.globalData.jingji_gate2_photo5
        this.setData({
          imgurl,
          exam,
          exam1,
          exam2,
          exam3,
          exam4,
        })
        for(let i=0;i<jingji_gate2_detail.length;i++)
        {
          if(jingji_gate2_detail[i].value=="1"){
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
              app.globalData.jingji_gate2_photo=imgurl
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
          sourceType: ['album', 'camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam = res.tempFilePaths
              app.globalData.jingji_gate2_photo1=exam
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
                    title: '上传失败',
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
          sourceType: ['album', 'camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam1 = res.tempFilePaths
              app.globalData.jingji_gate2_photo2=exam1
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
                    title: '上传失败',
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
          sourceType: ['album', 'camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam2 = res.tempFilePaths
              app.globalData.jingji_gate2_photo3=exam2
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
                    title: '上传失败',
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
          sourceType: ['album', 'camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam3 = res.tempFilePaths
              app.globalData.jingji_gate2_photo4=exam3
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
                    title: '上传失败',
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
          sourceType: ['album', 'camera'],
          success(res) {
              const filePath = res.tempFilePaths[0]
              const exam4 = res.tempFilePaths
              app.globalData.jingji_gate2_photo5=exam4
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
                    title: '上传失败',
                  })
                },
                
              })
          }
        })
      },
      checkboxChange1(e){
        const items= this.data.items
          items[0].checked=false
          items[1].checked=false
          items[2].checked=false
          items[3].checked=false
          items[4].checked=false
          this.setData({
          items
          })
          app.globalData.jingji_gate2="1"
      },
      checkboxChange(e){
        const items= this.data.items
        const values = e.detail.value
        const item1=false
        const jingji_gate2_detail=app.globalData.jingji_gate2_detail
        this.setData({
          item1
        })
        for (let i = 0, lenI = items.length; i < lenI; ++i) {
              items[i].checked = false
              for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (items[i].value === values[j]) {
                  jingji_gate2_detail[i].value="1"
                  app.globalData.jingji_gate2="-1"
                  db.collection('checkdata').add({
                    data: {
                      _id:'jingjigate'+i,
                      place:'经济学院',
                      unqualified:items[i].name,
                      examiner:app.globalData.username
                    },
    })
                  console.log('----',app.globalData.jingji_gate2)
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
      app.globalData.jingji_gate2_detail=jingji_gate2_detail
      app.globalData.jingji_gate2="-1"
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







