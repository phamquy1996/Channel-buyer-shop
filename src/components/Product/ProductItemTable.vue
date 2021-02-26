<template>
  <div class="admin-product-table-item">
    <div><input type="checkbox"></div>
    <div class="buyer-name-img">
      <div>
        <img
          src="https://cf.shopee.vn/file/aeef070424e70dfd51027c21267a08a7_tn"
          alt=""
        />
      </div>
      <div><a href="">Kem dưỡng đêm chống lão hóa Loreal Revitalift Cicacrem Hàng xách tay Đức</a></div>
    </div>
    <div>Phân loại hàng</div>
    <div>Gía</div>
    <div>Kho hàng</div>
    <div>Đã bán</div>
    <div>Sửa thông tin</div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import "./index.scss";
export default defineComponent({
  name: "ProductItemTable",
});
</script>