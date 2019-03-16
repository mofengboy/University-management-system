// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    real_name:'真实姓名',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'token',
      success: res => {
        wx.request({
          url: 'https://college.netlab.sunan.me/login/islogin/index',
          method: 'POST',
          data: {
            token: res.data
          },
          success: res => {
            if(res.data != "true"){
              wx.redirectTo({
                url: '/pages/index/index',
              })
            }
          },
          fail:err=>{
            console.log(err);
            wx.redirectTo({
              url: '/pages/index/index',
            })
          }
        })
      },
      fail: err => {
        console.log(err);
        wx.redirectTo({
          url: '/pages/index/index',
        })
      }
    })  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getStorage({
      key: 'token',
      success:res=>{
        wx.request({
          url: 'https://college.netlab.sunan.me/user/info/basic',
          method: 'POST',
          data: {
            token:res.data
          },
          success:res=>{
            this.setData({
              real_name: res.data.real_name
            })
          }
        })
      },
      fail:err=>{
        console.log(err);
      }
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

  check: function (event) {
    wx.navigateTo({
      url: '/pages/check/check',
    })
  },
  task:function(e){
    wx.navigateTo({
      url: '/pages/task/task',
    })
  },
  history:function(e){
    wx.navigateTo({
      url: '/pages/history/history',
    })
  },
  notice:function(e){
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  },
  onChange:function(e){
    let jumpUrl = "/pages/main/main";
    switch(e.detail){
      case 0:jumpUrl = "/pages/main/main";
      break;
      case 1:jumpUrl = "/pages/notice/notice";
      break;
      case 2: jumpUrl = "/pages/personal/personal";
      break;
    }
    wx.navigateTo({
      url: jumpUrl,
    })
  }
})