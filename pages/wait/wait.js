// pages/wait/wait.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'token',
      success: res => {
        wx.request({
          url: 'https://college.netlab.sunan.me/login/index/open_id',
          method: 'POST',
          data: {
            token: res.data,
          },
          success: res => {
            console.log(res.data);
            if (res.data == "ture") {
              wx.redirectTo({
                url: '/pages/main/main',
              })
            } else {
              wx.redirectTo({
                url: '/pages/index/index',
              })
            }
          }
        })
      },
      fail: err => {
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