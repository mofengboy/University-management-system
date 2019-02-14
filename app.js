App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.login({
      success:res =>{
        if(res.code){
          wx.request({
            url: 'http://college.netlab.sunan.me/login/code/index',
            data:{
              code:res.code
            },
            success:res=>{
              this.globalData.openID = res.data.openid;
              //检测数据库中是否已经存在openID
              wx.request({
                url: 'http://college.netlab.sunan.me/login/isopenid/index',
                data:{
                  openID: this.globalData.openID
                },
                success:res=>{
                  if(res.data){
                    // 默认进入index页面
                    wx.redirectTo({
                      url:'/pages/index/index',
                    })
                  }else{
                    wx.redirectTo({
                      url: '/pages/acredit/acredit',
                    })
                  }
                }
              })
            }
          })
        }else{
          console.log('登陆失败!'+res.errMsg);
        }
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  /**
   * 全局变量
   */
  globalData:{
    isAcredit:false,
    openID:''
  }
})
