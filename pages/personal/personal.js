// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    realName:''
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
    //获取用户基本信息
    wx.getStorage({
      key: 'token',
      success: res => {
        wx.request({
          url: 'https://college.netlab.sunan.me/user/info/basic',
          method: 'POST',
          data: {
            token: res.data
          },
          success: res => {
            console.log(res)
            this.setData({
              realName: res.data.real_name
            })
          }
        })
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
  onChange: function (e) {
    let jumpUrl = "/pages/main/main";
    switch (e.detail) {
      case 0: jumpUrl = "/pages/main/main";
        break;
      case 1: jumpUrl = "/pages/notice/notice";
        break;
      case 2: jumpUrl = "/pages/personal/personal";
        break;
    }
    wx.reLaunch({
      url: jumpUrl,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  quitFn: function () {    // 退出登陆
    Utils.removeStorage("Reset");
    var res = this.getStorag();
    Utils.requestFn({
      url: 'https://college.netlab.sunan.me/login/isopenid/index',
      method: "POST",
      data: {
        sdk: res.sdk,
        uid: res.uid
      },
      success: function (res) {
        if (res.data.status) {
          wx.reLaunch({
            url: '/pages/index/index'
          })
          Utils.removeStorage("login");

        } else {
          Utils.reLaunch(res.data.message, "/pages/index/index");
          Utils.removeStorage("login");
        }
        return false;
      }
    })
  }
})