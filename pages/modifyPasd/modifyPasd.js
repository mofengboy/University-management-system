// pages/modifyPasd/modifyPasd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newPhone:"",
    oldPhone:"",
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
  confirm: function (e) {
    wx.showLoading({
      title: '提交中',
    })
    wx.getStorage({
      key: 'token',
      success: res => {
        wx.request({
          url: 'http://college.netlab.sunan.me/wechat/person/phone',
          method: 'POST',
          data: {
            token: res.data,
            oldPhone: e.detail.value.oldPhone,
            newPhone: e.detail.value.newPhone
          },
          success: res => {
            wx.hideLoading();
            wx.navigateBack({
              
            })
          }
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})