<template>
    <view class="searchWrapper_category">
        <view class="searchBox_category">
            <view class="iconSearchWrapper_category">
                <image class="icon_category iconSearch_category" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjE2MTQzNzcwNjExIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDI0IDEyMGMxNjcuNjI0IDAgMzA0IDEzNi4zNzYgMzA0IDMwNFM1OTEuNjI0IDcyOCA0MjQgNzI4IDEyMCA1OTEuNjI0IDEyMCA0MjRzMTM2LjM3Ni0zMDQgMzA0LTMwNG0wLTU2QzIyNS4xNjggNjQgNjQgMjI1LjE3NiA2NCA0MjRjMCAxOTguODMyIDE2MS4xNjggMzYwIDM2MCAzNjBzMzYwLTE2MS4xNjggMzYwLTM2MEM3ODQgMjI1LjE3NiA2MjIuODMyIDY0IDQyNCA2NHpNOTQ4LjggODkyLjIzMkw3MzUuODMyIDY3OS4yNjRhNDA1Ljg4IDQwNS44OCAwIDAgMS01Ni41NTIgNTYuNTZsMjEyLjk2IDIxMi45NjhhMzkuODggMzkuODggMCAwIDAgMjguMjggMTEuNzIgMzkuODI0IDM5LjgyNCAwIDAgMCAyOC4yOC0xMS43MiAzOS45ODQgMzkuOTg0IDAgMCAwIDAtNTYuNTZ6IiBmaWxsPSIjMjMxODE1IiBwLWlkPSIxODgyIj48L3BhdGg+PC9zdmc+"/>
            </view>
            <view class="searchPrompt_category">输入商品名称</view>
        </view>
    </view>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style >
.searchWrapper_category {
  padding: 0.5rem 0.625rem;
  background: #fff;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: solid 1px #e6e6e6;
  z-index: 999;
}

.searchBox_category {
  display: block;
  padding: 0 0.875rem 0 1.75rem;
  border-radius: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  font-size: 0.875rem;
  background: #f2f2f2;
}

.iconSearchWrapper_category {
  position: absolute;
  left: 0.9375rem;
  top: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
}

.icon_category {
  fill: #999;
  width: 1rem;
  height: 1rem;
}

.iconSearch_category {
  width: 100%;
  height: 100%;
}

.searchPrompt_category {
  color: #b5b5b5;
}
</style>