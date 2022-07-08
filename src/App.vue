<template>
  <div>
    <MyHeader :background="background" :color="color">
      <template v-slot:title> 购物车案例 </template>
    </MyHeader>
    <MyGoods
      style="margin-top: 45px"
      v-for="item in list"
      :key="item.id"
      :good='item'
    ></MyGoods>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/shoping/MyHeader.vue";
import MyGoods from "./components/shoping/MyGoods.vue";
import MyFooter from "./components/shoping/MyFooter.vue";
export default {
  data() {
    return {
      background: "#007bff",
      color: "#fff",
      list: [],
    };
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  created() {
    this.$axios({
      url: "/api/cart",
    }).then((res) => {
      this.list = res.data.list;
    });
  },
};
</script>

<style>
</style>