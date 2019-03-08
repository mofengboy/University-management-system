// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isExist:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success:res=>{
        wx.request({
          url: 'https://college.netlab.sunan.me/login/isopenid/index',
          method:'POST',
          data:{
            code:res.code
          },
          success:res=>{
            if(res.data!= "NULL"){
              wx.setStorage({
                key: 'token',
                data: res.data,
              });
              wx.redirectTo({
                url: '/pages/main/main',
              })
            }else{
              this.setData({
                isExist:true
              })
            }
          }
        })
      }
    })
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
  accredit:function(e){
    console.log(e);
    wx.login({
      success:res=>{
        this.data.code = res.code;
        wx.getUserInfo({
          withCredentials:true,
          success:res=>{
            wx.request({
              url: 'https://college.netlab.sunan.me/login/accredit/index',
              method:'POST',
              data:{
                real_name:e.detail.value.realName,
                phone_number:e.detail.value.phoneNumber,
                code:this.data.code,
                encryptedData:res.encryptedData,
                iv:res.iv,
                rawData:res.rawData,
                signature:res.signature

              },
              success:res=>{
                wx.setStorage({
                  key: 'token',
                  data:res.data,
                  success: res=>{
                    wx.redirectTo({
                      url: '/pages/main/main',
                    })
                  },
                })
              }
            })
          }
        })
      }
    })
  }

})