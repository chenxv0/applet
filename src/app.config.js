export default {
  pages: [
    'pages/index/index',
    // 'pages/order/order',
    // 'pages/login/login'
  ],
  window: {
    // backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#fff',
    // navigationBarTitleText: 'WeChat',
    // navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  },
  usingComponents: {
    'van-button': './components/vant-weapp/dist/button/index',
    "van-tabbar": "./components/vant-weapp/dist/tabbar/index",
    "van-tabbar-item": "./components/vant-weapp/dist/tabbar-item/index",
    "van-toast": "./components/vant-weapp/dist/toast/index",
    "van-dialog": "./components/vant-weapp/dist/dialog/index",
    "van-nav-bar": "./components/vant-weapp/dist/nav-bar/index",
    "van-icon": "./components/vant-weapp/dist/icon/index",
    "van-cell": "./components/vant-weapp/dist/cell/index",
    "van-cell-group": "./components/vant-weapp/dist/cell-group/index",
    "van-submit-bar": "./components/vant-weapp/dist/submit-bar/index",
    "van-switch": "./components/vant-weapp/dist/switch/index",
    "van-area": "./components/vant-weapp/dist/area/index",
    "van-popup": "./components/vant-weapp/dist/popup/index",
    "van-grid": "./components/vant-weapp/dist/grid/index",
    "van-grid-item": "./components/vant-weapp/dist/grid-item/index",
    "van-tab": "./components/vant-weapp/dist/tab/index",
    "van-tabs": "./components/vant-weapp/dist/tabs/index",
    "van-datetime-picker": "./components/vant-weapp/dist/datetime-picker/index",
    "van-card": "./components/vant-weapp/dist/card/index"

  },
  //  分包路径
  subPackages:[
    {
      "root": "pages/order/",
      "pages": [
        "order"
      ]
    },
    {
      "root": "pages/login/",
      "pages": [
        "login"
      ]
    }    
  ]
}
