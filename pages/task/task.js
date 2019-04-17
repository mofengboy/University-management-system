// pages/task/task.js

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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  confirm: function (e) {
    wx.showLoading({
      title: '提交中',
    })
    let _this = this;
    wx.getStorage({
      key: 'token',
      success: res => {
        console.log(this.data)
        wx.request({
          url: 'https://college.netlab.sunan.me/wechat/index/task',
          method: 'POST',
          data: {
            token: res,
            person: e.detail.value.person,
            checkTime: e.detail.value.checkTime,
            building: e.detail.value.building,
            room: e.detail.value.room,
            rule: e.detail.value.rule
          },
          success: res => {
            if (res.data == 1) {
              wx.hideLoading();
              wx.redirectTo({
                url: '/pages/main/main',
              })
            }
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})