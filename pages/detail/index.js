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
  clickType: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      data: {
        type_id: index
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var mainInfoTemp = that.data.mainInfo;
        mainInfoTemp.data.typs_conditions.forEach(function(item){
          item.d = false
        });
        mainInfoTemp.data.typs_conditions[index-1].d = true;
        that.setData({
          HouseInfo: res.data,
          mainInfo : mainInfoTemp,
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
})
// {
//   "error_code":0,
//     "message":"success",
//       "data":{
//     "house_lists":[
//       {
//         "id": 2,
//         "title": "四室",
//         "image": "https://image1.ljcdn.com/hdic-resblock/ba1250ad-8d72-4633-8e1b-7e08e13dccc1.jpg.1000x.jpg",
//         "status": 1,
//         "price": 1876,
//         "type_id": 1,
//         "tabs": [
//           "多卫",
//           "干净",
//           "房型方正"
//         ]
//       },
//       {
//         "id": 4,
//         "title": "四室",
//         "image": "https://image1.ljcdn.com/hdic-resblock/ba1250ad-8d72-4633-8e1b-7e08e13dccc1.jpg.1000x.jpg",
//         "status": 1,
//         "price": 1876,
//         "type_id": 1,
//         "tabs": [
//           "多卫",
//           "干净",
//           "房型方正"
//         ]
//       }
//     ]
//   }
// }


// {
//   "error_code":0,
//     "message":"success",
//       "data":{
//     "house_info":{
//       "title":"大运河孔雀城",
//         "seTitle":"大运河孔雀城温莎郡",
//           "images":[
//             {
//               "id": 1,
//               "image_path": "https://image1.ljcdn.com/hdic-resblock/df800b5f-4430-4767-a5d4-4b07e547b988.jpg.1000x.jpg"
//             },
//             {
//               "id": 2,
//               "image_path": "https://image1.ljcdn.com/hdic-resblock/c5715294-179e-40aa-938b-5f91ce5c1f48.jpg.1000x.jpg"
//             },
//             {
//               "id": 3,
//               "image_path": "https://image1.ljcdn.com/hdic-resblock/ba1250ad-8d72-4633-8e1b-7e08e13dccc1.jpg.1000x.jpg"
//             }
//           ],
//             "price":"630",
//               "type":"2室1厅",
//                 "area":"90.34",
//                   "open_time":"预计五月开盘",
//                     "address":"顺义新城第二十一街区",
//                       "status":1
//     },
//     "typs_conditions":[
//       {
//         "id": 1,
//         "name": "四室"
//       },
//       {
//         "id": 2,
//         "name": "三室"
//       },
//       {
//         "id": 3,
//         "name": "二室"
//       }
//     ],
//       "comments":{
//       "tab_score":[
//         {
//           "name": "周围配套",
//           "score": 3.6
//         },
//         {
//           "name": "交通方便",
//           "score": 3.7
//         },
//         {
//           "name": "交通方便",
//           "score": 4.2
//         }
//       ],
//         "comment":[
//           {
//             "user_id": 11,
//             "user_name": "王晓易",
//             "user_image": "https://image1.ljcdn.com/hdic-resblock/ba1250ad-8d72-4633-8e1b-7e08e13dccc1.jpg.1000x.jpg",
//             "user_score": [
//               {
//                 "name": "配套",
//                 "score": 3
//               },
//               {
//                 "name": "交通",
//                 "score": 3
//               },
//               {
//                 "name": "交通",
//                 "score": 3
//               }
//             ],
//             "user_comment": "离市区比较远，周边设施还在建设中，配套环境什么的也算还好，户型特别方正。平常逛街方便.......",
//             "create_time": "2017年07月26日"
//           },
//           {
//             "user_id": 22,
//             "user_name": "马大哈",
//             "user_image": "https://image1.ljcdn.com/hdic-resblock/ba1250ad-8d72-4633-8e1b-7e08e13dccc1.jpg.1000x.jpg",
//             "user_score": [
//               {
//                 "name": "配套",
//                 "score": 3.9
//               },
//               {
//                 "name": "交通",
//                 "score": 3.9
//               },
//               {
//                 "name": "交通",
//                 "score": 3.9
//               }
//             ],
//             "user_comment": "离市区比较远，周边设施还在建设中，配套环境什么的也算还好，户型特别方正。平常逛街方便.......",
//             "create_time": "2018年08月28日"
//           }
//         ]
//     },
//     "questions":[
//       {
//         "id": 200,
//         "question": "房子好看不？",
//         "attention_num": 1982,
//         "answer_num": 98
//       },
//       {
//         "id": 201,
//         "question": "小区绿化多吗？",
//         "attention_num": 1982,
//         "answer_num": 98
//       },
//       {
//         "id": 202,
//         "question": "窗户大不大？",
//         "attention_num": 1982,
//         "answer_num": 98
//       }
//     ],
//       "hotlists":[
//         {
//           "id": 1,
//           "title": "西山甲一号山甲",
//           "image": "https://image1.ljcdn.com/hdic-resblock/ba1250ad-8d72-4633-8e1b-7e08e13dccc1.jpg.1000x.jpg",
//           "address": "朝阳 孙河板块",
//           "uprice": 87152
//         },
//         {
//           "id": 2,
//           "title": "霞公府",
//           "image": "https://image1.ljcdn.com/hdic-resblock/ba1250ad-8d72-4633-8e1b-7e08e13dccc1.jpg.1000x.jpg",
//           "address": "东城北京饭店",
//           "uprice": 62317
//         }
//       ]
//   }