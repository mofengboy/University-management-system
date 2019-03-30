// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:''
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
  confirm: function (e) {
    let _this = this;
    wx.getStorage({
      key: 'token',
      success: res => {
        console.log(this.data)
        wx.request({
          url: 'https://college.netlab.sunan.me/wechat/person/feedback',
          method: 'POST',
          data: {
            token: res.data,
            content: e.detail.value.content
          },
          success: res => {
            if(res.data == 0){
              wx.showToast({
                title: '提交成功',
                icon: 'success',
                duration: 1500
              })
              setTimeout(function(){
              wx.navigateBack({})
              },1500)
            }
          }   
        })
      }
    })
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