// pages/task/task.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_time: "日",
    columns: ['周日', '周一', '周二', '周三', '周四','周五','周六']
  },

  onChange:function(e) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
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
    let week = myDate.getDay();
    switch(week){
      case 0: this.setData({
        current_time: '日'
      });;
      break;
      case 1: this.setData({
        current_time: '一'
      });;
      break;
      case 2: this.setData({
        current_time: '二'
      });;
      break;
      case 3: this.setData({
        current_time: '三'
      });;
      break;
      case 4: this.setData({
        current_time: '四'
      });;
      break;
      case 5: this.setData({
        current_time: '五'
      });;
      break;
      case 6: this.setData({
        current_time:'六'
        });
      break;
    }
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