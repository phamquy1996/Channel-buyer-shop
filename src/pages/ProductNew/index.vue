<template>
  <div class="container-add-product">
    <div class="add-product">
      <div class="infor-basic">
        <h3>Thông tin cơ bản</h3>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <input type="text" value="nameProduct" />
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <textarea v-model="description"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <p>
              {{ tasks.authorName }} > {{ tasks.name }} > Hóa chất diệt côn
              trùng
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
        <div class="form-group" v-if="!isShowclassifies">
          <div class="name">*Giá</div>
          <div class="form-input">
            <input type="number" placeholder="Nhập vào giá" v-model="price" />
          </div>
        </div>
        <div class="form-group" v-if="!isShowclassifies">
          <div class="name">*Kho hàng</div>
          <div class="form-input">
            <input
              type="number"
              placeholder="Nhập vào số lượng"
              v-model="qty"
            />
          </div>
        </div>
        <div class="form-group" v-if="isShowclassifies">
          <div class="name">Nhóm phân loại 1</div>
          <div class="form-classify">
            <div>
              <input
                type="text"
                placeholder="Nhập tên Nhóm phân loại hàng, ví dụ: màu sắc, kích thước v.v"
                v-model="classify"
              />
            </div>
            <div v-for="(item, index) in classifies" :key="index">
              <input
                type="text"
                placeholder="Nhập vào"
                v-model="item.name"
                @keyup="data"
              />
            </div>
            <div @click="addClassify()" class="add-form">Đã thêm</div>
          </div>
        </div>
        <div @click="showFormSubClassifies()" v-if="isShow">
          <div class="form-group">
            <div class="name">Nhóm phân loại 2</div>
            <div class="add-form" style="width: 84%">Thêm</div>
          </div>
        </div>
        <div class="form-group" v-if="isShowclassifies">
          <div class="name" v-if="!isShow">Nhóm phân loại 2</div>
          <div v-if="isShowSubClassifies" class="form-classify">
            <div>
              <input
                type="text"
                placeholder="Nhập tên phân loại, ví dụ: Size, v.v"
                v-model="subclassify"
              />
            </div>
            <div v-for="(item, index) in subClassifies" :key="index">
              <input
                type="text"
                placeholder="Nhập vào"
                v-model="item.name"
                @keyup="data($event, index)"
              />
            </div>
            <div @click="addSubClassify()" class="add-form">Đã thêm</div>
          </div>
        </div>
        <div class="form-group" v-if="!isShowclassifies">
          <div class="name">Phân loại hàng</div>
          <div class="form-input" @click="showFormClassifies()">
            <div class="add-form">Thêm nhóm phân loại hàng</div>
          </div>
        </div>
        <div class="form-group" v-if="isShowclassifies">
          <div class="name">*Tên sản phẩm</div>
          <div class="form-input">
            <div class="table-classify">
              <div class="title-table">
                <div>{{ classify }}</div>
                <div v-if="subClassifies.length">{{ subclassify }}</div>
                <div>Gía</div>
                <div>Kho hàng</div>
              </div>
              <div
                class="content-table"
                v-for="item in classifies"
                :key="item.id"
              >
                <div class="content-left-table">
                  {{ item.name }}
                </div>
                <div
                  class="content-right-table"
                  v-if="item.subClassifies.length > 0"
                >
                  <div
                    class="content-table-list"
                    v-for="(prod, index) in item.subClassifies"
                    :key="index"
                  >
                    <div class="content-right-item">{{ prod.name }}</div>
                    <div class="content-right-item">
                      <input type="number" v-model="prod.price" />
                    </div>
                    <div class="content-right-item">
                      <input type="number" v-model="prod.qty" />
                    </div>
                  </div>
                </div>
                <div class="content-right-table" v-else>
                  <div class="content-table-list">
                    <div class="content-right-item">
                      <input type="number" v-model="item.price" />
                    </div>
                    <div class="content-right-item">
                      <input type="number" v-model="item.qty" />
                    </div>
                    <!-- <div class="content-right-item">áddsaasd</div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="infor-basic">
        <h3>Quản lý hình ảnh</h3>
        <div class="form-group-image">
          <div class="name">*Tên sản phẩm</div>
          <div class="content-img">
            <input
              type="file"
              multiple
              id="image_file"
              style="display: none"
              @change="onUploadIMGCover($event, index)"
            />
            <div class="images">
              <label for="image_file" v-if="!image">
                <div class="image">
                  <div class="plus-img">+</div>
                </div>
              </label>
              <div v-else>
                <img
                  :src="`http://localhost:8082/upload/static/images/gallery/${image}`"
                  alt=""
                  style="width: 100%; height: 100%"
                  class="image"
                />
                <div><i class="far fa-trash-alt" @click="image = ''"></i></div>
              </div>
              <div class="title-img">Ảnh chính</div>
            </div>
            <!-- <video width="320" height="240" controls>
              <source src="http://localhost:8082/upload/static/images/gallery/CÔ GÁI GUICCI - SOÁI NHI (Cover).mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video> -->
            <div class="images" v-for="(item, index) in images" :key="index">
              <div v-if="item.image">
                <img
                  :src="`http://localhost:8082/upload/static/images/gallery/${item.image}`"
                  alt=""
                  style="width: 100%; height: 100%"
                  class="image"
                />
                <div>
                  <i class="far fa-trash-alt" @click="removeImg(item)"></i>
                </div>
              </div>
              <div v-else>
                <label for="images_files">
                    <div class="image">
                      <div class="plus-img">+</div>
                    </div>
                </label>
              </div>
              <div class="title-img">Hình ảnh</div>
            </div>
            <label
              for="images_files"
              v-for="(item, index) in isShowFormUpload"
              :key="index"
            >
              <input
                type="file"
                multiple
                id="images_files"
                style="display: none"
                @change="onFileChanged($event, index)"
              />
              <div class="images">
                <div class="image">
                  <div class="plus-img">+</div>
                </div>
                <div class="title-img">Hình ảnh</div>
              </div>
            </label>
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
          <div class="name" v-if="isShowclassifies">Nhóm phân loại</div>
          <div class="content-img">
            <div
              class="images"
              v-for="(item, index) in classifies"
              :key="index"
            >
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Phân loại hàng</div>
            </div>
          </div>
        </div>
        <div class="form-group-image">
          <div class="name">Bảng quy đổi kích cỡ</div>
          <div class="content-img">
            <div class="images">
              <div class="image">
                <div class="plus-img">+</div>
              </div>
              <div class="title-img">Xem ví dụ ở đây</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Shipping -->
      <div class="infor-basic">
        <h3>Vận chuyển</h3>
        <div class="form-group">
          <div class="name">*Cân nặng sau khi đóng gói</div>
          <div class="form-input">
            <input
              type="number"
              placeholder="Nhập vào cân nặng"
              v-model="gram"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Phí vận chuyển</div>
          <div class="form-input">
            <!-- <textarea></textarea> -->
            <div
              style="display: flex"
              v-for="item in shippings"
              :key="item.id"
              class="wrap-shipping"
            >
              <div class="shipping-left">
                <div>{{ item.name }}</div>
                <div>(Tối đa {{ item.maxgram }}g)</div>
                <div>Shoppe vận chuyển</div>
              </div>
              <div class="shipping-right">
                <div v-if="gram <= item.maxgram && gram >= item.mingram">
                  ₫{{ item.money_shipping }}
                </div>
                <div v-if="gram > item.maxgram">Khối lượng vượt quá</div>
                <div v-if="gram > 0 && gram < item.mingram">
                  Cân nặng không hợp lệ
                </div>
                <div v-if="gram == ''">Nhập khối lượng</div>
                <div><ToggleSwitch :status="item" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="infor-basic">
        <h3>Thông tin khác</h3>
        <div class="form-group">
          <div class="name">*Hàng đặt trước</div>
          <div class="radio">
            <input type="radio" name="order" v-model="isOrderBefore" value="1"/> Đặt trước
            <input type="radio" name="order" v-model="isOrderBefore" value="0"/> Không
          </div>
        </div>
        <div class="form-group">
          <div class="name">*Tình trạng</div>
          <div class="form-input">
            <select v-model="isNew" >
              <option value="1">Mới</option>
              <option value="0">Cũ</option>
            </select>
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
      </div>
      <div class="infor-basic bottom">
        <div>
          <button @click="click()">Hủy</button>
          <button @click="saveProduct()">Lưu & Ẩn</button>
          <button>Lưu & Hiển thị</button>
        </div>
      </div>
    </div>
    <div class="check-div"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, toRefs, onMounted } from "vue";
