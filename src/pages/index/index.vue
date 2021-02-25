<template>
  <div class="content">
    <div class="index">
      <div class="content-main">
        <div class="section-order">
          <h3>Danh sách cần làm</h3>
          <span>Những việc bạn sẽ cần làm</span>
          <div class="status-order">
            <div class="item-order">
              <div class="number-order">0</div>
              <div class="confirm">Chờ xác nhận</div>
            </div>
            <div class="item-order">
              <div class="number-order">0</div>
              <div class="confirm">Chờ xác nhận</div>
            </div>
            <div class="item-order">
              <div class="number-order">0</div>
              <div class="confirm">Chờ xác nhận</div>
            </div>
            <div class="item-order">
              <div class="number-order">0</div>
              <div class="confirm">Chờ xác nhận</div>
            </div>
            <div class="item-order">
              <div class="number-order">0</div>
              <div class="confirm">Chờ xác nhận</div>
            </div>
            <div class="item-order">
              <div class="number-order">0</div>
              <div class="confirm">Chờ xác nhận</div>
            </div>
          </div>
        </div>
        <div class="section-order">
          <h3>Phân Tích Bán Hàng</h3>
          <span>Dữ liệu tổng quan về các đơn đã đặt</span>
          <div class="status-order">
            <div class="item-order">
              <div class="title-check">Lượt truy cập</div>
              <div class="number-order">0</div>
              <div class="confirm">Vs hôm qua 30.00%</div>
            </div>
            <div class="item-order">
              <div class="title-check">Lượt truy cập</div>
              <div class="number-order">0</div>
              <div class="confirm">Vs hôm qua 41.67%</div>
            </div>
            <div class="item-order">
              <div class="title-check">Lượt truy cập</div>
              <div class="number-order">0</div>
              <div class="confirm">Vs hôm qua 41.67%n</div>
            </div>
            <div class="item-order">
              <div class="title-check">Lượt truy cập</div>
              <div class="number-order">0</div>
              <div class="confirm">Vs hôm qua 41.67%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-right">
        <strong>Nói KHÔNG với Hẹn lại ngày lấy hàng!</strong>
        <p style="color:grey;font-size:13px">
          Để mang lại trải nghiệm tốt nhất cho người mua, Shop cần giao hàng đúng ngày đã hẹn với đơn vị vận chuyển (ĐVVC). Nếu Shop không hẹn lại ngày lấy hàng với ĐVVC, vui lòng điền đầy đủ thông tin TẠI ĐÂY để được hỗ trợ!
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import "./index.scss";
import Header from "./../../components/Header/index.vue";
import SideBar from "./../../components/SideBar/index.vue";
export default defineComponent({
  name: "Index",
  components: {
    Header,
    SideBar,
  },
  setup() {},
});
</script>