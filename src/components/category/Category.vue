<template>
    <view id="category" >
        <view id="myNavBar2">
          <van-nav-bar  :safe-area-inset-top="false" title="分类" >
          </van-nav-bar>
         </view>
        <Header style="border-top:3px solid #f5f5f5;"/>
        <view class="listWrapper_category" >           
            <view class="leftWrapper_category">
              <at-virtual-scroll
                bench="5"
                height="410"
                :items="categories"
                item-height="35"
                width="90"
              >
                <template #default="{ index, item }">               
                    <at-list-item
                    arrow="right"
                 
                    :key="index"
                    :note='item.name'
                    class="categoryItem_category"
                    :class="{selected_category:currentIndex===index}"
                    @click="clickLeftLi(index)"
                    
                  />                  
                </template>
              </at-virtual-scroll>
            </view>
           
            <ContentView :contentView="contentView"/>
        </view>
        <van-toast id="van-toast" />
        <!-- <van-loading v-else type="spinner" color="#1989fa"
                     style="position:absolute;top: 40%;left: 50%; transform: translate(-50%);" >
            我正在拼命加载中</van-loading> --> 
    </view>

</template>

<script>
import Header from "./components/Header";
import ContentView from "./components/ContentView";
import { AtVirtualScroll, AtListItem } from "taro-ui-vue3";

import {
  getCategoriesData,
  getCategoriesdetailData,
  addGoods
} from "../../service/api/index";
import Pubsub from "pubsub-js";
import { mapMutations, mapState } from "vuex";
import Toast from "../vant-weapp/dist/toast/toast.js";
export default {
  name: "Category",
  data() {
    return {
      categories: [],
      currentIndex: 0,
      contentView: [],
      isLoad: false
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  components: {
    AtVirtualScroll,
    AtListItem,
    Header,
    ContentView
  },
  mounted() {
    this.init_categoryDate();
    Pubsub.unsubscribe("orderGoods1");
    Pubsub.subscribe("orderGoods1", (msg, good) => {
      if (msg === "orderGoods1") {
        if (this.userInfo.token) {
          // 已经登录
          // console.log(this.userInfo);
          this.addGoods1(good);
        } else {
          // 没有登录
          Taro.navigateTo({
            url: "../login/login"
          });
        }
      }
    });
  },
  methods: {
    ...mapMutations(["ADD_GOODS"]),
    async init_categoryDate() {
      //获取左侧数据
      let result = await getCategoriesData();
      if (result.success) {
        this.categories = result.data.cate;
        let rightResult = await getCategoriesdetailData("lk001");
        if (rightResult.success) {
          this.contentView = rightResult.data.cate;
          // console.log(rightResult);
          // console.log(rightResult.data.cate);
          this.isLoad = true;
        }
      }
    },
    async clickLeftLi(index) {
      // console.log(index);
      this.currentIndex = index;
      // let el = this.$refs.item[index];
      // this.leftScroll.scrollToElement(el, 300);

      let xx = index + 1;
      if (xx < 10) {
        xx = "0" + xx;
      }
      let rightResult = await getCategoriesdetailData("lk0" + `${xx}`);
      if (rightResult.success) {
        this.contentView = rightResult.data.cate;
      }
    },
    async addGoods1(good) {
      let result = await addGoods({
        user_id: this.userInfo.token,
        goods_id: good.id,
        goods_name: good.name,
        goods_price: good.price,
        small_image: good.small_image
      });
      console.log(result);
      if (result.success_code === 200) {
        Toast({
          message: "添加购物车成功",
          duration: 1400
        });
        this.ADD_GOODS({
          goodId: good.id,
          name: good.name,
          price: good.price,
          img: good.small_image,
          checked: true
        });
      }
    }
  }
};
</script>

<style >

#myNavBar2 {
  color: black;
  text-align: center;
  height: 40PX;
   background: #f5f5f5; 
  padding-top: 20PX;
  line-height:32PX;

}
#category {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.listWrapper_category {
  display: flex;
  position: absolute;
  top: 6.85rem;
  bottom: 3rem;
  width: 100%;
  overflow: hidden;
}

.leftWrapper_category {
  background-color: #f4f4f4;
}

.leftWrapper_category .categoryItem_category {
  border-bottom: solid 1px #e8e9e8;
}

.leftWrapper_category .selected_category {
  background: #fff;
  border-left: solid 5px #3cb963;
}
</style>