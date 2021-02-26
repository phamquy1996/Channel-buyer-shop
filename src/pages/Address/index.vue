<template>
  <div class="container-profile">
    <div class="title-ratng-admin">
      <div class="title-ratng-admin-left">
        <div>Hồ Sơ Shop</div>
        <div>Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</div>
      </div>
      <div class="title-ratng-admin-right">
        <button>Thêm địa chỉ mới</button>
      </div>
    </div>
    <div class="content-address"> 
      <div class="item-address">
        <div class="icon-star"><i class="fa fa-star"></i></div>
        <div class="title-adress">
          <div>Họ & Tên</div>
          <div>Số điện thoại</div>
          <div>Địa chỉ</div>
        </div>
        <div class="title-adress-w">
          <div class="status-adress">
            <div>Đỗ Ngọc Hoa</div>
            <div>Default Address</div>
            <div>Địa chỉ trả hàng</div>
          </div>
          <div>84587441996</div>
          <div>Xóm Liên Hiệp 2</div>
          <div>Xã Nghĩa Liên</div>
          <div>Huyện Nghĩa Đàn</div>
          <div>Nghệ An</div>
        </div>
        <div class="action-adress">
          <div>Sửa</div>
        </div>
      </div>
      <div class="item-address">
        <div class="icon-star"><i class="fa fa-star"></i></div>
        <div class="title-adress">
          <div>Họ & Tên</div>
          <div>Số điện thoại</div>
          <div>Địa chỉ</div>
        </div>
        <div class="title-adress-w">
          <div class="status-adress">
            <div>Đỗ Ngọc Hoa</div>
            <div>Default Address</div>
            <div>Địa chỉ trả hàng</div>
          </div>
          <div>84587441996</div>
          <div>Xóm Liên Hiệp 2</div>
          <div>Xã Nghĩa Liên</div>
          <div>Huyện Nghĩa Đàn</div>
          <div>Nghệ An</div>
        </div>
        <div class="action-adress">
          <div>Sửa</div>
        </div>
      </div>
      <div class="item-address">
        <div class="icon-star"><i class="fa fa-star"></i></div>
        <div class="title-adress">
          <div>Họ & Tên</div>
          <div>Số điện thoại</div>
          <div>Địa chỉ</div>
        </div>
        <div class="title-adress-w">
          <div class="status-adress">
            <div>Đỗ Ngọc Hoa</div>
            <div>Default Address</div>
            <div>Địa chỉ trả hàng</div>
          </div>
          <div>84587441996</div>
          <div>Xóm Liên Hiệp 2</div>
          <div>Xã Nghĩa Liên</div>
          <div>Huyện Nghĩa Đàn</div>
          <div>Nghệ An</div>
        </div>
        <div class="action-adress">
          <div>Sửa</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-address">
    <div class="modal">
      <div class="title-modal">
        <div>Thêm địa chỉ mới</div>
        <div>X</div>
      </div>
      <div class="form-modal">
        <div class="form">
          <div>Họ & Tên</div>
          <div>
            <input type="text">
          </div>
        </div>
      </div>
      <div class="form-modal">
        <div class="form">
          <div>Số điện thoại</div>
          <div>
            <input type="text">
          </div>
        </div>
      </div>
      <div class="form-modal">
        <div class="form">
          <div>Địa chỉ</div>
          <div>
            <input type="text">
          </div>
        </div>
      </div>
      <div class="form-modal">
        <div class="form">
          <div>Tỉnh/Thành phố/Quận/Huyện/Phường/Xã</div>
          <div>
            <input type="text">
            <div class="model-select-adress">
              <div class="form-adress-title">
                <div>Tỉnh</div>
                <div>Quận huyện</div>
                <div>Xã</div>
              </div>
              <div class="list-adress">
                <div>Tỉnh Nam Định</div>
                <div>Tỉnh Nam Định</div>
                <div>Tỉnh Nam Định</div>
                <div>Tỉnh Nam Định</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-modal">
        <div class="form">
          <div>Địa chỉ chi tiết</div>
          <div>
            <input type="text">
          </div>
        </div>
      </div>
      <div class="form-modal-checkbox">
        <div>
          <input type="checkbox">Đặt làm địa chỉ mặc định
        </div>
        <div>
          <input type="checkbox">Đặt làm địa chỉ lấy hàng
        </div>
        <div>
          <input type="checkbox">Đặt địa chỉ làm địa chỉ trả hàng
        </div>
      </div>
      <div class="btn-action-modal">
        <button>Hủy</button>
        <button>Lưu</button>
      </div> 
    </div>
  </div>
</template>
<script>
import './index.scss'
import Menu from './../../components/Menu/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components:{
    Menu
  }
})
</script>