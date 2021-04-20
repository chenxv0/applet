<template>
  <view>
    <view id="myNavBar_add">
          <van-nav-bar  :safe-area-inset-top="false" title="我的地址"  leftArrow=true @onclickleft="onClickLeft">
          </van-nav-bar>
    </view>
    <view class="content_address">
        <view class="address_item" v-for="(item,index) in list" :key="index">
          <view @tap="chooseAddress(index)">
            <view class="address_detail" :class="{isChecked_address:item.isDefault}">
              <view class="address_detail_content1">{{item.name}} {{item.tel}} </view>
              <view class="address_detail_content2">{{item.address}}</view>
            </view>
          </view>
          <view class="address_detail_after" @tap="editAddress(index)"></view>
        </view>
    </view>
    <view class='myAddressList'>
      <button class="add_button" @tap="addAddress">新增地址</button>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import Pubsub from 'pubsub-js'
import {getAddress} from "../../service/api/index";
import {mapState} from 'vuex';
export default {
  name: "address",
  data(){
    return {
      list:[]
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{
    async init_getAddress(){
                let result=await getAddress(this.userInfo.token);
                // console.log(result);
                 // id: '1',
                 // name: '张三',
                 // tel: '13000000000',
                 // address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                if(result.success_code===200){
                    this.list=[];
                    result.data.forEach((address,index)=>{
                        let defaultTag;
                        if (address.address_tag){
                          defaultTag=true;
                        }else{
                          defaultTag=false;
                        }
                        let arr={
                            id: String(index + 1),
                            name: address.address_name,
                            tel: address.address_phone,
                            address: address.address_area +" "+address.address_area_detail,
                            address_id: address._id,
                            user_id: address.user_id,
                            isDefault:defaultTag
                        }

                            // {id:address._id,name:address.address_name,tel:address.address_phone,address:address.address_area};
                        this.list.push(arr);
                    });
                    // console.log(this.list);
                }
    },
    chooseAddress(index){
      console.log(this.list[index]);
      Pubsub.publish("chooseAdd",this.list[index]);
    },
    editAddress(index){
      Pubsub.publish("editAdd",this.list[index].address_id);
    },
    addAddress(){
      Pubsub.publish('addAdd');
    },
    onClickLeft(){
      Taro.navigateTo({
        url:"../order/order"
      })
    }
  },
  mounted(){
    // console.log(Taro.getMenuButtonBoundingClientRect());
    this.init_getAddress();
    // Pubsub.subscribe("changeAdd",(msg,token)=>{
    //           if(msg==="changeAdd"){
    //               // console.log(this.userInfo);
    //               this.init_getAddress();
    //           }
    // })
  }
}
</script>
<style>
  #myNavBar_add {
    color: black;
    text-align: center;
    height: 40PX;
    background: #f5f5f5; 
    padding-top: 20PX;
    position: fixed;
    top:0;
    z-index:2;
    width:100%;
  }
  .myAddressList{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    box-sizing: border-box;
    width: 100%;
    padding: 15px 30px;
    background-color: #fff;
    
  }
  .add_button{
    margin:0 auto;
    height: 80px;
    border-radius: 999px;
    display: block;
    width: 80%;
    font-size: 40px;
    line-height:80px;
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
  }
  .content_address{
    position:absolute;
    top:60PX;
    bottom:90px;
    box-sizing:border-box;
    width:100%;
    overflow:hidden;
    overflow-y: auto;
    padding: 12px 12px 80px;
    background:#f5f5f5;
    padding:40px 30px;
  }
  .address_item{
    /* width:100%; */
    padding: 40px;
    background-color: #fff;
    border-radius: 20px;
    position:relative;  
    box-sizing:border-box;
  }
  .address_item:not(:last-child) {
    margin-bottom: 30px;
  }
  .address_detail::before{
    position:absolute;
    left:20px;
    top: 50%; 
    transform: translateY(-50%);
    /* font: 25px/35px 'vant-icon'; */
    content:''; 
    width:35px;
    height:35px;
    border:1px solid gray;
    border-radius:100%;;
  }
  .address_detail.isChecked_address::before{
    position:absolute;
    left:20px;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
    font: 25px/35px 'vant-icon';
    content:'\F0C8'; 
    color:white;
    width:35px;
    height:35px;
    background:red;
    border-radius:100%;
    text-align:center;
    border:1px solid red;
  }

   .address_detail_after::after{
    position:absolute;
    right:30px;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
    font: 40px/40px 'vant-icon';
    content:'\F04D'; 
    color:gray;
  }

  .address_detail{
    margin-left:70px;
    background:white;
    width:80%;
    text-align: left;
  }

  .address_detail_content1{
    padding-bottom:15px;
    font-size: 38px;
  }
  .address_detail_content2{
    font-size: 31px;
  }
</style>