// pages/task/task.js
const list = {
  '周日': ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节', '第六大节'],
  '周一': ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节', '第六大节'],
  '周二': ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节', '第六大节'],
  '周三': ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节', '第六大节'],
  '周四': ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节', '第六大节'],
  '周五': ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节', '第六大节'],
  '周六': ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节', '第六大节'],
};
Page({

  /**
   * 页面的初始数据
   */

  data: {
    current_time: "日",
    columns: [
      {
        values: Object.keys(list),
        className: 'column1'
      },
      {
        values: list['周日'],
        className: 'column2',
        defaultIndex: 2
      }
    ]
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