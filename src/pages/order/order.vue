<template>
    <view id="order">
        <view v-if="show==='myOrder'">
          <MyOrder :address_id="address_id"></MyOrder>
        </view>
        <view v-else-if="show==='orderDetail'">
          <OrderDetail></OrderDetail>
        </view>
        <view v-else-if="show==='address'">
          <Address></Address>
        </view>
        <view v-else-if="show==='addAdd'">
          <addAddress ></addAddress>
        </view>
        <view v-else-if="show==='editAdd'">
          <EditAddress :address_id="address_id"></EditAddress>
        </view>
    </view>
</template>

<script>
import MyOrder from "../../components/order/myOrder";
import Address from "../../components/order/address";
import OrderDetail from "../../components/order/OrderDetail";
import EditAddress from "../../components/order/components/editAddress";
import AddAddress from "../../components/order/components/addAddress";
import Pubsub from 'pubsub-js'
export default {
  name: "order",
  data(){
    return {
      show:"myOrder",
      address_id:""
    }
  },
  components:{
    MyOrder,
    OrderDetail,
    Address,
    EditAddress,
    AddAddress
  },
  mounted(){
    Pubsub.subscribe("address",(msg,token)=>{
      if(msg==="address"){
        this.show="address";
      }
    })
    Pubsub.subscribe("showDetail",(msg,token)=>{
      if(msg==="showDetail"){
        this.show="orderDetail";
      }
    })
    Pubsub.subscribe("chooseAdd",(msg,token)=>{
      // console.log(msg,token);
      if(msg==="chooseAdd"){
        this.show="myOrder";
        console.log(token);
        this.address_id=token.address_id;
        Pubsub.publish("sendAdd",{
          name:token.name,tel:token.tel
        });
      }
    })
    Pubsub.subscribe("editAdd",(msg,token)=>{
      console.log(msg,token);
      if(msg==="editAdd"){
        this.show="editAdd";
        this.address_id=token;
      }
    })
    Pubsub.subscribe("addAdd",(msg,token)=>{
      // console.log(msg,token);
      if(msg==="addAdd"){
        this.show="addAdd";
        // this.address_id=token;
      }
    })
  }
}
</script>

<style>

</style>