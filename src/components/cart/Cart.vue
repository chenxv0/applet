<template>
  <view>
        <view id="cart_cart">
          <view id="myNavBar3">
            <van-nav-bar  :safe-area-inset-top="false" title="购物车" leftText="清空购物车"   @onclickleft="onClickLeft">
            </van-nav-bar>          
          </view>

          <view class="contentWrapper_cart">
            <view class="contentWrapperList_cart">
                <view>
                    <view class="shopCartListCon_cart" v-for="(good,index) in shopCart" :key="index">
                        <view class="left_cart">
                            <image class="cartCheckBox_cart"  :class="{'cartCheckBox_cart1':good.checked}"
                                @tap="chooseGood(index)"
                            />
                        </view>
                        <view class="center_cart">
                            <image mode="aspectFit" :src="good.small_image" alt="" />
                        </view>
                        <view class="right_cart">
                            <view class="name_cart">{{good.name}}</view>
                            <view class="bottomContent_cart"> 
                                <view class="shopPrice_cart">                                 
                                   {{$filters.moneyFormate(good.price)}}
                                </view>
        
                                <view class="shopDeal_cart">
                                    <view  class="span1" @tap="changeNum(false,index)">-</view>
                                    <input class="input1" disabled="true" type="number" :value="good.num">
                                    <view  class="span1" @tap="changeNum(true,index)">+</view>
                                </view>
                            
                            </view>
                        </view>
                    </view>
                </view>
            </view>
    
            <view class="tabBar_cart">
                <view class="tabBarLeft_cart">
                    <view class="allSelect_cart" @tap="chooseAll(isSelectAll)" ></view>
                    <view style="font-size: 16px;" >全选</view>
                    <view class="selectAll_cart">
                        合计：<view class="totalPrice_cart"> {{$filters.moneyFormate(totalPrice)}}</view>
                    </view>
                </view>
                <view class="tabBarRight_cart" @tap=goOrder>
                    去结算({{totalNum}})
                </view>
            </view>
            <van-dialog id="van-dialog" />
        </view>     



    </view>
  </view>
    

</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
// import { Toast } from "vant";
// import { Dialog } from "vant";
// import SelectLogin from "./../login/SelectLogin";
import {
  getShopCart,
  sendSelect,
  changeNum,
  delGoods,
  sendSelectAll
} from "./../../service/api/index";
import { $ } from "@tarojs/extend";
import Dialog from '../vant-weapp/dist/dialog/dialog';
import Taro from "@tarojs/taro";
import {setLocalStorage} from "../../config/globel.js"

export default {
  name: "Cart",
  computed: {
    ...mapState(["shopCart", "userInfo"]),
    ...mapGetters(["totalPrice", "totalNum", "isSelectAll"])
  },
  components: {
    // SelectLogin
  },
  mounted() {
    console.log(this.shopCart);
    // console.log(typeof this.userInfo);
 
    this.getShopCart1();
    
    
  },
  methods: {
    ...mapMutations([
      "CHANGE_GOODS_NUM",
      "CLEAR_GOODS",
      "CHOOSE_GOODS",
      "CHOOSE_ALL",
      "INIT_SHOPCART"
    ]),
    async changeNum(val, goodId) {
      // console.log(goodId);
      if (val) {
        let result = await changeNum({
          user_id: this.userInfo.token,
          goods_id: goodId,
          type: "add"
        });
        console.log(result);
        if (result.success_code === 200) {
          this.CHANGE_GOODS_NUM({ bool: val, goodId: goodId });
        }
      } else {
        if (this.shopCart[goodId]["num"] > 1) {
          let result = await changeNum({
            user_id: this.userInfo.token,
            goods_id: goodId,
            type: "reduce"
          });
          if (result.success_code === 200) {
            this.CHANGE_GOODS_NUM({ bool: val, goodId: goodId });
          }
        } else {
          Dialog.confirm({
            title: "温馨提醒",
            message: "确定要删除该商品吗"
          }).then(async () => {
            let result = await changeNum({
            user_id: this.userInfo.token,
            goods_id: goodId,
            type: "reduce"
            });
            console.log(result);
            if (result.success_code === 200) {
              this.CHANGE_GOODS_NUM({ bool: val, goodId: goodId });
              }
            }).catch(() => {
            // on cancel
              });
          }
      }
    },
    onClickLeft() {
      Dialog.confirm({
        title: "温馨提醒",
        message: "确定要清空购物车吗"
      })
        .then(async () => {
          let result = await delGoods(this.userInfo.token);
          console.log(result);
          if (result.success_code === 200) {
            this.CLEAR_GOODS();
          }
        })
        .catch(() => {
          // on cancel
        });
    },
    async chooseGood(goodId) {
      let result = await sendSelect({
        user_id: this.userInfo.token,
        goods_id: goodId
      });
      console.log(result);
      if (result.success_code === 200) {
        this.CHOOSE_GOODS(goodId);
      }
    },
    async chooseAll(val) {
      console.log(val);
      let result = await sendSelectAll({
        user_id: this.userInfo.token,
        flag: val
      });
      // console.log(result);
      if (result.success_code === 200) {
        if (this.isSelectAll) {
          console.log("全选");
          $(".allSelect_cart").addClass("allSelect_cart1");
          $(".allSelect_cart").removeClass("allSelect_cart");
        } else {
          console.log("非全选");
          $(".allSelect_cart1").addClass("allSelect_cart");
          $(".allSelect_cart").removeClass("allSelect_cart1");
        }
        if (Object.values(this.shopCart) === 0) {
          return;
        }
        this.CHOOSE_ALL(val);
      }
    },
    goOrder(){
      console.log("goOrder");
      Taro.navigateTo({
        url:"../order/order"
      })
    },
    async getShopCart(){
        let result=await getShopCart();
        console.log(result);
    },
    async getShopCart1(){
      // console.log(this.userInfo.token);
      let result=await getShopCart(this.userInfo.token);
      // console.log(result);
      if(result.success_code===200){
          let arr={};
          result.data.forEach((good,index)=>{
              arr[good.goods_id]=
                  {id:good.goods_id,name:good.goods_name,
                  price:good.goods_price,small_image:good.small_image,checked:good.checked,
                  num:good.num};
          });
          // console.log(arr);
          setLocalStorage("shopCart",arr);
          this.INIT_SHOPCART();
      }
    }
  }
};
</script>

