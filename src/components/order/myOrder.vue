<template>
    <view id="myOrder">
      <view id="myNavBar10">
          <van-nav-bar  :safe-area-inset-top="false" title="订单"  leftArrow=true  leftText="返回" @onclickleft="onClickLeft" >
          </van-nav-bar>
      </view>
      <content-cart @tap="add" ></content-cart>  
      <van-cell-group id="cell_group_order">
        <van-cell title="送达时间" :value="arriveTime"  is-link=true  center=true  @click="chooseTime" />
        <van-cell :value="`共${totalNum}件`"  is-link=true center=true @tap="getDetail" :label="threeGoods">
        </van-cell>
      </van-cell-group>
      <van-cell-group >
          <van-cell title="支付方式" value="微信"  is-link=true center></van-cell>
      </van-cell-group>

      <van-cell-group >
          <van-cell title="备注">
              <input type="text" placeholder="选填,备注你的特殊需求" style="text-align: right" v-model="notice">
          </van-cell>
      </van-cell-group>
      <van-cell-group >
          <van-cell title="商品金额" :value="`¥${totalPrice}`"  is-link=true center></van-cell>
          <van-cell title="配送费" :value="`¥${sendMoney}`"   is-link=true center></van-cell>
      </van-cell-group> 
      <van-submit-bar
        :price="sumMoney"
        label="实付"
        button-text="提交订单"
        @submit="onSubmit"
      />
      <van-popup
        :show="show"
        position="bottom"
        custom-style="height: 40%;"
        bind:close="onClose"
      >
       <van-datetime-picker
            type="datetime"
            v-model="arriveTime"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirm"
            @cancel="cancel"
        ></van-datetime-picker>
      </van-popup>

      <van-popup :show="isPay" round=true position="center">
          <canvas canvas-id="myQrcode" 
            style="width:170px;height:170px;position:relative;top:10px;left:10px;" 
            disable-scroll="false" 
          >
          </canvas>
      </van-popup>

      <van-toast id="van-toast" />
    </view>
</template>

