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
          <div class="name-category" v-for="item in tasks" :key="item.id" @click="filterSubcategory(item.id)">
            <div>{{item.name}}</div>
            <div>></div>
          </div>
        </div>
        <div class="category">
          <div class="name-category" v-for="item in subCategoies" :key="item.id" @click="filterChilSubcategory(item.id)">
            <div>{{item.name}}</div>
            <div>></div> 
          </div>
        </div>
        <div class="category">
          <div class="name-category" v-for="item in childCategories" :key="item.id" @click="filterChilSubcategory(item.id)">
            <div>{{item.name}}</div>
            <div>></div> 
          </div>
        </div>
      </div>
    </div>
    <div class="cate-seleted">
      <div>Đã chọn : <span style="color:red;">Giặt giũ & Chăm sóc nhà cửa > Thuốc diệt côn trùng > Hóa chất diệt côn trùng</span></div>
    </div>
    <div class="buton-next">
      <button @click="fetchDocuments()">Tiếp theo</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from "vue";
import "./index.scss";
import { useStore } from '@/store'
import { DocumentsActionTypes } from '@/store/modules/documents/action-types';
export default defineComponent({
  name: "addCateProduct",
  setup(){
    const state = reactive({
      title: 'anhquy',
      description: '',
      createdBy: '',
      assignedTo: '',
      subcate:[],
      cate:[]
    })
    const store = useStore()
    async function fetchDocuments() {
      try {
        var data = await store.dispatch(DocumentsActionTypes.FETCH_DOCUMENTS, '1');
        
        console.log(store.state.documents.categories)
      } catch (error) {
        console.error('fetchDocuments', error);
      }
    }
    const filterSubcategory = async (id:Number) =>{
      // state.subcate = tasks.filter(item => item.id == id)
      await store.dispatch(DocumentsActionTypes.FILTER_SUBCATEGORY, id)
    }

    const filterChilSubcategory = async (id:Number) =>{
      await store.dispatch(DocumentsActionTypes.FILTER_CHILDSUBCATEGORY, id)
    }

    const tasks = computed(() => {console.log(store.state.documents.categories); return store.state.documents.categories})
    const subCategoies = computed(() => {console.log(store.state.documents.subcategoris); return store.state.documents.subcategoris})
    const childCategories = computed(() => {console.log(store.state.documents.childCategoris); return store.state.documents.childCategoris})
    return {
      fetchDocuments,
      tasks,
      filterSubcategory,
      subCategoies,
      childCategories,
      filterChilSubcategory,
      ...toRefs(state)
    };
  }
});
</script>