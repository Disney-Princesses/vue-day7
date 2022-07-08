<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      @click="good.goods_count--"
      :disabled="good.goods_count <= 1"
    >
      -
    </button>
    <input type="number" class="form-control inp" v-model="good.goods_count" />
    <button type="button" class="btn btn-light" @click="good.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    good: {
      deep: true,
      handler(val) {
        if (val.goods_count < 1) {
          val.goods_count = 1;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>