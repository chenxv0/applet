<template>
  <view class="editaddress">
    <view id="myNavBar_editadd">
          <van-nav-bar  :safe-area-inset-top="false" title="修改地址"  leftArrow=true>
          </van-nav-bar>
    </view>
    <view class="van-address-edit__fields1">
      <view class="van-cell1">
        <view class="van-cell__title1">姓名</view>
        <input type="text" placeholder="收货人姓名"  v-model="name"/>
      </view>
      <view class="van-cell1">
        <view class="van-cell__title1">电话</view>
        <input type="text" v-model="tel" placeholder="收货人手机号"/>
      </view>
      <view class="van-cell1" @tap="changeShow">
        <view class="van-cell__title1">地区</view>
        <input type="text" :placeholder="myAddress" />
      </view>
      <view class="van-cell1">
        <view class="van-cell__title1">详细地址</view>
        <input type="text" placeholder="街道门牌、楼层房间号等信息" v-model="addressDetail"/>
      </view>
      <view class="van-cell1">
        <view class="van-cell__title1">邮政编码</view>
        <input type="text" placeholder="邮政编码" v-model="postalCode"/>
      </view>
    </view>

    <view class="van-address-edit__fields2">
      <view class="van-cell2">
        <view class="van-cell__title2">默认设置收货地址</view>
        <van-switch  :checked="checked" @change="onChange"/>
      </view>
    </view>

    <view class='myAddressList1'>
      <button class="add_button1" @tap="onSave">保存</button>
    </view>

    <view class='myAddressList2' >
      <button class="add_button1" @tap="onDel">删除</button>
    </view>

    <van-popup
      :show="show"
      position="bottom"
      custom-style="height: 40%;"
      bind:close="onClose"
    >
     <van-area :area-list="areaList"  @confirm="getAddress"   @cancel="changeShow"/>
    </van-popup>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import { getCurrentInstance } from '@tarojs/taro';
import areaList1 from './area.js';
import {addAddress,getEditAddress,sendEditAddress,delAddress} from "./../../../../service/api/index";
import {mapState} from 'vuex';
import Pubsub from 'pubsub-js';
export default {
  name: "editaddress",
  computed:{
    ...mapState(['userInfo']),
    myAddress(){
      let address=this.province+"/"+this.city+"/"+this.county;
      if(address=="//"){
        return "选择省/市/区";
      }
      return address;
    }
  },
  data(){
    return {
      checked:false,
      name:"",
      tel:"",
      country:"",
      province:"",
      city:"",
      county:"",
      areaCode:"",
      postalCode:"",
      addressDetail:"",
      isDefault:"",
      show:false,
      areaList:areaList1
    }
  },
  mounted(){
    this.init_getEditAddress();
  },
  methods:{
    changeShow(){
      this.show=!this.show;    
    },
    getAddress(e){
      console.log(e.detail);
      this.province=(e.detail.values)[0].name;
      this.city=(e.detail.values)[1].name;
      this.county=(e.detail.values)[2].name;
      this.areaCode=(e.detail.values)[2].code;
      this.show=false;
    },
    onChange(e){
      this.checked=e.detail;
    },
    async onSave(){
      let result=await sendEditAddress(
        {   address_id:getCurrentInstance().router.params.address_id,
            user_id:this.userInfo.token, address_name:this.name, address_phone:this.tel,
            address_area:this.province+this.city+this.county,
            address_area_detail:this.addressDetail, address_post_code:this.postalCode,
            address_tag:this.checked,
            province:this.province, city:this.city, county:this.county, areaCode:this.areaCode,
    
        });
      console.log(result);
      if(result.success_code===200){
        Pubsub.publish("changeAdd");
        Taro.navigateTo({
          url: '../address/address',
        })
      }
  
      
    },
    async init_getEditAddress(){
      // console.log(getCurrentInstance().router.params.address_id);   
      let result=await getEditAddress({user_id:this.userInfo.token, address_id:getCurrentInstance().router.params.address_id});
      console.log(result);
      let defaultTag;
      if (result.data.address_tag){
        defaultTag=true;
      }else{
        defaultTag=false;
      }
      console.log(defaultTag);
      this.name=result.data.address_name ,
      this.tel=result.data.address_phone,
      this.province=result.data.province,
      this.city=result.data.city,
      this.county=result.data.county,
      this.areaCode=result.data.areaCode ,
      this.postalCode=result.data.address_post_code ,
      this.addressDetail=result.data.address_area_detail,
      this.checked=defaultTag
    },
    async onDel(){
      let result=await delAddress(getCurrentInstance().router.params.address_id);
        console.log(result);
        if(result.success_code===200){
            // Pubsub.publish("changeAdd");
            Taro.navigateTo({
              url: '../address/address',
            })
      }
    }
  }
}
</script>
<style >
  #myNavBar_editadd {
    color: black;
    text-align: center;
    height: 41PX;
    background: #f5f5f5; 
    padding-top: 20PX;
    border-bottom:1px solid #f5f5f5;
    /* line-height:32PX; */
  }
 
 .van-address-edit__fields1{
   overflow: hidden;
   border-radius: 12px;
   margin:15px auto;
   width:90%;
   height: 233px;
   background: #f5f5f5;
 }
 .van-cell1{
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    height:44px;
 }

 .van-cell1 input{
   width:200px;
 }
 .van-cell1::after{
    position: absolute;
    box-sizing: border-box;
    content: '';
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid gray;
    transform: scaleY(.25);
 }

 .van-cell__title1{
    width:60px;
    margin-right: 10px;
    color: #646566;
    text-align: left;
    word-wrap: break-word;
    /* background:red; */
 }

 .van-address-edit__fields2{
   overflow: hidden;
   border-radius: 12px;
   margin:20px auto;
   width:90%;
   background: #f5f5f5;
 }
 .van-cell2{
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    height:44px;
 }
 .van-cell2 van-switch{
    position: absolute;
    top: 60%;
    right:8%;
    transform: translateY(-50%);
 }

  .myAddressList1{
    position: fixed;
    bottom:300px;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 15px 30px;
  }

  .myAddressList2{
    position: fixed;
    bottom:180px;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 15px 30px;
  }

  
  .add_button1{
    margin:0 auto;
    height: 80px;
    border-radius: 999px;
    display: block;
    width: 90%;
    font-size: 40px;
    line-height:80px;
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
  }

  .myAddressList2 .add_button1{
    border: 1px solid #f5f5f5;
    background:green;
  }
</style>