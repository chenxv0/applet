<template>
    <view class="wrapper_nav">
        <view class="itemWrapper_nav" v-for="(good) in navImg" :key="good.public_id">
            <view class="imageWrapper_nav">
                <image class="image_nav" :src="good.icon_url" :alt="good.public_name"/>
            </view>
            <view class="titleWrapper_nav">
                <view class="title_nav">{{good.name}}</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
  name: "Nav",
  props: {
    navImg: Array
  }
};
</script>

<style>
.wrapper_nav {
  padding-top: 0.9375rem;
  background: #fff;
  padding-bottom: 0.9375rem;
}

.itemWrapper_nav {
  display: inline-block;
  padding-top: 0.3125rem;
  width: 20%;
}

.imageWrapper_nav {
  padding-bottom: 58.823%;
  height: 0;
  overflow: hidden;
  text-align: center;
}

.image_nav {
  width:58.823%; 
  height:100px;
  display: inline-block;
}

.titleWrapper_nav {
  padding: 0.4375rem 0.3125rem 0.325rem 0.3125rem;
}

.title_nav {
  font-size: 0.75rem;
  color: #555555;
  text-align: center;
  /* overflow: hidden; */
  white-space: nowrap;
  text-overflow: ellipsis;
}  
</style>