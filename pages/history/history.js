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
    minDate:'1',
    checkDate:'0',
    checkTime:'0',
    scores:'0',
    photoUrl:'0',
    person:'0'
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

  confirm: function (e) {
    var that=this
    wx.request({
      url: 'https://college.netlab.sunan.me/wechat/index/history',
      method: 'POST',
      data: {
        date: e.detail.value.date,
        building: e.detail.value.building,
        room: e.detail.value.room  
      },
      success: function(res){
        console.log(res)
        if(res.statusCode==200){
        that.setData({
          history:res.data
        })
        }
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

  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
 
})