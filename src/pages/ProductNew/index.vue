<template>
  <div class="container-add-product">
    <div class="add-product">
      <div class="infor-basic">
        <h3>Thông tin cơ bản</h3>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <input type="text" value="nameProduct"/>
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <textarea></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <p>
              Giặt giũ & Chăm sóc nhà cửa > Thuốc diệt côn trùng > Hóa chất diệt
              côn trùng
            </p>
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Thương Hiệu</div>
          <div class="form-input">
            <select>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="infor-basic">
        <h3>Thông tin bán hàng</h3>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <input type="text" />
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <textarea></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <p>
              {{tasks.authorName}} > {{tasks.name}} > Hóa chất diệt
              côn trùng
            </p>
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Thương Hiệu</div>
          <div class="form-input">
            <select>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="infor-basic">
        <h3>Quản lý hình ảnh</h3>
        <div class="form-group-image">
          <div class="name">*Tên sản phẩm</div>
          <div class="content-img">
            <div class="images">
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Ảnh bìa</div>
            </div>
           
            <div class="images" v-for="(item,index) in images" :key="index">
              <label for="images_files">
                <img :src="`http://localhost:8082/upload/static/images/gallery/${item.image}`" alt="" style="width:100%;height:100%" class="image">
              </label>
              <div class="title-img">Hình ảnh {{index + 1}}</div>
            </div>
            <label for="images_files" v-for="(item,index) in isShowFormUpload" :key="index">
               <input type="file" multiple id="images_files" style="display:none;" @change="onFileChanged($event,index)">
                <div class="images">
                  <div class="image">
                    <div class="plus-img">+</div>
                  </div>
                  <div class="title-img">Hình ảnh {{index + 1}}</div>
                </div>
            </label>
            
            <!-- <div class="images">
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Ảnh bìa</div>
            </div>
            <div class="images">
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Ảnh bìa</div>
            </div>
            <div class="images">
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Ảnh bìa</div>
            </div>
            <div class="images">
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Ảnh bìa</div>
            </div> -->
          </div>
        </div>
        <div class="form-group-image">
          <div class="name">Video</div>
          <div class="content-img">
            <div class="images">
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Video bìa</div>
            </div>
          </div>
        </div>
        <div class="form-group-image">
          <div class="name">Nhóm phân loại</div>
          <div class="content-img">
            <div class="images">
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Phân loại hàng</div>
            </div>
          </div>
        </div>
      </div>
      <div class="infor-basic">
        <h3>Thông tin khác</h3>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <input type="text" />
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <textarea></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <p>
              Giặt giũ & Chăm sóc nhà cửa > Thuốc diệt côn trùng > Hóa chất diệt
              côn trùng
            </p>
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Thương Hiệu</div>
          <div class="form-input">
            <select>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
              <option value="Thiết lập thương hiệu">
                Thiết lập thương hiệu
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="infor-basic bottom">
        <div>
          <button @click="click()">Hủy</button>
          <button>Lưu & Ẩn</button>
          <button>Lưu & Hiển thị</button>
        </div>
      </div>
    </div>
    <div class="check-div"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from "vue";
import "./index.scss";
import { useStore } from '@/store'
import axios from 'axios'
interface Image{
  image: String
}
interface State{
  images: Array<Image>,
  isShowFormUpload: any
}
export default defineComponent({
  name: "addCateProduct",
  setup(){
    const state:State = reactive({
      images: [],
      isShowFormUpload: 8
    })
    const store = useStore()
    const onFileChanged = async (event: any, id: Number) =>  {
      console.log(id)
      event.target.files;
      var formData = new FormData();
      for (const key of Object.keys(event.target.files)) {
        console.log(event.target.files[key])
        formData.append('files', event.target.files[key])
      }
      const header = {'Content-Type': 'multipart/form-data'}
      
      console.log(formData)

      const data = await axios.post('http://localhost:8082/upload/', formData, {responseType: 'text'})
      console.log(data)
      data.data.forEach((element:any) => {
        // console.log(state.images)
        state.images.push(element)
        // [state.images,...element]
        // console.log(state.images)
        // state.images.push(element)
      });
      // state.images = state.images.push(data.data)
      state.isShowFormUpload = 8
      state.isShowFormUpload = state.isShowFormUpload - state.images.length
    }
    const click = () =>{
      console.log(2)
    }
    const tasks = computed(() => {console.log(store.state.documents.category); return store.state.documents.category})
    const nameProduct = computed(() => {console.log(store.state.documents.nameProduct); return store.state.documents.nameProduct})
    console.log(tasks)
    return{
      tasks,
      click,
      nameProduct,
      onFileChanged,
      ...toRefs(state)
    }
  }
});
</script>