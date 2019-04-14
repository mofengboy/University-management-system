// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_year:'1',
    current_month:'1',
    current_day:'1',
    currentDate:'1',
    minDate:'1'
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
    let myDate = new Date();
    this.setData({
      current_year:myDate.getFullYear(),
      current_month:myDate.getMonth()+1,
      current_day:myDate.getDate(),
      currentDate:myDate.getTime(),
      maxDate:myDate.getTime()
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
  historylist: function (e) {
    wx.navigateTo({
      url: '/pages/historylist/historylist',
    })
  },
  confirm: function (e) {
    let _this = this;
    wx.getStorage({
      key: 'token',
      success: res => {
        console.log(this.data)
        wx.request({
          url: 'https://college.netlab.sunan.me/wechat/index/history',
          method: 'POST',
          data: {
            date: e.detail.value.date,
            building: e.detail.value.building,
            room: e.detail.value.room,
            checkDate: res.checkDate,
            checkTime: res.checkTime,
            scores: res.scores,
            photoUrl: res.photoUrl,
            person: res.person
          }
             
        })
      }
    })
  },
  submit: function () {

    this.setData({

      showModal: true

    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})