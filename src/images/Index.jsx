// import { Component } from 'react'
// import { View, Button, Text, SwiperItem, Swiper, Image } from '@tarojs/components'
// import Taro from '@tarojs/taro'
// // import { observer, inject } from 'mobx-react'


// import "./Index.scss"


// // @inject('store')
// // @observer
// class Home extends Component {

//     state = {
//         active: 0,
//         list: [
//             {
//                 url: "/pages/home/Home",
//                 icon: "wap-home-o",
//                 text: "主页",
//                 myActive: 0,
//                 icon_normal: require("../images/tabbar/home_default.png"),
//                 icon_active: require("../images/tabbar/home_selected.png")
//             },
//             {
//                 url: "/pages/category/Category",
//                 icon: "orders-o",
//                 text: "分类",
//                 myActive: 1,
//                 icon_normal: require("../images/tabbar/category_default.png"),
//                 icon_active: require("../images/tabbar/category_selected.png")
//             },
//             {
//                 url: "/pages/cart/Cart",
//                 icon: "points",
//                 text: "购物车",
//                 myActive: 2,
//                 icon_normal: require("../images/tabbar/shoppingcart_default.png"),
//                 icon_active: require("../images/tabbar/shoppingcart_selected.png")
//             },
//             {
//                 url: "/pages/mine/Mine",
//                 icon: "user-circle-o",
//                 text: "我的",
//                 myActive: 3,
//                 icon_normal: require("../images/tabbar/mine_default.png"),
//                 icon_active: require("../images/tabbar/mine_selected.png")
//             }
//         ],
//         isShow: true
//     }

//     componentDidMount() {

//     }


//     handleChange(e) {
//         console.log("handleChange");
//         this.active = e.detail;
//         // const router=getCurrentInstance();
//         // console.log(router)
//         // Taro.navigateTo({ url: this.pages[this.active] });
//         wx.switchTab({
//             url: this.pages[this.active]
//         });
//     }


//     render() {
//         return (<View>123</View>
//             /*{ <van-tabbar active="active" onChange={this.handleChange} active-color="#75a342" >
//                     <van-tabbar-item wx:for={list}>
//                         <image
//                             wx:if={active == item['myActive']}
//                             slot="icon"
//                             src={item['icon_active']}
//                             mode="aspectFit"
//                             style="width: 30px; height: 18px;"
//                         />
//                         <image
//                             wx:else
//                             slot="icon"
//                             src={item['icon_normal']}
//                             mode="aspectFit"
//                             style="width: 30px; height: 18px;"
//                         />
//                         <view>{item.text}</view>
//                     </van-tabbar-item>

//                 </van-tabbar> }*/

//         )


//     }
// }

// export default Index
