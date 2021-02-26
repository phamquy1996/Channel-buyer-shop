<template>
  <div class="container-profile">
    <div class="title-ratng-admin">
      <div class="title-ratng-admin-left">
        <div>Hồ Sơ Shop</div>
        <div>Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</div>
      </div>
    </div>
    <Menu/>
    <div class="profile-main">
      <div class="profile-main-left">
        <div class="image-cover"></div>
        <label for="uploadIMG">
          <div class="edit-cover">
            Sửa ảnh bìa
            <input type="file" accept="/image*" id="uploadIMG">
          </div>
        </label>
        <div class="item-profile">
          <div class="item-profile-left">
            <div><i class="fa fa-star"></i></div>
            <div>Giao diện Shop trên máy tính</div>
          </div>
          <div class="item-profile-right">Xem</div>
        </div>
        <div class="item-profile">
          <div class="item-profile-left">
            <div><i class="fa fa-star"></i></div>
            <div>Giao diện Shop trên máy tính</div>
          </div>
          <div class="item-profile-right">Xem</div>
        </div>
        <div class="item-profile">
          <div class="item-profile-left">
            <div><i class="fa fa-star"></i></div>
            <div>Giao diện Shop trên máy tính</div>
          </div>
          <div class="item-profile-right">Xem</div>
        </div>
        <div class="item-profile">
          <div class="item-profile-left">
            <div><i class="fa fa-star"></i></div>
            <div>Giao diện Shop trên máy tính</div>
          </div>
          <div class="item-profile-right">Xem</div>
        </div>
        <div class="item-profile">
          <div class="item-profile-left">
            <div><i class="fa fa-star"></i></div>
            <div>Giao diện Shop trên máy tính</div>
          </div>
          <div class="item-profile-right">Xem</div>
        </div>
        <div class="item-profile">
          <div class="item-profile-left">
            <div><i class="fa fa-star"></i></div>
            <div>Giao diện Shop trên máy tính</div>
          </div>
          <div class="item-profile-right">Xem</div>
        </div>
      </div>
      <div class="profile-main-right">
        <div>Tên Shop</div>
        <div>
          <input type="text" name="" id="" class="form-input">
        </div>
        <div>Mô tả hình ảnh và video</div>
        <label for="uploadIMG">
          <div class="descript-img-video">
            Thêm hình ảnh
          </div>
        </label>
        <div>Mô tả Shop</div>
        <div>
          <textarea name="" id="" cols="30" rows="10" class="form-descript-admin"></textarea>
        </div>
      </div>
      
    </div>
    <div class="btn-save">
      <button>Lưu</button>
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