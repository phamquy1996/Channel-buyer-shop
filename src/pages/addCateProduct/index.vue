<template>
  <div class="container-add-cate-pr">
    <h3>Thêm 1 sản phẩm mới</h3>
    <span>Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn.</span>
    <div class="form-input-name">
      <div class="name-t">Tên sản phẩm:</div>
      <div class="input-t">
        <input type="text" />
      </div>
    </div>
    <div class="choose-category">
      <div class="form-search-cate">
        <input type="text" placeholder="Tên ngành hàng" />
      </div>
      <div class="category-show">
        <div class="category">
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>

          <div class="name-category">
            <div>Giặt giũ & Chăm sóc nhà cửa</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>

          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>

          <div class="name-category">
            <div>Bách hóa onlline</div>
            <div>></div>
          </div>
        </div>
        <div class="category"></div>
        <div class="category"></div>
      </div>
    </div>
    <div class="cate-seleted">
      <div>Đã chọn : <span style="color:red;">Giặt giũ & Chăm sóc nhà cửa > Thuốc diệt côn trùng > Hóa chất diệt côn trùng</span></div>
    </div>
    <div class="buton-next">
      <button>Tiếp theo</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "./index.scss";
export default defineComponent({
  name: "addCateProduct",
});
</script>