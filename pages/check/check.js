// pages/check/check.js
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
    console.log(e)
    let _this = this;
    wx.getStorage({
      key: 'token',
      success: res => {
        console.log(this.data)
        wx.request({
          url: 'http://college.netlab.sunan.me/wechat/index/check',
          method: 'POST',
          data: {
            token: res.data,
            building: e.detail.value.building,
            room: e.detail.value.room,
            scores: e.detail.value.scores,

          },
          success: res => {
            console.log(res)
            this.setData({

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