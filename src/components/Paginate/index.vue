<template>
  <div class="pagination-order">
    <div>
      <i class="fas fa-arrow-left"></i>
    </div>
    <div class="number-pagi">
      <div>1</div>
      <div>2</div>
    </div>
    <div>
      <i class="fas fa-arrow-right"></i>
    </div>
  </div> 
</template>
<script>
  import {defineComponent} from 'vue'
  import './index.scss'
  export default defineComponent({
    name:'Paginate',
  })
</script>