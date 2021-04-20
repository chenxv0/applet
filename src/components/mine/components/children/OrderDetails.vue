<template>
    <view id="myOrderItem">
        <view class="itemTop">
            <van-cell :title=order.arrive_time :value="`${order.order_status==='pay'?'已支付':'待支付'}`"></van-cell>
        </view>
       <view class="itemCenter">
            <view class="centerLeft">
                <image mode="aspectFit" v-for="(good) in order.cart_shop.slice(0,5)" :key="good.goods_id"
                     :src=good.small_image     :alt=good.goods_name width="30"/>
            </view>
            <view class="centerRight">{{order.cart_shop.length>6?"......":""}}</view>
        </view>
         <!-- <div class="itemBottom">
            <van-cell title=" " :value="`共${order.cart_shop.length}份商品 实付¥${sum}`"></van-cell>
        </div> -->
    </view>
</template>

<script>
export default {
  name: "OrderDetails",
  props: {
    order: Object
  },
  computed: {
    sum() {
      return this.order.total_price + this.order.dis_price;
    }
  },
  mounted(){
      // console.log(this.order);
  }
};

</script>

<style>
#myOrderItem {
  width: 100%;
  height: 8rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  margin: 0.5rem 0;
}

#myOrderItem .itemTop {
  flex: 1;
}

#myOrderItem .itemCenter {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #e0e0e0;
  flex: 2;
}

#myOrderItem .itemCenter .centerLeft {
  flex: 9;
}

#myOrderItem .itemCenter .centerRight {
  flex: 1;
}

#myOrderItem .itemCenter .centerLeft image {
  width: 90px;
  height:160px;
  margin: 0.5rem 0.3rem;
}

#myOrderItem .itemBottom {
  flex: 1;
}
</style>