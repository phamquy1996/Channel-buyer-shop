<template>
  <label class="switch">
  <input type="checkbox"  :checked="status.status == true" @click="setShipping(status)">
  <span class="slider round"></span>
</label>
</template>
<script>
import './index.scss'
import { defineComponent } from 'vue'
import { DocumentsMutationTypes } from './../../store/modules/documents/mutation-types'
import { useStore } from '@/store'
export default defineComponent({
  props:{
    status : {type:Object, required: true}
  },
  setup(){
    const store = useStore()
    const setShipping = async (item) =>{
      console.log(item)
      await store.commit(DocumentsMutationTypes.SET_SHIPPING,item)
    }
    return{
      setShipping
    }
  }
})
</script>