import "./index.scss";
import { useStore } from "@/store";
import axios from "axios";
import {
  Shipping,
  Classify,
  SubClassify,
} from "./../../store/modules/documents/state";
import { DocumentsActionTypes } from "@/store/modules/documents/action-types";
import ToggleSwitch from "./../../components/ToggleSwitch/index.vue";

interface Image {
  image: String;
}
interface State {
  images: Array<Image>;
  isShowFormUpload: any;
  gram: Number;
  image: String;
  description: String;
  classifies: Classify[];
  subClassifies: SubClassify[];
  isShowclassifies: boolean;
  isShowSubClassifies: boolean;
  name: String;
  isShow: Boolean;
  classify: string;
  subclassify: string;
  price: string;
  qty: string;
  isNew: number;
  isOrderBefore: number
}
export default defineComponent({
  name: "addCateProduct",
  components: {
    ToggleSwitch,
  },
  setup() {
    const state: State = reactive({
      images: [],
      image: "",
      isShowFormUpload: 8,
      gram: 0,
      isShow: false,
      description: "",
      isShowclassifies: false,
      isShowSubClassifies: false,
      classifies: [],
      subClassifies: [],
      name: "anhquy",
      classify: "",
      subclassify: "",
      price: "",
      qty: "",
      isNew: 1,
      isOrderBefore: 0
    });

    const store = useStore();
    onMounted(async () => {
      await store.dispatch(DocumentsActionTypes.FETCH_SHIPPINGS, 1);
    });

    const removeImg = (item:Image) =>{
      let index = state.images.indexOf(item)
      console.log(state.images)
      state.images.splice(index,1)
      state.isShowFormUpload + 1
      // state.images.push(index,1)
      // let image = {
      //   image:''
      // }
      // state.images.unshift(image)
      // state.images.unshift(image)
    }
    const addClassify = () => {
      var classify: Classify = {
        id: Math.random(),
        status: 1,
        name: "",
        qty: 1,
        price: 0,
        subClassifies: [],
        image: "",
      };

      var subClassify = {
        id: Math.random(),
        status: 1,
        name: "",
        qty: 1,
        price: 0,
      };
      classify.subClassifies.push();

      for (var i = 0; i < state.subClassifies.length; i++) {
        var subClassify = {
          id: Math.random(),
          status: 1,
          name: "",
          qty: 1,
          price: 0,
        };
        classify.subClassifies.push(subClassify);
      }
      state.classifies.push(Object.assign({}, classify));
    };

    const addSubClassify = () => {
      var subClassify = {
        id: Math.random(),
        status: 1,
        name: "",
        qty: 1,
        price: 0,
      };
      state.subClassifies.push(Object.assign({}, subClassify));
      state.classifies.map((item) => {
        var subClassify = {
          id: Math.random(),
          status: 1,
          name: "",
          qty: 1,
          price: 0,
        };
        item.subClassifies.push(subClassify);
      });
      console.log(state.classifies);
    };
    const onUploadIMGCover = async (event: any, id: Number) => {
      event.target.files;
      var formData = new FormData();
      for (const key of Object.keys(event.target.files)) {
        formData.append("files", event.target.files[key]);
      }
      const header = { "Content-Type": "multipart/form-data" };
      const data = await axios.post("http://localhost:8082/upload/", formData, {
        responseType: "text",
      });
      state.image = data.data[0].image;
    };

    const onFileChanged = async (event: any, id: Number) => {
      event.target.files;
      var formData = new FormData();
      for (const key of Object.keys(event.target.files)) {
        formData.append("files", event.target.files[key]);
      }
      const header = { "Content-Type": "multipart/form-data" };
      const data = await axios.post("http://localhost:8082/upload/", formData, {
        responseType: "text",
      });
      data.data.forEach((element: any) => {
        state.images.push(element);  
      });
      state.isShowFormUpload = 8;
      state.isShowFormUpload = state.isShowFormUpload - state.images.length;
    };

    const showFormClassifies = () => {
      state.isShowclassifies = true;
      state.isShow = true;
      state.price = '',
      state.qty = ''
      var classify = {
        id: Math.random(),
        status: 1,
        name: "",
        qty: 1,
        price: 0,
        subClassifies: [],
        image: "",
      };
      state.classifies.push(Object.assign({}, classify));
    };

    const showFormSubClassifies = () => {
      state.isShowSubClassifies = true;
      state.isShow = false;
      var subClassify = {
        id: Math.random(),
        status: 1,
        name: "",
        qty: 1,
        price: 0,
      };
      // state.subClassifies.push(Object.assign({}, subClassify));
      // state.classifies.map((item) => {
      //   item.subClassifies.push(subClassify);
      // });
    };

    const data = (event: any, id: number) => {
      state.classifies.map((item) => {
        const index = item.subClassifies.findIndex(
          (item, index) => index === id
        );
        if (index === -1) return;
        item.subClassifies[index] = {
          ...item.subClassifies[index],
          name: event.target.value,
        };
      });
    };

    const saveProduct = async () => {
      const arrayCloneClassify  = [...state.classifies]; 
      arrayCloneClassify.sort(function (a, b) {
          return a.price - b.price
      })
      var lowest = Number.POSITIVE_INFINITY;
      var highest = Number.NEGATIVE_INFINITY;
      var tmp;
      const arrayCloneSub = [...state.classifies]
      arrayCloneSub.map((item)=>{
        if(item.subClassifies[0]){
          for (var i=item.subClassifies.length-1; i>=0; i--) {
            tmp = item.subClassifies[i].price;
            if (tmp < lowest) lowest = tmp;
            if (tmp > highest) highest = tmp;
        }  
        }
      })
      console.log(highest, lowest);
      console.log(arrayCloneClassify[0].price +" value "+ arrayCloneClassify[arrayCloneClassify.length - 1].price) 
      var data = {
        name:
          "Áo thun Unisex N7 Basic Tee phông trơn nam nữ tay lỡ oversize form rộng 12 màu",
        imagesDTO: state.images,
        image: state.image,
        clasifyDTO: state.classifies,
        shippings: shippings.value,
        description: state.description,
        childcategory_id: 2,
        subcategory_id: 2,
        category_id: 1,
        userSaler_id: 2,
        classfly: state.classify,
        subclassify: state.subclassify,
        price: state.price,
        qty: state.qty,
        pricemax: state.subClassifies.length ? highest : arrayCloneClassify[arrayCloneClassify.length - 1].price,
        pricemin: state.subClassifies.length ? lowest : arrayCloneClassify[0].price
      };
      
      // const anhquy = state.classifies.sort(function (a, b) {
      //     return a.price - b.price
      // })
      // const anhquy = state.classifies
      await store.dispatch(DocumentsActionTypes.ADD_PRODUCT, data);
    };
    const tasks = computed(() => {
      return store.state.documents.category;
    });
    const nameProduct = computed(() => {
      return store.state.documents.nameProduct;
    });
    const shippings = computed(() => {
      return store.state.documents.shippings;
    });
    return {
      tasks,
      nameProduct,
      onFileChanged,
      shippings,
      onUploadIMGCover,
      showFormClassifies,
      showFormSubClassifies,
      addClassify,
      addSubClassify,
      data,
      saveProduct,
      removeImg,
      ...toRefs(state),
    };
  },
});
</script>