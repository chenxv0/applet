<template>
  <view class="mine">
    <view v-if="showWhat=='mine'">
      <view id="myNavBar4">
        <van-nav-bar  :safe-area-inset-top="false" title="个人中心" >
        </van-nav-bar>
      </view>
      <!--用户信息-->
      <view style="background-color: #3bba63;color: #fff" @tap="logout"> 
        <view class="personMsg">
            <image :src="userInfo.icon_url" alt="" style="width: 4rem;height:4rem;border-radius: 50%;border: 3px solid yellow"/>
            <view class="personInfo">
                <view>用户：{{userInfo.real_name}}</view>
                <view>手机号：{{userInfo.phone}}</view>
            </view>
        </view>
      </view>
      <!--订单信息-->
      <van-cell-group  @tap="showOrderDetail">
          <van-cell icon="label" title="我的订单" value="查看全部订单" is-link=true></van-cell>
          <van-grid>
              <van-grid-item
                        v-for="(order,index) in orderData"
                        :key="index"
                        :icon="order.icon"
                        :text="order.title"
              />
          </van-grid>
      </van-cell-group>
      <!--优惠券、收货地址-->
      <van-cell-group style="margin-top: 0.6rem">
        <van-cell icon="gold-coin" title="我的优惠券" value="1张" is-link=true></van-cell>
        <van-cell icon="map-marked" title="我的收货地址"  is-link=true></van-cell>
      </van-cell-group>
      <!--联系客服、意见反馈-->
      <van-cell-group style="margin-top: 0.6rem">
          <van-cell icon="phone-circle" title="联系客服" value="07:00-22:00" is-link=true></van-cell>
          <van-cell icon="comment" title="意见反馈"  is-link=true></van-cell>
      </van-cell-group>
       <van-cell-group style="margin-top: 0.6rem">
            <van-cell icon="bookmark" class="myIcon" title="叮咚买菜" value="下载APP体验更佳" is-link/>
        </van-cell-group>
    </view>
    <view v-else-if="showWhat=='userCenter'">
      <UserCenter></UserCenter>
    </view>
    <view v-else> 
      <MineOrder></MineOrder>
    </view>
  </view>
  
</template>
<script>
import {mapState} from "vuex"
import Taro from "@tarojs/taro";
import UserCenter from './components/UserCenter';
import MineOrder from './components/MineOrder'
import Pubsub from 'pubsub-js'
export default {
  name: "Mine",
  data(){
    return {
      showWhat:'mine',
      orderData: [
          {icon: 'cart-circle-o', title: '待支付'},
          {icon: 'gift-o', title: '待收货'},
          {icon: 'smile-comment-o', title: '待评价'},
          {icon: 'cash-back-record', title: '售后/退款'}
      ]
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  components:{
    UserCenter,
    MineOrder
  },
  mounted() {
    console.log(this.userInfo);
    Pubsub.subscribe("mine",()=>{
      this.showWhat="mine"
    })
  },
  methods: {
    logout(){
      this.showWhat="userCenter";
    },
    showOrderDetail(){
      this.showWhat="showOrderDetail";
    },
    
  }
};
</script>
<style>
.mine{
  width: 100%;
  height: 1200px;
  background-color: #f5f5f5;
}
#myNavBar4{
  color: black;
  text-align: center;
  height: 40PX;
   background: #f5f5f5; 
  padding-top: 20PX;
  line-height:32PX;

}
.personMsg{
        display:flex;
        flex-direction: row;
        align-content: center;
        background:#3bba63;
        text-align:left;
        padding:40px;
}
.personInfo{
        display:flex;
        flex-direction: column;
        margin-left:0.8rem;
        justify-content: center;
}

.van-cell__left-icon-wrap{
      color: orangered;
  }
</style>