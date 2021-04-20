<template>
    <view>
    <view class="productWrapper_productItem" v-for="(good,index) in products"  :key="index">
        <view class="imageWrapper_productItem">
            <view class="LazyLoad_productItem is-visible">
                <image  mode="aspectFit" class="image_productItem" :src="good.small_image" /></view>
        </view>
        <view class="infoWrapper_productItem">
            <view class="nameWrapper_productItem">
                <view class="name_productItem">
                    <view class="nameTag_productItem nameText_productItem">{{good.name}}</view>
                </view>
                <view class="spec_productItem">
                    {{good.spec}}
                </view>
                <view class="tagsWrapper_productItem">
                    <view class="H1B9Rvu_productItem"></view>
                </view>
            </view>
            <view class="priceWrapper_productItem">
                <view class="price_productItem">
                    {{good.price}}
                </view>
                <view class="iconCartWrapper_productItem" @tap="order(good)">
                    <image class="shopCart_icon2" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1OTc0ODk0NjEwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1NzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDA0LjQ3MzYgNjAxLjZhMzguMjcyIDM4LjI3MiAwIDAgMS00LjkxNTIgMTQuODkyOEwzNzEuMjA2NCA2NjUuNkg3ODAuOGEzOC40IDM4LjQgMCAwIDEgMCA3Ni44SDMwNy4yYTM4LjQgMzguNCAwIDAgMS0zOC4zNTUyLTQwLjMyNjQgMzguMjIwOCAzOC4yMjA4IDAgMCAxIDUuMDc1Mi0yMS41NjhsNDYuNjQzMi04MC43ODcyLTcuMDkxMi0yNi40NTc2YTUxLjI1NzYgNTEuMjU3NiAwIDAgMS0zLjYzNTItOS42MTI4bC02OC41NzYtMjU2YTUxLjQ0MzIgNTEuNDQzMiAwIDAgMS0xLjY1MTItMTAuMDQ4bC0yOS42MTI4LTExMC41MDg4LTg5Ljk3MTItMjQuMTA4OGEzOC40IDM4LjQgMCAwIDEgMTkuODc4NC03NC4xNzZsMTExLjI3MDQgMjkuODExMmEzOC40IDM4LjQgMCAwIDEgMjcuNjczNiAyOS4zMTJjMC40MDMyIDEuMDk0NCAwLjc2MTYgMi4yMTQ0IDEuMDY4OCAzLjM2NjRMMzA0LjU0NCAyNDMuMmg1NTYuNzM2YTUxLjIgNTEuMiAwIDAgMSA0OS40NTkyIDY0LjQ0OGwtNjguNTc2IDI1NmE1MS4yIDUxLjIgMCAwIDEtNDkuNDUyOCAzNy45NTJINDA0LjQ3MzZ6TTM0NS42IDkyOGMtNDIuNDEyOCAwLTc2LjgtMzQuMzg3Mi03Ni44LTc2LjhzMzQuMzg3Mi03Ni44IDc2LjgtNzYuOCA3Ni44IDM0LjM4NzIgNzYuOCA3Ni44LTM0LjM4NzIgNzYuOC03Ni44IDc2Ljh6IG00MTYgMGMtNDIuNDEyOCAwLTc2LjgtMzQuMzg3Mi03Ni44LTc2LjhzMzQuMzg3Mi03Ni44IDc2LjgtNzYuOCA3Ni44IDM0LjM4NzIgNzYuOCA3Ni44LTM0LjM4NzIgNzYuOC03Ni44IDc2Ljh6IiBmaWxsPSIjZDgxZTA2IiBwLWlkPSIyNTcyIj48L3BhdGg+PC9zdmc+"/>

                </view>
            </view>
        </view>
    </view>
    </view>
</template>

<script>
import Pubsub from "pubsub-js";

export default {
  name: "ProductItem",
  props: {
    products: Array
  },
  methods: {
    order(good) {
      // alert(11);
      Pubsub.publish("orderGoods1", good);
    }
  }
};
</script>

<style>
.productWrapper_productItem {
  position: relative;
  padding: 0.8125rem 0;
  background: #fff;
}

.productWrapper_productItem + .productWrapper_productItem {
  border-top: solid 1px #eeeeee;
}

.imageWrapper_productItem {
  position: absolute;
  left: 0;
  top: 0.9375rem;
  width: 4.0625rem;
  height: 4.0625rem;
  overflow: hidden;
  border-radius: 4px;
}

.image_productItem {
  width: 160px;
  height: 150px;
  display: block;
}

.noticeGreen_productItem,
.noticeGray_productItem {
  position: absolute;
  height: 100%;
  text-align: center;
}

.noticeGreen_productItem {
  background: #76da96;
  color: #fff;
}

.noticeGray_productItem {
  background: rgba(255, 255, 255, 0.6);
}

.noticeGray_productItem view {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 80%;
  text-align: center;
  color: #fff;
  font-size: 0.75rem;
  height: 1.25rem;
  line-height: 1.25rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1.25rem;
}

.infoWrapper_productItem {
  position: relative;
  margin-left: 4.0625rem;
  padding: 0 0.625rem;
}

.nameWrapper_productItem {
  min-height: 2.1875rem;
}

.name_productItem {
  line-height: 1.25rem;
  word-break: break-all;
  font-size: 0.9375rem;
  color: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.name_productItem .nameTag_productItem {
  margin-right: 0.125rem;
  vertical-align: middle;
}
.name_productItem .nameText_productItem {
  vertical-align: middle;
}

.spec_productItem {
  min-height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  color: #999999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tagsWrapper_productItem {
  margin-top: 0.1875rem;
  max-height: 1.0625rem;
  line-height: 0.8125rem;
  overflow: hidden;
}

.H1B9Rvu_productItem {
  height: 1rem;
}

.tag_productItem + .tag_productItem {
  margin-left: 0.3125rem;
}

.priceWrapper_productItem {
  position: relative;
}

.price_productItem {
  display: inline-block;
  height: 1.875rem;
  line-height: 1.875rem;
  font-weight: bold;
  font-size: 0.75rem;
  color: #fe6263;
}

.originPrice_productItem {
  display: inline-block;
  margin-left: 0.3125rem;
  height: 1.875rem;
  line-height: 1.875rem;
  text-decoration: line-through;
  font-size: 0.6875rem;
  color: #b2b2b2;
}

.iconCartWrapper_productItem {
  position: absolute;
  top: 0;
  right: 0;
  width: 1.875rem;
}

.icon_productItem {
  fill: #999;
  width: 1rem;
  height: 1rem;
}

.shopCart_icon2 {
  position: absolute;
  top: -10px;
  right: 80px;
  width: 70px;
  height: 70px;
}
</style>