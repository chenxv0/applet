<template>
    <view class="content_youlike">
        <view class="wrapper_youLike" v-for="(good) in youLikeItems" :key="good.id">
            <view class="content_youLike" >
                <view class="imageWrapper_youLike">
                    <view class="LazyLoad_youLike is-visible_youLike">
                        <image mode="aspectFit" class="image_youLike" :src="good.small_image" :alt="good.product_name"/>
                    </view>
                </view>
                <view class="infoWrapper_youLike">
                    <view class="name_youLike">
                        <view class="nameText_youLike">{{good.name}}</view>
                    </view>
                    <view class="tagsWrappe_youLiker">
                        <view class="H1B9Rvu_youLike"></view>
                    </view>
                    <view class="priceWrapper_youLike">
                        <view class="priceInfo_youLike">
                            <view class="pricePart_youLike">
                                <view class="price_youLike">
                                    {{$filters.moneyFormate(good.price)}} 
                                </view>
                                <view class="originPrice_youLike">
                                    {{$filters.moneyFormate(good.origin_price)}}
                                </view>
                                <image @tap="order(good)" class="shopCart_icon1" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE1OTc0ODk0NjEwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1NzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDA0LjQ3MzYgNjAxLjZhMzguMjcyIDM4LjI3MiAwIDAgMS00LjkxNTIgMTQuODkyOEwzNzEuMjA2NCA2NjUuNkg3ODAuOGEzOC40IDM4LjQgMCAwIDEgMCA3Ni44SDMwNy4yYTM4LjQgMzguNCAwIDAgMS0zOC4zNTUyLTQwLjMyNjQgMzguMjIwOCAzOC4yMjA4IDAgMCAxIDUuMDc1Mi0yMS41NjhsNDYuNjQzMi04MC43ODcyLTcuMDkxMi0yNi40NTc2YTUxLjI1NzYgNTEuMjU3NiAwIDAgMS0zLjYzNTItOS42MTI4bC02OC41NzYtMjU2YTUxLjQ0MzIgNTEuNDQzMiAwIDAgMS0xLjY1MTItMTAuMDQ4bC0yOS42MTI4LTExMC41MDg4LTg5Ljk3MTItMjQuMTA4OGEzOC40IDM4LjQgMCAwIDEgMTkuODc4NC03NC4xNzZsMTExLjI3MDQgMjkuODExMmEzOC40IDM4LjQgMCAwIDEgMjcuNjczNiAyOS4zMTJjMC40MDMyIDEuMDk0NCAwLjc2MTYgMi4yMTQ0IDEuMDY4OCAzLjM2NjRMMzA0LjU0NCAyNDMuMmg1NTYuNzM2YTUxLjIgNTEuMiAwIDAgMSA0OS40NTkyIDY0LjQ0OGwtNjguNTc2IDI1NmE1MS4yIDUxLjIgMCAwIDEtNDkuNDUyOCAzNy45NTJINDA0LjQ3MzZ6TTM0NS42IDkyOGMtNDIuNDEyOCAwLTc2LjgtMzQuMzg3Mi03Ni44LTc2LjhzMzQuMzg3Mi03Ni44IDc2LjgtNzYuOCA3Ni44IDM0LjM4NzIgNzYuOCA3Ni44LTM0LjM4NzIgNzYuOC03Ni44IDc2Ljh6IG00MTYgMGMtNDIuNDEyOCAwLTc2LjgtMzQuMzg3Mi03Ni44LTc2LjhzMzQuMzg3Mi03Ni44IDc2LjgtNzYuOCA3Ni44IDM0LjM4NzIgNzYuOCA3Ni44LTM0LjM4NzIgNzYuOC03Ni44IDc2Ljh6IiBmaWxsPSIjZDgxZTA2IiBwLWlkPSIyNTcyIj48L3BhdGg+PC9zdmc+"/>

                            </view>
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
  name: "YouLikeItem",
  props: {
    youLikeItems: Array
  },
  filters: {
    moneyFor(val) {
      return "$" + Number(val).toFixed(2);
    }
  },
  methods: {
    order(good) {
      Pubsub.publish("orderGoods", good);
    }
  }
};
</script>

<style>
.content_youlike {
  margin: 0;
  padding: 0;
  background: lightgrey;
  margin-bottom: 120px;
}

.wrapper_youLike {
  position: relative;
  display: inline-block;
  width: 50%;
  margin: 0;
  padding: 0.3125rem;
  box-sizing: border-box;
  vertical-align: top;
}

.content_youLike {
  background: #fff;
  border-radius: 0.3125rem;
  overflow: hidden;
}

.imageWrapper_youLike {
  position: relative;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  background: url("https://img.ddimg.mobi/assets/h5/product-img-load.png")
    no-repeat;
  background-size: 100% 100%;
  border-radius: 0.3125rem;
}

.LazyLoad_youLike {
  padding: 0.625rem;
}

.image_youLike {
  width: 300px;
  height: 300px;
  display: block;
  border-radius: 0.1875rem;
}

.infoWrapper_youLike {
  padding: 0 0.625rem 0.625rem 0.625rem;
}

.name_youLike {
  height: 2.5rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.name_youLike .nameText_youLike {
  vertical-align: middle;
}

.tagsWrapper_youLike {
  margin: 0.125rem 0;
  height: 1.0625rem;
  line-height: 0.8125rem;
  overflow: hidden;
}

.tag_youLike + .tag_youLike {
  margin-left: 0.3125rem;
}

@media screen and (min-width: 0px) and (max-width: 320px) {
  .tag + .tag {
    margin-left: 0.125rem;
  }
}

.H1B9Rvu_youLike {
  height: 1rem;
}

.priceWrapper_youLike {
  display: table;
  height: 2.5rem;
  width: 100%;
}
.priceWrapper_youLike .priceInfo_youLike {
  height: 2.5rem;
  display: table-cell;
  vertical-align: middle;
}

.priceWrapper_youLike .priceInfo_youLike .pricePart_youLike {
  height: 1.25rem;
  position: relative;
}

.priceWrapper_youLike .priceInfo_youLike .pricePart_youLike .price_youLike {
  display: inline-block;
  height: 1.25rem;
  line-height: 1.25rem;
  font-weight: bold;
  font-size: 0.75rem;
  color: #fe6263;
}

.priceWrapper_youLike
  .priceInfo_youLike
  .pricePart_youLike
  .originPrice_youLike {
  display: inline-block;
  vertical-align: bottom;
  margin-left: 0.3125rem;
  height: 1.25rem;
  line-height: 1.25rem;
  text-decoration: line-through;
  font-size: 0.6875rem;
  color: #b2b2b2;
  position: absolute;
  top: 0.15625rem;
}
.shopCart_icon1 {
  position: absolute;
  top: -10px;
  right: 0;
  width: 70px;
  height: 70px;
}
</style>