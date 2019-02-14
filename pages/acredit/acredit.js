// pages/acredit/acredit.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    real_name:'',
    mobile:'',
    openID:''
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  submitForm: function (e) {
    this.data.openID = app.globalData.openID;
    this.data.mobile = e.detail.value.mobile;
    this.data.real_name = e.detail.value.realName;
    wx.request({
      url: 'http://college.netlab.sunan.me/login/accredit/index',
      data: {
        openID: this.data.openID,
        real_name: this.data.real_name,
        mobile: this.data.mobile,
      },
      success: res => {
        if (res.data) {
        wx.navigateTo({
          url: '/pages/index/index',
        })
        } else {
          console.log('提交失败！')
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})