<template>
  <div class="status">
    <div class="select-status">Tất cả</div>
    <div class="select-status">Chờ xác nhận</div>
    <div class="select-status">Chờ lấy tiền</div>
    <div class="select-status">Đang giao</div>
    <div class="select-status">Đã giao</div>
    <div class="select-status">Đơn hủy</div>
    <div class="select-status">Trả hàng/Hoàn tiền</div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import './index.scss'
export default defineComponent({
  name:'Menu'
})
</script>