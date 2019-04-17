// pages/notice/notice.js
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
    wx.showLoading({
      title: '信息获取中',
    })
    console.log('onLoad')
    let that = this;
    wx.request({
      url: 'https://college.netlab.sunan.me/wechat/index/notice',
      method: 'POST',
      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          let length = res.data.length;
          wx.hideLoading();
          that.setData({
            notice1: res.data[length - 1],
            notice2: res.data[length - 2],
            notice3: res.data[length - 3],
          })
        }
      }
    })
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
  

  //标签导航
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

  


  submit: function () {

    this.setData({

      showModal: true

    })

  },
  preventTouchMove: function () {
  },

  go: function () {

    this.setData({

      showModal: false

    })

  }

})