<script>
import Pubsub from "pubsub-js";
import moment from "moment";
import { mapState, mapGetters,mapMutations } from "vuex";
import Taro from "@tarojs/taro";
import Toast from "../vant-weapp/dist/toast/toast.js";
// import drawQrcode from 'weapp-qrcode';
import {
  getSelectedGoods,
  createOrder,
  delOrderGoods,
  createOrderCard,
  getPay,setPayQuery,getQuery,
  sendPaySuccess
} from "../../service/api/index";
import ContentCart from "../contentCart/ContentCart"
import {setLocalStorage,delLocalStorage} from '../../config/globel.js'
export default {
  name: "myOrder",
  props:{
    address_id:{
      type:String
    }
  },
  components:{
    ContentCart
  },
 
  data() {
    return {
      chosenContactId: null,
      name: "",
      tel: "",
      show: false,
      minDate: new Date().getTime(),
      maxDate: new Date(2025, 10, 1).getTime(),
      currentDate: new Date().getTime(),
      // arriveDate: "请选择收货时间",
      arriveTime: "请选择收货时间",
      notice: "",
      isPay: false,
      payAdd: ""
    };
  },
  mounted() {
     
  },
  methods: {
    ...mapMutations([
      "CLEAR_GOODS"
    ]),
    xx(){
      console.log("123");
    },
    getDetail() {
      // console.log("111")
      Pubsub.publish("showDetail")
    },
    chooseTime() {
      this.show = true;
    },
    confirm(val) {
      
      console.log(val);
      let date=new Date(val.mpEvent.detail);
      const year = date.getFullYear();
      const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      const day = date.getDate() < 10 ? '0'+ (date.getDate()) : date.getDate();
      const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      const minutes = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes();
      this.arriveTime = moment(date).format("YYYY-MM-DD HH:mm");
      // this.arriveTime =year+"-"+month+"-"+day+" "+hours+":"+minutes;
      // console.log(this.arriveTime);
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    onClickLeft() {
      Taro.navigateTo({
        url:"../index/index"
      })
      setLocalStorage("active",2);
    },
    // 添加联系人
    add() {
      Pubsub.publish("address");
    },
    address(token) {},
    async onSubmit() {
      // console.log("onSubmit");
      // 0. 数据验证
      if (!this.address_id) {
        Toast({
          message: "请选择收货地址",
          duration: 500
        });
        return;
      }else if(this.arriveTime==="请选择收货时间") {
        Toast({
          message: "请选择送达时间",
          duration: 500
        });
        return;
      }else if (!this.notice) {
        Toast({
          message: "请添加备注",
          duration: 500
        });
        return;
      }
      
      //1.查询已选中商品
      let goodResult = await getSelectedGoods(this.userInfo.token);
      console.log(goodResult);
      if (goodResult.success_code === 200) {
        //2.创建订单
        let createResult = await createOrder({
          user_id: this.userInfo.token,
          address_id: this.address_id,
          arrive_time: this.arriveTime,
          cart_shop: goodResult.data,
          notice: this.notice,
          shop_price: this.totalPrice,
          dis_price: this.sendMoney
        });

        console.log(createResult);
        if (createResult.success_code === 200) {
          //3.删除已被创建订单的商品
          let delResult = await delOrderGoods(createResult.data.user_id);
          console.log(delResult);
          if (delResult.success_code === 200) {
            // delLocalStorage("shopCart");
            // this.CLEAR_GOODS();
            let payQueryRes=await setPayQuery(this.userInfo.token,createResult.data.order_id);
            console.log(payQueryRes);
            if(payQueryRes.success_code=="200"){
              //订单扫码成功，查询是否支付成功
              let getQueryRes = await getQuery(this.userInfo.token,createResult.data.order_id);
              console.log(getQueryRes);
              if(getQueryRes.message=="支付成功"){
                let sendSuccessResult = await sendPaySuccess(
                  this.userInfo.token,
                  createResult.data.order_id
                );
                console.log(sendSuccessResult);
                if (sendSuccessResult.success_code === 200) {
                  // 3.3.7 跳转到我的
                  Taro.navigateTo({
                    url:"../index/index"
                  })
                  setLocalStorage("active",3);
                  }
              }
            }
            //创建订单,传送微信服务器，获取二维码信息
            // let getOrderCard = await createOrderCard(createResult.data.order_id,1);
            // console.log(getOrderCard);
            // if (getOrderCard.code_url) {
            //   this.isPay = true;
            //   this.payAdd = getOrderCard.code_url;
            //   drawQrcode({
            //     width: 150,
            //     height: 150,
            //     canvasId: 'myQrcode',
            //     text: this.payAdd
            //   })
            //   console.log("123");

          }
        }
      }
    }

  },
  computed: {
    ...mapState(["shopCart", "userInfo"]),
    ...mapGetters(["totalPrice", "sendMoney", "sumMoney"]),
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },
    totalNum() {
      let num = 0;
      Object.values(this.shopCart).forEach((good, index) => {
        if (good.checked) {
          num++;
        }
      });
      return num;
    },
    threeGoods() {
      let arr = [];
      Object.values(this.shopCart).forEach((good, index) => {
        if (good.checked) {
          arr.push(good);
        }
      });
      return arr.slice(0, 3);
    }
  },
  // filters: {
  //   timeFormat(val, format1 = "YYYY-MM DD-hh") {
  //     return moment(val).format(format1);
  //   }
  // }
}
</script>

<style>
#myNavBar10 {
  color: black;
  text-align: center;
  height: 40PX;
   background: #f5f5f5; 
  padding-top: 20PX;
  line-height:32PX;

}
#myOrder {
  width: 100%;
  height: 1200px;
  background-color: #f5f5f5;
}

.van-cell-group{
  margin-top:10px ;
}


</style>