// pages/permission/permission.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
      auth: 0,
      checkboxArr: [{
        name: '一级权限',
        
        checked: false
      }, {
        name: '二级权限',
        
        checked: false
      }, {
        name: '三级权限',
        checked: false
      }, {
        name: '四级权限',
        checked: false
      }],
    },
    radio: function (e) {
      var index = e.currentTarget.dataset.index;//获取当前点击的下标
      this.setData({
        auth: index
      })
      console.log(index)
      var checkboxArr = this.data.checkboxArr;//选项集合
      if (checkboxArr[index].checked)
        return 
       ;
       //如果点击的当前已选中则返回
      checkboxArr.forEach(item => {
        item.checked = false
      })
      checkboxArr[index].checked = true;//改变当前选中的checked值
      this.setData({
        checkboxArr: checkboxArr
      });
    },
    radioChange: function (e) {
      var checkValue = e.detail.value;
      this.setData({
        checkValue: checkValue
      });
    },
  confirm: function (e) {
    console.log(e)
    wx.getStorage({
      key: 'token',
      success: res => {
        wx.request({
          url: 'http://college.netlab.sunan.me/wechat/person/authority',
          method: 'POST',
          data: {
            token: res.data,
            auth: this.data.auth
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

  }
    

})