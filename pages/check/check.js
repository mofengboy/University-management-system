// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        realName:'',
        photoUrl:'/images/default.png' 
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
    wx.getStorage({
      key: 'token',
      success:res=> {
        wx.request({
          url: 'https://college.netlab.sunan.me/user/info/basic',
          method:'POST',
          data:{
            token:res.data
          },
          success:res=>{
            this.setData({
              realName:res.data.real_name
            })
          }
        })
      },
    })
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

  },

  /*
  *自定义函数
  */
  choose:function(){
    wx.chooseImage({
      count:1,
      sizeType:['original'],
      sourceType:['camera'],
      success: res=> {
        this.setData({
          photoUrl: res.tempFilePaths[0]
        })
      },
    })
  },
  // 确认
  confirm: function (e) {
    wx.showLoading({
      title: '图片上传中',
    })
    let nowDate = new Date();
    let checkDateYear = nowDate.getFullYear();
    let checkDate = checkDateYear.toString()+ (nowDate.getMonth()+1)+nowDate.getDate();
    let checkTime = nowDate.toLocaleTimeString();
    wx.request({
      url: 'https://college.netlab.sunan.me/wechat/index/check',
      method:'POST',
      data:{
        checkTime: checkTime,
        checkDate: checkDate,
        realName: this.data.realName,
        building: e.detail.value.building,
        room: e.detail.value.room,
        scores: e.detail.value.scores
      },
      success:res=>{
        //信息存储成功之后，开始上传文件
        if(res.data.status == 1){
          let id = res.data.id;
        const uploadTask = wx.uploadFile({
          url: 'https://college.netlab.sunan.me/wechat/index/check_img',
          header: {
            "content-type": 'application/x-www-form-urlencoded;charset=utf-8',
          },
          filePath: this.data.photoUrl,
          name: 'photoName',
          formData:{
            id:id
          },
          success: res => {
            if(res.data == 0){
              wx.hideLoading();
              wx.redirectTo({
                url: '/pages/main/main',
              })
            }
          }
        })
        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        })
      }else{
        console.log("信息存储失败")
      }
      }
    })
   
  }
})