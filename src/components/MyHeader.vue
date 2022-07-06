<template>
  <div class="my-header" :style="{backgroundColor:background,color}">{{title}}</div>
</template>

<script>
export default {
  // 利用对象的形式对props的变量的值进行校验
  props: {
    // 约束 必须传入字符串的值
    background: String,
    color: {
      type: String,
      // 默认值
      default: "#fff",
    },
    title: {
      type: String,
      // 必须传入该值
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>