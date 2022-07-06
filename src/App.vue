<template>
  <div>
    <!-- 手机邮箱注册切换案例 -->
    <!-- <Register></Register> -->
    <!-- 作用域卡槽使用场景 -->
    <!-- <TableList></TableList> -->
    <!-- 购物车案例  -->
    <ShopCar></ShopCar>
  </div>
</template>

<script>
import Register from './Register.vue'
import TableList from './TableList.vue'
import ShopCar from './ShopCar.vue'
export default {
  components: {
    Register,
    TableList,
    ShopCar
  }
}
</script>

<style>

</style>