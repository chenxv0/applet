<template>
    <view class="wrapper">
        <view class="locationWrapper">
           
            <image class="icon iconLocation" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1ODA1ODc4ODY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYwNzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDExNC41Yy0xNjUuNyAwLTMwMCAxMzQuMy0zMDAgMzAwIDAgMjI3LjkgMjA2LjcgNDI5LjkgMjc3IDQ4OSAxMy41IDExLjMgMzMgMTEuNyA0Ni45IDAuOUM2MDYuOCA4NDkgODEyIDY1OC45IDgxMiA0MTQuNWMwLTE2NS43LTEzNC4zLTMwMC0zMDAtMzAweiBtMCA0NTIuNWMtODIuOCAwLTE1MC02Ny4yLTE1MC0xNTBzNjcuMi0xNTAgMTUwLTE1MCAxNTAgNjcuMiAxNTAgMTUwLTY3LjIgMTUwLTE1MCAxNTB6IiBmaWxsPSIjYmZiZmJmIiBwLWlkPSI2MDc1Ij48L3BhdGg+PC9zdmc+"/>  
            <view class="address">获取地址信息</view>
            <image  class="icon iconArrow" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1ODA1OTQ2NzM4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY5MTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODE0LjU5MiAzNDguMjExMmwtMjYxLjczNDQgMzQ2LjYyNGE1MS4yIDUxLjIgMCAwIDEtODEuNzE1MiAwTDIwOS40MDggMzQ4LjI2MjRBMjUuNiAyNS42IDAgMCAxIDIyOS44MzY4IDMwNy4ySDc5NC4xMTJhMjUuNiAyNS42IDAgMCAxIDIwLjQ4IDQxLjAxMTJ6IiBwLWlkPSI2OTE4IiBmaWxsPSIjYmZiZmJmIj48L3BhdGg+PC9zdmc+"/>
        </view>
        <view class="searchWrapper">
            <view class="searchContent">
                <!-- <view class="iconSearchWrapper">
                    <svg viewBox="0 0 32 32" class="icon iconSearch">
                        <path fill="#999" fill-rule="evenodd"
                              d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
                    </svg>
                </view> -->
                <view class="searchPrompt">输入商品名称</view>
            </view>
        </view>
    </view>
</template>

<script>
// import { Toast } from "vant";
export default {
  name: "Header",
  data() {
    return {
      city: "",
      lat: 0,
      lng: 0
    };
  },
  mounted() {
    // this.getArea();
  },
  methods: {
    // getArea(){
    //     var geolocation = new qq.maps.Geolocation
    //     ("2JUBZ-YSXCQ-WKA54-GTJUO-6IP6H-K6F6K", "myapp");
    //     geolocation.getLocation(this.sucCallback, this.errCallback);
    // },
    // sucCallback(val){
    //     // console.log(val);
    //     this.city=val.city;
    //     this.lat=val.lat;
    //     this.lng=val.lng;
    // },
    // errCallback(){
    //     Toast({
    //         message:"获取地址失败",
    //         duration:400
    //     });
    //     this.getArea();
    // }
  }
};
</script>

<style >
.wrapper {
  position: relative;
  left: 0;
  top: 60PX;
  height: 3.125rem;
  line-height: 3.125rem;
  width: 100%;
  box-sizing: border-box;
  background: white;
  border-bottom: solid 1px #eeeeee;
  border-top: solid 1px #eeeeee;
}

.iconLocation {
  position: absolute;
  left: 0.3rem;
  top: 1.0625rem;
  width: 1.875rem;
  height: 1rem;
  vertical-align: middle;
}

.locationWrapper {
  float: left;
  height: 3.125rem;
  width: 40%;
  white-space: nowrap;
  opacity: 1;
}

.locationWrapper .address {
  padding-left: 1.475rem;
  display: inline-block;
  font-size: 0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 80%;
  vertical-align: middle;
}

.locationWrapper .iconArrow {
  vertical-align: middle;
  margin-left: -1.075rem;
}

.locationWrapper.wheel {
  opacity: 0;
  -webkit-transition: opacity 1.2s;
  transition: opacity 1.2s;
}

.searchWrapper {
  position: absolute;
  top: 0.625rem;
  right: 2%;
  line-height: 3.125rem;
  text-align: right;
  width: 50%;
  vertical-align: middle;
}

.searchWrapper.wheel {
  width: 96%;
  -webkit-transition: width 1s ease 0.2s;
  transition: width 1s ease 0.2s;
}

.searchContent {
  float: right;
  border-radius: 3.125rem;
  width: 100%;
  height: 1.875rem;
  line-height: 1.875rem;
  text-align: center;
  background: #f2f2f2;
}

.iconSearchWrapper {
  display: inline-block;
  width: 1.25rem;
  height: 100%;
}

.iconSearch {
  margin-top: 0.3125rem;
  width: 1.25rem;
  height: 1.25rem;
}

.searchPrompt {
  display: inline-block;
  vertical-align: top;
  margin-left: 0.25rem;
  text-align: center;
  font-size: 0.875rem;
  color: #999999;
}

@media (min-width: 320px) {
  .searchWrapper {
    width: 55%;
  }
}

@media (min-width: 375px) {
  .searchWrapper {
    width: 57%;
  }
}

@media (min-width: 414px) {
  .searchWrapper {
    width: 62%;
  }
}

.icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}
</style>