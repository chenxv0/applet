<template>
  <view>
    <!-- <scroll-view   scroll-y id="home" v-if="isLoad">  -->
        <view id="myNavBar1">
          <van-nav-bar  :safe-area-inset-top="false" title="主页">
          </van-nav-bar>
        </view>
        <Header/>
        <!--轮播图-->
        <Sowing :imgSwiper="imgSwiper"/>
        <Nav :navImg="navImg"/>
        <FlashSale :flashSales="flashSales"/>
        <YouLike id="youLike" :youLikeItems="youLikeItems"/>
        <Mark v-if="isShow"/> 
        <van-toast id="van-toast" />
    <!-- </scroll-view> -->
  </view>
  
</template>
<script>
import Header from "./components/Header";
import Sowing from "./components/Sowing";
import Nav from "./components/nav/Nav";
import FlashSale from "./components/flashSale/FlashSale";
import YouLike from "./components/youLike/YouLike";
import Mark from "./components/mark/Mark";


import { getHomeData, addGoods } from "../../service/api/index";
import Pubsub from "pubsub-js";
// import { $ } from '@tarojs/extend'
import Taro, { Events, eventCenter, getCurrentInstance } from "@tarojs/taro";
import { mapMutations, mapState } from "vuex";
import Toast from "../vant-weapp/dist/toast/toast.js";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  name: "Home",
  data() {
    return {
      imgSwiper: [],
      isLoad: false,
      navImg: [],
      flashSales: [],
      youLikeItems: [],
      isShow: true,
      // isLoad: true
    };
  },
  components: {
    Header,
    Sowing,
    Nav,
    FlashSale,
    YouLike,
    Mark

  },
  mounted() {
    this.init_getHomeData();
    // Pubsub.unsubscribe("goToTop");
    // Pubsub.subscribe("goToTop",()=>{
    //   console.log("home123");
    //   this.goToTop();
    // });

    Pubsub.unsubscribe("orderGoods");
    Pubsub.subscribe("orderGoods", (msg, good) => {
      console.log(good);
      if (msg === "orderGoods") {
        console.log(this);
        if (this.userInfo.token) {
          // 已经登录
          // console.log(this.userInfo);
          this.addGoods1(good);
        } else {
          // 没有登录
          Taro.navigateTo({
            url: "../login/login"
          });
        }
      }
    });
  },
  methods: {
    ...mapMutations(["ADD_GOODS"]),
    async init_getHomeData() {
      getHomeData()
        .then(res => {
          let result = res;
          // console.log(result);
          if (result.success) {
            // console.log(result.data.list[12].product_list);
            this.imgSwiper = result.data.list[0].icon_list;
            this.navImg = result.data.list[2].icon_list;
            this.flashSales = result.data.list[3].product_list;
            this.youLikeItems = result.data.list[12].product_list;
            setTimeout(() => {
              this.isLoad = true;
            }, 1000);
          }
        })
        .catch(err => {
          console.log(err);
        });
      // let res = await getHomeData();
      // console.log(res);
    },
    async goToTop() {},
    async addGoods1(good) {
      // console.log({
      //     user_id:this.userInfo.token, goods_id:good.id, goods_name:good.name,
      //     goods_price:good.price, small_image:good.small_image
      // });
      let result = await addGoods({
        user_id: this.userInfo.token,
        goods_id: good.id,
        goods_name: good.name,
        goods_price: good.price,
        small_image: good.small_image
      });
      console.log(result);
      if (result.success_code === 200) {
        Toast({
          message: "添加购物车成功",
          duration: 1400
        });
        this.ADD_GOODS({
          goodId: good.id,
          name: good.name,
          price: good.price,
          img: good.small_image,
          checked: true
        });
      }
    }
  }
};
</script>
<style>
  #myNavBar1 {
    color: black;
    text-align: center;
    height:40PX;
    width:100%;
    background: #f5f5f5; 
    padding-top: 20PX;
    line-height:32PX;
    position:fixed;
    top:0px;
    z-index:2;
  }

</style>