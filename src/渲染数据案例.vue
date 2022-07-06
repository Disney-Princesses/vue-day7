<template>
  <div>
    <fromData>
      <template v-slot:id="scope">
        {{ scope.row }}
      </template>
      <template v-slot:username="scope">
        <input type="text" v-model="scope.row">
      </template>
      <template v-slot:age="scope">
        <input type="text" v-model="scope.row">
      </template>
      <template v-slot:img="scope">
        <a v-if="scope.row.type == 0" :href="scope.row.headImgUrl">点击</a>
        <img v-else-if="scope.row.type == 1" :src="scope.row.headImgUrl" alt="">
        <span v-else>{{ scope.row.headImgUrl }}</span>
      </template>
    </fromData>
  </div>
</template>

<script>
import fromData from './components/fromData.vue'
export default {
  components: {
    fromData
  },

}
</script>

<style>
</style>