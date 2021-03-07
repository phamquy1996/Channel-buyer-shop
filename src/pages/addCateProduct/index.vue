<template>
  <div class="container-add-cate-pr">
    <h3>Thêm 1 sản phẩm mới</h3>
    <span>Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn.</span>
    <div class="form-input-name">
      <div class="name-t">Tên sản phẩm:</div>
      <div class="input-t">
        <input type="text" v-model="nameProduct"/>
      </div>
    </div>
    <div class="choose-category">
      <div class="form-search-cate">
        <input type="text" placeholder="Tên ngành hàng"  />
      </div>
      <div class="category-show">
        <div class="category">
          <div class="name-category" v-for="item in tasks" :key="item.id" @click="filterSubcategory(item)">
            <div>{{item.name}}</div>
            <div>></div>
          </div>
        </div>
        <div class="category">
          <div class="name-category" v-for="item in subCategoies" :key="item.id" @click="filterChilSubcategory(item)">
            <div>{{item.name}}</div>
            <div>></div> 
          </div>
        </div>
        <div class="category">
          <div class="name-category" v-for="item in childCategories" :key="item.id" @click="chooseChildCate(item)" >
            <div>{{item.name}}</div>
            <div>></div> 
          </div>
        </div>
      </div>
    </div>
    <div class="cate-seleted">
      <div >Đã chọn : <span style="color:red;">{{ cateName }} > {{ subcateName}} > {{ childCateName }}</span></div>
    </div>
    <div class="buton-next">
      <router-link :to="{ name: '/product/new'}"><button @click="fetchDocuments()" >Tiếp theo</button></router-link>
    </div>
  </div>
</template>
<script lang="ts">
interface Category {
    id: Number,
    name: string,
}

interface State {
  title: String,
  description: String,
  createdBy: String,
  assignedTo: String,
  subcate:[],
  cateName:String,
  subcateName:String,
  childCateName:String,
  cate:[],
  nameProduct:String
}
import { defineComponent, computed, reactive, toRefs } from "vue";
import "./index.scss";
import { useStore } from '@/store'
import { DocumentsActionTypes } from '@/store/modules/documents/action-types';

export default defineComponent({
  name: "addCateProduct",
  setup(){
    const state:State = reactive({
      title: 'anhquy',
      description: '',
      createdBy: '',
      assignedTo: '',
      subcate:[],
      cateName:'',
      subcateName:'',
      childCateName:'',
      cate:[],
      nameProduct:''
    })
    const store = useStore()
    async function fetchDocuments() {
      try {
        var data = await store.dispatch(DocumentsActionTypes.FETCH_DOCUMENTS, '1');
        
        console.log(store.state.documents.categories)
      } catch (error) {
        console.error('fetchDocuments', error);
      }
      console.log(state.nameProduct);
      await store.dispatch(DocumentsActionTypes.SET_NAME_PRODUCT, state.nameProduct);
    }
    const filterSubcategory = async (item:any) =>{
      // state.subcate = tasks.filter(item => item.id == id)
      state.cateName = item.name
      await store.dispatch(DocumentsActionTypes.FILTER_SUBCATEGORY, item.id)
    }

    const nameProductKeyup = async (data:any) =>{
      console.log(data.value)
    }
    const filterChilSubcategory = async (item:any) =>{
      state.subcateName = item.name
      await store.dispatch(DocumentsActionTypes.FILTER_CHILDSUBCATEGORY, item.id)
    }

    const chooseChildCate = async (item:any) =>{
      state.childCateName = item.name
    }
    const tasks = computed(() => {return store.state.documents.categories})
    const subCategoies = computed(() => {console.log(store.state.documents.subcategoris); return store.state.documents.subcategoris})
    const childCategories = computed(() => {console.log(store.state.documents.childCategoris); return store.state.documents.childCategoris})
    return {
      fetchDocuments,
      tasks,
      filterSubcategory,
      subCategoies,
      childCategories,
      filterChilSubcategory,
      chooseChildCate,
      nameProductKeyup,
      ...toRefs(state)
    };
  }
});
</script>