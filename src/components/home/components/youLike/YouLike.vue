<template>
    <view class="wrapper_like">
        <view class="titleWrapper_like">
            <view class="middleLine_like"></view>
            <view class="title_like">猜你喜欢</view>
        </view>
        <view></view>
        <YouLikeItem :youLikeItems="youLikeItems"></YouLikeItem>
    </view>
</template>

<script>
    import YouLikeItem from './YouLikeItem'
    export default {
        name: "YouLike",
        components:{
            YouLikeItem
        },
        props:{
            youLikeItems:Array
        }
    }
</script>

<style>
    .wrapper_like {
        margin-top: 0.625rem;
    }

    .titleWrapper_like {
        position: relative;
        padding: 0 0.625rem;
        height: 2.1875rem;
        text-align: center; }

    .middleLine_like {
        padding-top: 1.09375rem;
        border-bottom: solid 1px #D8D8D8;
    }

    .title_like {
        position: relative;
        display: inline-block;
        top: -1.09375rem;
        padding: 0 1.25rem;
        line-height: 2.1875rem;
        font-size: 1rem;
        background: #F5F5F5;
    }
</style>