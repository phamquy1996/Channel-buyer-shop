<template>
  <div class="container-admin-rating">
    <div class="title-ratng-admin">
      <div class="title-ratng-admin-left">
        <div>Đánh Giá Shop</div>
        <div>Xem đánh giá Shop của bạn</div>
      </div>
      <div class="title-ratng-admin-right">
        <div>5.0</div>
        <div>/ 5</div>
      </div>
    </div>
    <div class="filter-rating-admin">
      <div class="form-filter">
        <div>Tên sản phẩm:</div>
        <div><input type="text"></div>
      </div>
      <div class="form-filter">
        <div>Thời gian Đánh giá:</div>
        <div><input type="text"></div>
      </div>
      <div class="form-filter">
        <div>Người mua:</div>
        <div><input type="text"></div>
      </div>
    </div>
    <div class="btn-filter-rating">
      <button>Tìm</button>
      <button>Nhập lại</button>
    </div>
    <Menu/>
    <div class="btn-filter-rating-action">
      <button>Tất cả</button>
      <button>5 Sao</button>
      <button>4 Sao</button>
      <button>3 Sao</button>
      <button>2 Sao</button>
      <button>1 Sao</button>
    </div>
    <div class="title-item-rating">
      <div>Thông tin Sản phẩm</div>
      <div>Đánh giá của Người mua</div>
      <div>Trả lời đánh giá của bạn</div>
    </div>
    <div class="infor-rating">
      <div class="rating-name-img">
        <div>
          <img
            src="https://cf.shopee.vn/file/aeef070424e70dfd51027c21267a08a7_tn"
            alt=""
          />
        </div>
        <div>
          <a href="">Bông tẩy trang ISANA Hàng xách tay Đức</a>
        </div>
      </div>
      <div class="rating-rep">
        <div>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div>
          Sản phẩm rất ok mình sẽ giới thiệu cho người khác mua cùng
        </div>
      </div>
      <div class="admin-rep">
        <div>Cảm ơn bạn đã đánh giá sản phẩm của chúng tôi</div>
      </div>
    </div>
    
    <ItemRating/>
  </div>
</template>
<script>
import './index.scss'
import Menu from './../../components/Menu/index.vue'
import ItemRating from './../../components/ItemRating/index.vue'
import {defineComponent} from 'vue'
export default defineComponent({
  components:{
    Menu,
    ItemRating
  }
})
</script>