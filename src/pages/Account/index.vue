<template>
  <div class="container-profile">
    <div class="title-ratng-admin">
      <div class="title-ratng-admin-left">
        <div>Hồ Sơ Shop</div>
        <div>Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</div>
      </div>
    </div>
    <div class="item-account">
      <div><i class="far fa-user-circle"></i></div>
      <div class="or">Hồ sơ của tôi</div>
      <div class="img-account">
        <div><img src="https://cf.shopee.vn/file/af42f5c18fd54e1c3620d94ca68f9728" alt=""></div>
         <div>ngochoado</div>
      </div>
    </div>
    <div class="item-account">
      <div><i class="fas fa-phone"></i></div>
      <div class="or">Số điện thoại</div>
      <div class="img-account">
        <div><img src="https://cf.shopee.vn/file/af42f5c18fd54e1c3620d94ca68f9728" alt=""></div>
         <div>ngochoado</div>
      </div>
    </div>
    <div class="item-account">
      <div><i class="far fa-envelope"></i></div>
      <div class="or">Email</div>
      <div class="img-account">
        <div><img src="https://cf.shopee.vn/file/af42f5c18fd54e1c3620d94ca68f9728" alt=""></div>
         <div>ngochoado</div>
      </div>
    </div>
    <div class="item-account">
      <div><i class="	fas fa-lock"></i></div>
      <div class="or">Mật khẩu đăng nhập</div>
      <div class="img-account">
        <div><img src="https://cf.shopee.vn/file/af42f5c18fd54e1c3620d94ca68f9728" alt=""></div>
         <div>ngochoado</div>
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