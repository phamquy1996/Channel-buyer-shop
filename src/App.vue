<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  

  <Header></Header>
  <div class="container">
    <SideBar></SideBar>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Header from "./components/Header/index.vue";
import SideBar from "./components/SideBar/index.vue";
export default defineComponent({
  name: "Index",
  components: {
    Header,
    SideBar,
  },
  setup() {},
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  width: 100%;
  display: flex;
}
</style>
