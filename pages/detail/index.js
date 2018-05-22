// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   mainInfo:{},
   HouseInfo:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    this.getSecData();
    this.clickType();

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

  /**
   * 页面接口
   */
  getData: function () {
    var that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/xinfang',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        //默认显示第一项样式
        res.data.data.typs_conditions.forEach(function (t, x) {
          if (x == 0) {
            t.d = true;
          }
          else {
            t.d = false;
          }
        });
        that.setData({
          mainInfo: res.data
        });
        
      },
    });
   
  },
  getSecData: function(){
    var that = this;
    wx.request({  
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      method:'GET',
      dataType:'json',
      responseType:'text',
      success: function(res){
        that.setData({
          HouseInfo:res.data,  
        });
      },
    });
  },
  clickType: function(event){
    var index = event.currentTarget.dataset.index;
    var that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      data: {
        type_id : index
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var infoTemp = that.data.mainInfo;
        infoTemp.data.typs_conditions.forEach(function (item) {
          item.d = false
        })
        infoTemp.data.typs_conditions[index - 1].d = true;
        that.setData({
          HouseInfo: res.data,
          mainInfo: infoTemp
        })
      },
    });
  },
})
