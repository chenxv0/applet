<template>
  <view class="mySwiper">
    <swiper id="swiper"  
      indicatorColor='#999'
      indicatorActiveColor='#333'
      :current="current"
      :duration="duration"
      :interval="interval"
      :circular="isCircular"
      :indicatorDots="hasIndicatorDots"
      :autoplay="isAutoplay" @change="onChange">
      <!-- <swiper-item v-for="(item) in imgSwiper" :key="idx">
        <image :src="item" class="slide-image" />
      </swiper-item> -->
      <swiper-item v-for="(img) in imgSwiper" :key="img.public_id">
            <image :src="img.icon_url" :alt="img.public_name"/>
        </swiper-item>
    </swiper>
  </view>
</template>
<script>
export default {
  name: 'Sowing',
  props: {
    imgSwiper: Array
  },
  data() {
    return {
      current:0,
      duration:800,
      interval:3000,
      isCircular:true,
      isAutoplay:true,
      hasIndicatorDots: true,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180',
      ],
    }
  },
  methods:{
    	onChange(){
        // console.log("123")
      }
  }
}
</script>
<style>
  .mySwiper{
    margin-top:60PX;
  }
  #swiper {
    width: 100%;
    height: 13rem;
    background-color: white;
  }
  #swiper image {
    width: 100%;
    height: 100%;
  }
</style>