<template>
    <view id="mineOrder">
        <view id="myNavBar6">
            <van-nav-bar  :safe-area-inset-top="false" title="我的订单" leftArrow=true leftText="返回"   @onclickleft="onClickLeft">
            </van-nav-bar>
        </view>
        <van-tabs :active="active"  @change="onChange">
            <van-tab title="全部" name="a">
                <OrderDetails v-for="(order) in orderAll" :order="order" :key="order._id"></OrderDetails>
            </van-tab>
            <van-tab title="待支付" name="b">
                <OrderDetails v-for="(order) in allWillOrderArr" :order="order" :key="order._id" />
            </van-tab>
            <van-tab title="已支付" name="c">
                <OrderDetails v-for="(order) in allPayOrderArr" :order="order" :key="order._id" />
            </van-tab>
        </van-tabs>
        <!-- <van-tabs v-model="activeName" style="margin-top: 0.7rem"
                  color="75a342" title-active-color="75a342"	@change="dealWithTabClick">
            <van-tab title="全部" name="a">
                <OrderDetails v-for="(order) in orderAll" :order="order" :key="order._id" />
            </van-tab>
            <van-tab title="待支付" name="b">
                <OrderDetails v-for="(order) in allWillOrderArr" :order="order" :key="order._id" />
            </van-tab>
            <van-tab title="已支付" name="c">
                <OrderDetails v-for="(order) in allPayOrderArr" :order="order" :key="order._id" />
            </van-tab>
        </van-tabs> -->
    </view>
</template>

<script>
    import {getOrderData} from './../../../service/api/index'
    import {mapState,mapMutations} from 'vuex'
    import Pubsub from 'pubsub-js'
    import OrderDetails from './children/OrderDetails'
    export default {
        name: "MineOrder",
        data(){
            return {
                active:"a",
                orderAll: [],
                allWillOrderArr: [],
                allPayOrderArr: []
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        mounted(){
            this.init_getOrderData();
        },
        methods:{  
            onClickLeft(){
                Pubsub.publish("mine");
                // console.log("1232");
            },
            async init_getOrderData() {
                let result = await getOrderData(this.userInfo.token);
                console.log(result);
                if (result.success_code === 200) {
                    this.orderAll = result.data;
                }
            },
            async onChange(e){
                console.log(e.detail.name);
                let name=e.detail.name;
                if (name === "a") {
                    this.orderAll = await this.getOrder();
                } else if (name === "b") {
                    this.allWillOrderArr = await this.getOrder("will");
                    console.log(this.allWillOrderArr);
                } else if (name === "c") {
                    this.allPayOrderArr = await this.getOrder("pay");
                }
            },
            async getOrder(state) {
                let result = await getOrderData(this.userInfo.token, state);
                console.log(result);
                if (result.success_code === 200) {
                    return result.data;
                }
            }
        },
        components:{
            OrderDetails
        }
    }
</script>

<style>
    #myNavBar6{
        color: black;
        text-align: center;
        height: 40PX;
        background: #f5f5f5; 
        padding-top: 20PX;
        line-height:32PX;

    }
    .van-sticky{
        margin-top:5px;
    }
</style>