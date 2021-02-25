<template>
  <div class="header">
    <div class="header-left">
      <div class="shop-name">
        Shopee
      </div>
      <div class="shop-title">
        Kênh người bán
      </div>
    </div>
    <div class="header-right">
      <div class="image">
        <img src="https://cf.shopee.vn/file/af42f5c18fd54e1c3620d94ca68f9728" alt="">
      </div>
      <div class="name-buyer">
        Đỗ ngọc hoa
      </div>
      <div class="menu">
        <i class='fas fa-align-justify'></i>
      </div>
      <div class="nofication">
        <i class="far fa-bell"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import './index.scss'
export default defineComponent({
  name:'Header'
})
</script>