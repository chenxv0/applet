<template>
    <view id="orderDetail">
        <view id="myNavBar11">
          <van-nav-bar  :safe-area-inset-top="false" title="订单"  leftArrow=true  leftText="返回" @onclickleft="onClickLeft" >
          </van-nav-bar>
        </view>

        <van-cell-group>
            <van-cell title="商品" :value="`共${chooseGoods.length}件`"></van-cell>
            <van-card
                v-for="(good,index) in chooseGoods" :key="index"
                :num=good.num
                :price=good.price
                :title=good.name
                :thumb=good.small_image
            />
            <!-- <van-card
                    v-for="(good,index) in chooseGoods" :key="index"
                    :num=good.num
                    :price=good.price
                    :title=good.name
                    :thumb=good.small_image
            ></van-card> -->
        </van-cell-group>

    </view>
</template>

<script>
    import Pubsub from "pubsub-js" 
    import {mapState} from 'vuex'
    import Taro from "@tarojs/taro"
    export default {
        name: "OrderDetail",
        methods:{
            onClickLeft(){
                Taro.navigateTo({
                    url:"../order/order"
                })
            }
        },
        computed:{
            ...mapState(['shopCart']),
            chooseGoods(){
                let arr=[];
                Object.values(this.shopCart).forEach((good,index)=>{
                    if(good.checked){
                        arr.push(good);
                    }
                })
                return arr;
            }
        }
    }
</script>

<style >
    #myNavBar11 {
    color: black;
    text-align: center;
    height: 40PX;
    background: #f5f5f5; 
    padding-top: 20PX;
    line-height:32PX;
    }
    .van-cell-group{
        margin-top:5px ;
    }
    #orderDetail{
        /* position:fixed;
        top:0;
        bottom: 0;
        left: 0;
        right:0;
        z-index: 100; */
        background-color: #f5f5f5;
    }
    .van-card{
        margin-top:15px;
    }
</style>