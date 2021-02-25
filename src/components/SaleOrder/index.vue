<template>
  <div class="order-main">
    <div class="title-name-buyer">
      <div class="title-name-buyer-left">
        <img
          src="https://cf.shopee.vn/file/c9a4de6a11446580d1725b6d5361a269"
          alt=""
        />
        <div>Phạm quý</div>
        <i class="fab fa-facebook-messenger"></i>
      </div>
      <div class="title-name-buyer-right">
        <div>ID Đơn hàng 210208EG518TV0</div>
      </div>
    </div>
    <div class="product-order">
      <div class="product-order-item">
        <div class="product-order-item-y">
          <div class="img">
            <img
              src="https://cf.shopee.vn/file/ab210c76f0344b8febf4f212c91d27b6_tn"
              alt=""
            />
          </div>
          <div class="name-pr">
            <div class="order-front-product">Sản phẩm đăt trước</div>
            <div>Kem dưỡng da ban đêm Olaz 7 in 1 hàng xách tay Đức</div>
          </div>
        </div>
        <div class="product-order-item-y">
          <div class="img">
            <img
              src="https://cf.shopee.vn/file/ab210c76f0344b8febf4f212c91d27b6_tn"
              alt=""
            />
          </div>
          <div class="name-pr">
            <div class="order-front-product">Sản phẩm đăt trước</div>
            <div>Kem dưỡng da ban đêm Olaz 7 in 1 hàng xách tay Đức</div>
          </div>
        </div>
        <div class="product-order-item-y">
          <div class="img">
            <img
              src="https://cf.shopee.vn/file/ab210c76f0344b8febf4f212c91d27b6_tn"
              alt=""
            />
          </div>
          <div class="name-pr">
            <div class="order-front-product">Sản phẩm đăt trước</div>
            <div>Kem dưỡng da ban đêm Olaz 7 in 1 hàng xách tay Đức</div>
          </div>
        </div>
      </div>
      <div class="order-right">
        <div class="sum-order">
          <div>₫2.427.684</div>
          <div class="substatus">Nhận hàng khi thanh toán</div>
        </div>
        <div class="sum-order">
          <div class="canceled">Đã hủy</div>
          <div class="substatus">Hủy bởi người mua</div>
        </div>
        <div class="sum-order">
          <div>Giao hàng nhanh</div>
        </div>
        <div class="sum-order">
          <div class="see-detail-order">
            <i class="fas fa-book"></i> Xem chi tiết
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "OrderItem",
});
</script>