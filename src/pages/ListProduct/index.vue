<template>
  <div class="container-order">
   <Menu/>
    <div class="filter-product">
      <div class="filter-product-left">
        <div class="select">
          <select>
            <option value="">Tên sản phẩm</option>
            <option value="">Phân loại hàng</option>
            <option value="">Mã sản phẩm</option>
          </select>
          <input type="text" placeholder="Nhập vào">
        </div>
      </div>
      <div class="filter-product-right">
        <div class="select-cate">
          <div>Danh mục</div>
          <div class="choose-cate">Chọn ngành hàng</div>
        </div>
      </div>
    </div>
    <div class="filter-btn">
      <button class="find">Tìm</button>
      <button class="reset">Nhập lại</button>
    </div>
    <div class="title-list-product">
      <div class="total-pr">145 Sản Phẩm</div>
      <div class="bar-pr">
        145/500
        <div class="bar-pr-present"></div>
      </div>
      <div class="">Tối ưu sản phẩm</div>
      <div class="btn-toiuu">
        <button>+ Thêm một sản phẩm mới</button>
      </div>
      <div class="action-handing">
        <select name="" id="">
          <option value="">Công cụ xử lí hàng loạt</option>
        </select>
      </div>
      <div class="btn-change-sharp">
        <button><i class="fas fa-align-justify"></i></button>
        <button><i class="fas fa-border-all"></i></button>
      </div>
    </div>
    <!-- <div class="admin-products">
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </div> -->
    <div class="admin-product-table">
      <div class="admin-title-product">
        <div><input type="checkbox"></div>
        <div class="admin-title-img-name">Tên sản phẩm</div>
        <div>Phân loại hàng</div>
        <div>Gía</div>
        <div>Kho hàng</div>
        <div>Đã bán</div>
        <div>Sửa thông tin</div>
      </div>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
      <ProductItemTable/>
    </div>
    <Paginate/>
    <div class="box-select-product">
      <div class="check-list">
        <div><input type="checkbox"></div>
        <div>Chon tất cả</div>
      </div>
      <div class="action-check"> 
        <div>1 sản phẩm được chon</div>
        <div>
          <button>Xóa</button>
        </div>
        <div>
          <button>Ẩn</button>
        </div>
        <div>
          <button>Hiển thị</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./index.scss";
import ProductItem from './../../components/Product/ProductItem.vue'
import ProductItemTable from './../../components/Product/ProductItemTable.vue'
import { defineComponent } from 'vue'
import Menu from './../../components/Menu/index.vue'
import Paginate from './../../components/Paginate/index.vue'
export default defineComponent({
  name:'saleOrder',
  components:{
    Menu,
    ProductItem,
    ProductItemTable,
    Paginate
  },
  setup(){

  }
});
</script>