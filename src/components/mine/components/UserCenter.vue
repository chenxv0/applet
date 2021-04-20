<template>
    <view id="userCenter">
        <view id="myNavBar5">
            <van-nav-bar  :safe-area-inset-top="false" title="个人中心" leftArrow=true leftText="返回"   @clickleft="onClickLeft">
            </van-nav-bar>
        </view>

        <view class="logout">
            <button @tap="logOut">退出登录</button>
        </view>
    </view>
</template>

<script>
    import {exitLogin} from './../../../service/api/index'
    import {mapState,mapMutations} from 'vuex'
    import Pubsub from 'pubsub-js'
    import Taro from "@tarojs/taro"
    export default {
        name: "UserCenter",
        computed:{
            ...mapState(['userInfo'])
        },
        methods:{
            ...mapMutations(['DEL_USERINFO']),
            onClickLeft(e){
               Pubsub.publish("mine");
            },
            async logOut(){
                // console.log(this.userInfo);
                let result=await exitLogin();
                console.log(result);
                if(result.success_code===200){
                    this.DEL_USERINFO();
                    Taro.navigateTo({
                        url:"../index/index"
                    })
                }
            }


        }
    }
</script>

<style>
    /* #userCenter{
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right:0;
        background-color: #f5f5f5;
        z-index: 2;
    } */
    #myNavBar5{
        color: black;
        text-align: center;
        height: 40PX;
        background: #f5f5f5; 
        padding-top: 20PX;
        line-height:32PX;

    }
    .logout{
        margin-top: 4rem;
        height: 2.5rem;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logout button{
        background-color: #fff;
    }
</style>