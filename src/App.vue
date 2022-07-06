<template>
  <div>
    <MyHeader background="red" title="购物车"></MyHeader>
    <div class="mian">
      <MyGoods v-for="obj in list" :key="obj.id" :listObj="obj"></MyGoods>
    </div>
    <MyFooter @changeAll="allFn" :arr="list"></MyFooter>
  </div>
</template>

<script>
// 引入子组件
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyGoods from "./components/MyGoods";

export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyHeader,
    MyFooter,
    MyGoods,
  },
  created() {
    this.$axios({
      url: "api/cart",
    }).then((res) => {
      //   console.log(res);
      this.list = res.data.list;
    });
  },
  methods: {
    allFn(bool) {
      this.list.forEach((item) => {
        item.goods_state = bool;
      });
    },
  },
};
</script>

<style scoped>
.mian {
  padding: 45px 0 50px 0;
}
</style>