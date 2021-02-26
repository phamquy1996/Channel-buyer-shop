<template>
  <div class="container-profile">
    <div class="title-ratng-admin">
      <div class="title-ratng-admin-left">
        <div>Hồ Sơ Shop</div>
        <div>Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</div>
      </div>
    </div>
    <Menu/>
    <div class="content-setting">
      <div class="setting-item">
        <div class="title-item-setting">
          <div>Cho phép Người Mua gọi</div>
          <div>Bật lựa chọn này để hiển thị số điện thoại của bạn trong phần Thông tin sản phẩm để khách hàng có thể gọi điện cho bạn.</div>
        </div>
        <ToggleSwitch/>
      </div>
      <div class="setting-item">
        <div class="title-item-setting">
          <div>Cho phép Người Mua gọi</div>
          <div>Bật lựa chọn này để hiển thị số điện thoại của bạn trong phần Thông tin sản phẩm để khách hàng có thể gọi điện cho bạn.</div>
        </div>
        <ToggleSwitch/>
      </div>
      <div class="setting-item">
        <div class="title-item-setting">
          <div>Cho phép Người Mua gọi</div>
          <div>Bật lựa chọn này để hiển thị số điện thoại của bạn trong phần Thông tin sản phẩm để khách hàng có thể gọi điện cho bạn.</div>
        </div>
        <ToggleSwitch/>
      </div>
    </div>
  </div>
  
</template>
<script>
import './index.scss'
import Menu from './../../components/Menu/index.vue'
import ToggleSwitch from './../../components/ToggleSwitch/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components:{
    Menu,
    ToggleSwitch
  }
})
</script>