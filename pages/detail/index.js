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
        that.setData({
          mainInfo: res.data
        })
      },
    });
    res.data.typs_conditions.forEach(function(t,x){
      if(x == 0){
        t.housethis = true;
      }
      else{
        t.housethis = false;
      }
    })
  },
  getSecData: function(){
    var that = this;
    wx.request({  
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      method:'GET',
      dataType:'json',
      responseType:'text',
      data:{
       
      },
      success: function(res){
        that.setData({
          HouseInfo:res.data,  
        });
      },
    });
  },
  clickType: function(res){
     
    var index = res.currentTarget.dataset.index;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      data: {
        type_id : index+1,
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        this.setData({
          HouseInfo: HouseInfoTimp,
        });
      },
    });
    var HouseInfotimp = this.data.HouseInfo;
    res.data.typs_conditions.forEach(function (t, x) {
      if (x == 0) {
        t.housethis = true;
      }
      else {
        t.housethis = false;
      }
    })
  },
  
})