<template>
  <div class="container-order">
   <Menu/>
    <div class="search-order">
      <div class="input-search-order">
        <input type="text" placeholder="Tìm đơn hàng" />
      </div>
      <div class="action-order">
        <div class="title-or">Ngày đặt hàng</div>
        <div class="date-or"><input type="date" /></div>
        <div class="btn-export"><button>Xuất</button></div>
        <div class="btn-download"><button>Download</button></div>
      </div>
    </div>
    <div class="order-main">
      <div class="title-order">
        <div class="title-main-or">64 ĐƠN HÀNG</div>
        <div class="btn-send-all"><button>Giao hàng loạt</button></div>
      </div>
    </div>
    <div class="title-or-detail">
      <div class="pr pr-one">Sản phẩm</div>
      <div class="pr">Tổng Đơn hàng</div>
      <div class="pr">Trạng thái</div>
      <div class="pr">Đếm ngược</div>
      <div class="pr">Vận chuyển</div>
      <div class="pr">Thao tác</div>
    </div>
    <OrderItem/>
    <OrderItem/>
    <OrderItem/>
    <OrderItem/>

    <Paginate/> 
  </div>
</template>
<script>
import "./index.scss";
import { defineComponent } from 'vue'
import OrderItem from './../../components/SaleOrder/index.vue'
import Menu from './../../components/Menu/index.vue'
import Paginate from './../../components/Paginate/index.vue'
export default defineComponent({
  name:'saleOrder',
  components:{
    OrderItem,
    Menu,
    Paginate
  }
});
</script>