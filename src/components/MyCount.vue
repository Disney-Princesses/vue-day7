<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      :disabled="numObj.goods_count === 1"
      @click="numObj.goods_count--"
    >
      -
    </button>

    <input
      type="number"
      class="form-control inp"
      v-model.number="numObj.goods_count"
    />
    <button type="button" class="btn btn-light" @click="numObj.goods_count++">
      +
      
    </button>
  </div>
</template>

<script>
export default {
  props: {
    numObj: Object,
  },
  watch: {
    numObj: {
      deep: true,
      handler() {
        if (this.numObj.goods_count < 0) {
          this.numObj.goods_count = 1;
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