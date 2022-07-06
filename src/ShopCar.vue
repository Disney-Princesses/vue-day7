<template>
  <div>
    <MyHeader ></MyHeader>
    <MyGoods style="margin-top:45px" :obj="item" v-for="item in list" :key="item.id"></MyGoods>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/shopCar/MyHeader.vue'
import MyGoods from './components/shopCar/MyGoods.vue'
import MyFooter from './components/shopCar/MyFooter.vue'
export default {
  data () {
    return {
      list:[]
    }
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  created () {
    this.$axios({
      url: '/api/cart'
    }).then(res => {
      // console.log(res);
      this.list = res.data.list
    })
  },
}
</script>

<style lang="less" scoped>

</style>