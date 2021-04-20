<template>
  <view>
    
    <view id="index">
      <view id="showDetails">
        <view v-if="active==0">
         <Home></Home> 
        </view>
        <view v-else-if="active==1">
          <Category></Category>
        </view>
        <view v-else-if="active==2">
          <Cart></Cart>
        </view>
        <view v-else>
          <Mine></Mine>
        </view>
      </view>
      <view >
        <van-tabbar :active="active" @change="onChange" active-color="#75a342" >
        <van-tabbar-item v-for="(page,index) in list" :key="index" :icon="active==page['myActive']?page.icon_active:page.icon_normal">
          {{page.text}}
        </van-tabbar-item>
        </van-tabbar>
      </view>
      

    </view>
  </view>
  
</template>

<script>
import Home from "../../components/home/Home.vue";
import Category from "../../components/category/Category.vue";
import Cart from "../../components/cart/Cart.vue";
import Mine from "../../components/mine/Mine.vue";
import {getLocalStorage} from '../../config/globel.js'
import { $ } from "@tarojs/extend";
import { mapState} from "vuex";
import Taro from "@tarojs/taro";
export default {
  name: "Index",
  computed: {
    ...mapState(["userInfo"]),
  },
  data() {
    return {
      active: getLocalStorage("active") || 0,
      list: [
        {
          text: "主页",
          myActive: 0,
          icon_normal: require("../../images/tabbar/home_default.png"),
          icon_active: require("../../images/tabbar/home_selected.png")
        },
        {
          text: "分类",
          myActive: 1,
          icon_normal: require("../../images/tabbar/category_default.png"),
          icon_active: require("../../images/tabbar/category_selected.png")
        },
        {
          text: "购物车",
          myActive: 2,
          icon_normal: require("../../images/tabbar/shoppingcart_default.png"),
          icon_active: require("../../images/tabbar/shoppingcart_selected.png")
        },
        {
          text: "我的",
          myActive: 3,
          icon_normal: require("../../images/tabbar/mine_default.png"),
          icon_active: require("../../images/tabbar/mine_selected.png")
        }
      ],
      listKeys: []
    };
  },
  mounted() {
    this.xx();
  },
  components: { Home, Category, Cart, Mine },
  methods: {
    async xx() {
      // const height =await $('#showDetails').scrollTop();
      // console.log( height)
    },
    onChange(e) {
      console.log(e.detail);
      if( !this.userInfo.token){
        if(e.detail==2 || e.detail==3){
          Taro.navigateTo({
            url:"../login/login"
          })
        }else{
          this.active = e.detail;
        }
      }else{
        this.active = e.detail;
      }
    },
    onShareAppMessage(res) {
      if (res.from === "button") {
        // 来自页面内转发按钮
        console.log(res);
      }
      return {
        title: "自定义转发标题",
        path: "/page/user?id=123"
      };
    },
    onTabItemTap(Object) {
      console.log("tap");
    }
  }
};
</script>
<style>

</style>