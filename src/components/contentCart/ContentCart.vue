
<template>
    <view>
        <view class="van-contact-card">
            <view class="van-icon-add-square">
                <view v-if="address.name" class="addressContent">
                    <view>姓名：{{address.name}}</view>
                    <view>电话：{{address.tel}}</view>
                </view>
                <view v-else>请选择收货地址</view>
            </view>
        </view>    
    </view>    
</template>
<script>
import Pubsub from "pubsub-js"
export default {
    name:"ContentCart",
    data(){
        return {
            address:{}
        }
    },
    mounted(){
        Pubsub.unsubscribe("sendAdd"),
        Pubsub.subscribe("sendAdd",(msg,token)=>{
            if(msg==="sendAdd"){
                this.address=token;
                console.log(this.address);
            }
        })
    }
}
</script>
<style>
    .van-contact-card{
        background:white;  
        padding:10px;
        margin-top:5px;
    }   



    .van-icon-add-square::before {
        position:absolute;
        left:10px;
        top:80px;
        font: 45px/50px 'vant-icon';
        content: '\F001'; 
        color: #1989fa;
 
    }

    .van-icon-add-square{
        width:100%;
        height:50px;
        color: #323233;
        margin-left:55px;
        line-height:50px;
    }
 
    .van-icon-add-square::after {
        position:absolute;
        right:25px;
        top:81px;
        font: 25px/50px 'vant-icon';
        content: '\F00A'; 
        color: #969799;
    } 
    .van-contact-card::before {
        position: absolute;
        right: 0;
        top: 142px;
        left: 0;
        height: 2px;
        background: repeating-linear-gradient(
    -45deg
    , #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
        background-size: 80px;
        content: '';
    }
    .addressContent{
        position:relative;
        top:50%;
        transform:translateY(-50%);
        line-height:55px;
    }
</style>