<style>
#myNavBar3 {
  color: black;
  text-align: center;
  height: 40PX;
  background: #f5f5f5; 
  padding-top: 20PX;
  line-height:32PX;
  position: fixed;
  top:0;
  z-index:2;
  width:100%;
}
button::after{
  border: none;

}
#cart_cart {
  width: 100%;
  height: 1300px;
  background: transparent;
}

.titleWrapper_cart {
  width: 100%;
  height: 2.6rem;
  background: #fff;
  -webkit-background-size: 0.1rem 4.4rem;
  background-size: 0.1rem 4.4rem;
  position: relative;
  left: 0;
  top: 0;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
}

.contentWrapper_cart {
  /* padding-top: 3.5rem; */
  margin-top:60PX;
  border-top:10px solid #f5f5f5;
}

/*列表内容*/
.contentWrapperList_cart {
  padding-bottom: 6rem;
}

.contentWrapperList_cart view {
  background-color: #fff;
}

.cartCheckBox_cart {
  background: url("https://636c-cloud1-8gks64p5f4ca2985-1305593009.tcb.qcloud.la/shop-icon.png?sign=1abcbd3d20ea94d4a425bc6998cbb856&t=1618367535") no-repeat;
  -webkit-background-size: 2.5rem 5rem;
  background-size: 2.5rem 5rem;
  width: 1rem;
  height: 1rem;
}

.shopCartListCon_cart .cartCheckBox_cart1 {
  background: url("https://636c-cloud1-8gks64p5f4ca2985-1305593009.tcb.qcloud.la/shop-icon.png?sign=1abcbd3d20ea94d4a425bc6998cbb856&t=1618367535") no-repeat;
  -webkit-background-size: 2.5rem 5rem;
  background-size: 2.5rem 5rem;
  width: 1rem;
  height: 1rem;
  background-position: -1.2rem 0;
}

.allSelect_cart {
  background: url("https://636c-cloud1-8gks64p5f4ca2985-1305593009.tcb.qcloud.la/shop-icon.png?sign=1abcbd3d20ea94d4a425bc6998cbb856&t=1618367535") no-repeat;
  -webkit-background-size: 2.5rem 5rem;
  background-size: 2.5rem 5rem;
  width: 1rem;
  height: 1rem;
}

.allSelect_cart1 {
  background: url("https://636c-cloud1-8gks64p5f4ca2985-1305593009.tcb.qcloud.la/shop-icon.png?sign=1abcbd3d20ea94d4a425bc6998cbb856&t=1618367535") no-repeat;
  -webkit-background-size: 2.5rem 5rem;
  background-size: 2.5rem 5rem;
  width: 1rem;
  height: 1rem;
  background-position: -1.2rem 0;
}
.shopCartListCon_cart {
  display: flex;
  height: 6rem;
  border-bottom: 0.01rem solid #e0e0e0;
  margin-bottom: 0.7rem;
  padding: 0.5rem 0;
}

.shopCartListCon_cart .left_cart {
  /* background: purple; */
  flex: 1;
  display: flex;
  justify-content: center;
}

.shopCartListCon_cart .left_cart .cartCheckBox_cart {
  margin-top: 2.3rem;
  margin-left: 0.5rem;
}

.shopCartListCon_cart .center_cart {
  /* background: blue; */
  flex: 3;
}

.shopCartListCon_cart .center_cart image {
  width: 100%;
  height: 100%;
}

.shopCartListCon_cart .right_cart {
  /* background: orangered; */
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
}

.shopCartListCon_cart .bottomContent_cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.shopCartListCon_cart .bottomContent_cart .shopPrice_cart {
  font-size: 0.8rem;
}

.span1 {
  width: 1rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  float: left;
}

.input1 {
  float: left;
  width: 2rem;
  height: 1.2rem;
  text-align: center;
  margin: 0 0.2rem;
  font-size: 0.8rem;
}

/*底部通栏*/
.tabBar_cart {
  position: fixed;
  left: 0;
  bottom: 2.7rem;
  width: 100%;
  height: 2.5rem;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem solid #e0e0e0;
}

.tabBarLeft_cart {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}

.tabBarLeft_cart .selectAll_cart {
  margin-left: 1rem;
  font-size: 1rem;
}

.totalPrice_cart {
  color: #e9232c;
  display: inline-block;
}

.tabBarRight_cart .pay_cart {
  width: 5rem;
  height: 2rem;
  background-color: #e9232c;
  border-radius: 1rem;
  margin-right: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
}
</style>