<template>
    <view class="flashWrapper_flashSale">
        <view class="titleWrapper_flashSale">
            <view class="title_flashSale">限时抢购</view>
            <view class="actionStateText_flashSale">07:00场</view>
            <view class="actionStateTextEnd_flashSale">已结束</view>
            <view class="more_flashSale">更多</view>
        </view>
        <view class="itemsWrapper_flashSale">
            <view class="wrapper_flashSale" data-index="3"  v-for="(good) in flashSales" :key="good.id">
                <view class="itemWrapper_flashSale" >
                    <view class="imageWrapper_flashSale">
                        <image mode="aspectFit" class="image_flashSale" :src="good.small_image" :alt="good.spec"/>
                    </view>
                    <view>
                        <view class="name_flashSale">{{good.product_name}}</view>
                        <view class="originPrice_flashSale">{{$filters.moneyFormate(good.origin_price)}}</view>
                        <view class="priceWrapper_flashSale" >
                            <view class="price_flashSale">{{$filters.moneyFormate(good.price)}}</view>
                            <image   class="shopCart_icon"   @tap="order(good)" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1OTc0ODk0NjEwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1NzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDA0LjQ3MzYgNjAxLjZhMzguMjcyIDM4LjI3MiAwIDAgMS00LjkxNTIgMTQuODkyOEwzNzEuMjA2NCA2NjUuNkg3ODAuOGEzOC40IDM4LjQgMCAwIDEgMCA3Ni44SDMwNy4yYTM4LjQgMzguNCAwIDAgMS0zOC4zNTUyLTQwLjMyNjQgMzguMjIwOCAzOC4yMjA4IDAgMCAxIDUuMDc1Mi0yMS41NjhsNDYuNjQzMi04MC43ODcyLTcuMDkxMi0yNi40NTc2YTUxLjI1NzYgNTEuMjU3NiAwIDAgMS0zLjYzNTItOS42MTI4bC02OC41NzYtMjU2YTUxLjQ0MzIgNTEuNDQzMiAwIDAgMS0xLjY1MTItMTAuMDQ4bC0yOS42MTI4LTExMC41MDg4LTg5Ljk3MTItMjQuMTA4OGEzOC40IDM4LjQgMCAwIDEgMTkuODc4NC03NC4xNzZsMTExLjI3MDQgMjkuODExMmEzOC40IDM4LjQgMCAwIDEgMjcuNjczNiAyOS4zMTJjMC40MDMyIDEuMDk0NCAwLjc2MTYgMi4yMTQ0IDEuMDY4OCAzLjM2NjRMMzA0LjU0NCAyNDMuMmg1NTYuNzM2YTUxLjIgNTEuMiAwIDAgMSA0OS40NTkyIDY0LjQ0OGwtNjguNTc2IDI1NmE1MS4yIDUxLjIgMCAwIDEtNDkuNDUyOCAzNy45NTJINDA0LjQ3MzZ6TTM0NS42IDkyOGMtNDIuNDEyOCAwLTc2LjgtMzQuMzg3Mi03Ni44LTc2LjhzMzQuMzg3Mi03Ni44IDc2LjgtNzYuOCA3Ni44IDM0LjM4NzIgNzYuOCA3Ni44LTM0LjM4NzIgNzYuOC03Ni44IDc2Ljh6IG00MTYgMGMtNDIuNDEyOCAwLTc2LjgtMzQuMzg3Mi03Ni44LTc2LjhzMzQuMzg3Mi03Ni44IDc2LjgtNzYuOCA3Ni44IDM0LjM4NzIgNzYuOCA3Ni44LTM0LjM4NzIgNzYuOC03Ni44IDc2Ljh6IiBmaWxsPSIjZDgxZTA2IiBwLWlkPSIyNTcyIj48L3BhdGg+PC9zdmc+"/>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import Pubsub from "pubsub-js";
export default {
  name: "FlashSale",
  props: {
    flashSales: Array
  },
  mounted() {
    // console.log(this.flashSales);
  },
  methods: {
    order(good) {
      // console.log("click");
      Pubsub.publish("orderGoods", good);
    }
  }
};
</script>

<style>
.flashWrapper_flashSale {
  position: relative;
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem 0;
  background: white;
}

.titleWrapper_flashSale {
  position: relative;
  margin: 0 0.625rem 0.625rem 0.625rem;
  height: 1.5625rem;
}

.title_flashSale {
  display: inline-block;
  border-left: 4px #3cb963 solid;
  padding-left: 0.3125rem;
  height: 1.3125rem;
  line-height: 1.3125rem;
  vertical-align: middle;
  font-size: 1.1875rem;
}

.actionStateText_flashSale {
  display: inline-block;
  vertical-align: middle;
  line-height: 0.875rem;
  font-size: 0.875rem;
  border-radius: 3px;
  padding: 0.15625rem;
  /*border: 1px solid #FE3824;*/
  color: #fe3824;
  margin-left: 0.3125rem;
}

.actionStateTextEnd_flashSale {
  display: inline-block;
  vertical-align: middle;
  line-height: 0.875rem;
  font-size: 0.875rem;
  border-radius: 3px;
  padding: 0.15625rem;
  border: 1px solid #999;
  color: #666;
  margin-left: 0.3125rem;
}

.more_flashSale {
  position: absolute;
  top: 0;
  right: 0;
  height: 1.5625rem;
  line-height: 1.5625rem;
  font-size: 0.875rem;
  color: #2eb257;
}

.itemsWrapper_flashSale {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  /* overflow-scrolling: touch; */
  /* margin-bottom: 100px; */
}

.itemsWrapper_flashSale::-webkit-scrollbar {
  display: none;
}

.wrapper_flashSale {
  display: inline-block;
  padding: 0 0.3125rem;
  margin: 0 0.5rem;
  white-space: normal;
  width: 28%;
}

@media screen and (min-width: 0px) and (max-width: 320px) {
  .itemWrapper {
    width: 33%;
  }
}

.imageWrapper_flashSale {
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  margin-bottom: 0.625rem;
  position: relative;
}
.image_flashSale {
  width: 200px;
  height: 200px;
  display: block;
}
.name_flashSale {
  margin-bottom: 0.625rem;
  height: 2.5rem;
  line-height: 1.25rem;
  font-size: 0.8125rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.originPrice_flashSale {
  margin-bottom: 0.3125rem;
  font-size: 0.6875rem;
  color: #999999;
  text-decoration: line-through;
}
.noticeSoldOut_flashSale view {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 60%;
  text-align: center;
  color: #fff;
  font-size: 0.75rem;
  height: 1.25rem;
  line-height: 1.25rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1.25rem;
}

.priceWrapper_flashSale {
  position: relative;
}

.price_flashSale {
  height: 1.875rem;
  line-height: 1.875rem;
  font-size: 0.6875rem;
  color: #fe6263;
}

.shopCart_icon {
  position: absolute;
  top: 12px;
  right: 0;
  width: 50px;
  height: 50px;
}
</style>