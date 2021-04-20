<template>
    <view class="toTopIconWrapper"  @tap="showBack1">
        <image  class="toTopIcon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE2MTIwMDcxMDQyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4NDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEzIDk4LjJjLTIyOC42IDAtNDE0LjYgMTg2LTQxNC42IDQxNC42IDAgMjMuOSAyLjYgNDguMiA2LjUgNzAuOSAwIDAuMSAwLjIgMC4xIDAuMyAwLjIgMS43IDUuOCA2LjggMTAuMSAxMy4xIDEwLjEgNy42IDAgMTMuOC02LjIgMTMuOC0xMy44IDAtMC41LTAuMi0wLjktMC4zLTEuM2wwLjItMC4xYy0zLjctMjEuNS02LTQzLjQtNi02NiAwLTIxMy43IDE3My4yLTM4Ni45IDM4Ni45LTM4Ni45czM4Ni45IDE3My4yIDM4Ni45IDM4Ni45UzcyNi43IDg5OS43IDUxMyA4OTkuN2MtMTQyLjggMC0yNjcuMi03Ny42LTMzNC4yLTE5Mi43IDAtMC4xLTAuMS0wLjEtMC4xLTAuMmwtMC42LTAuOWMtMi4zLTQuMy02LjgtNy40LTEyLTcuNC03LjYgMC0xMy44IDYuMi0xMy44IDEzLjggMCAzIDEuMiA1LjYgMi44IDcuOWwtMC4yIDAuMWM3MS43IDEyMy42IDIwNS4yIDIwNyAzNTguMSAyMDcgMjI4LjYgMCA0MTQuNi0xODYgNDE0LjYtNDE0LjZTNzQxLjYgOTguMiA1MTMgOTguMnoiIGZpbGw9IiMxMzIyN2EiIHAtaWQ9IjE4NDQiPjwvcGF0aD48cGF0aCBkPSJNNjY0LjIgNDg0LjRMNTM0IDM4MS40Yy0xMC44LTEwLjYtMjguMS0xMC41LTM4LjggMC4xTDM1OC4zIDQ4NC40bDAuMSAwLjFjLTIuOCAyLjUtNC43IDYuMS00LjcgMTAuMiAwIDcuNiA2LjIgMTMuOCAxMy44IDEzLjggNCAwIDcuNi0xLjggMTAuMS00LjZsMC4xIDAuMSAxMjMuMS04OS4xdjI5Ny40YzAgNy42IDYuMiAxMy44IDEzLjggMTMuOCA3LjYgMCAxMy44LTYuMiAxMy44LTEzLjhWNDE0LjdsMTE2LjQgODkuNCAwLjEtMC4xYzIuNSAyLjggNi4xIDQuNSAxMC4xIDQuNSA3LjYgMCAxMy44LTYuMiAxMy44LTEzLjggMC4yLTQuMi0xLjctNy44LTQuNi0xMC4zek02MjIuMyAzMjkuNWMwIDcuNi02LjIgMTMuOC0xMy44IDEzLjhINDIxLjljLTcuNiAwLTEzLjgtNi4yLTEzLjgtMTMuOCAwLTcuNiA2LjItMTMuOCAxMy44LTEzLjhoMTg2LjZjNy42IDAgMTMuOCA2LjIgMTMuOCAxMy44eiIgZmlsbD0iIzEzMjI3YSIgcC1pZD0iMTg0NSI+PC9wYXRoPjwvc3ZnPg==" />
    </view>
</template>

<script>
import { animate } from "../../../../config/globel";
import Pubsub from 'pubsub-js'
export default {
  name: "Mark",
  data() {
    return {};
  },
  methods: {
    showBack1() {
       let docB = document.documentElement || document.body;
       console.log(docB.scrollTop)
      // docB.scrollTop
      animate(docB, { scrollTop: 0 }, 400, "ease-out");
      // console.log(this)
      // console.log("返回顶部")
      // Pubsub.publish("goToTop");
    }
  }
};
</script>

<style >
.toTopIconWrapper {
  position: fixed;
  right: 0.625rem;
  bottom: 4rem;
  font-size: 0;
}

.toTopIcon {
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
}
</style>