<template>
    <view class="wrapper_contentView emptyWrapper_contentView">
        <view v-for="(content) in contentView" :key="content.id">
            <view class="categoryTitle_contentView" style="top: 0">{{content.name}}</view>
            <!--子列表-->
            <ProductItem :products="content.products"/>
        </view>
    </view>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  name: "ContentView",
  props: {
    contentView: Array
  },

  components: {
    ProductItem
  }
};
</script>

<style>
.wrapper_contentView {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  /* overflow-scrolling: touch; */
}

.wrapper_contentView {
  position: absolute;
  left: 5.3125rem;
  right: 0;
  bottom: 0;
  top: 0;
  background: #fff;
}

.categoryTitle_contentView {
  padding: 0 0.3125rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  background: #f8f8f8;
  color: #666666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>