<template>
  <div>
    <tableS>
      <template v-slot:id="scope">
        {{ scope.row.id }}
      </template>
      <template v-slot:name="scope">
        {{ scope.row.name }}
      </template>
      <template v-slot:age="scope">
        {{ scope.row.age }}
      </template>
      <template v-slot:toux="scope">
        <img
          v-if="scope.row.type == 1"
          :src="scope.row.headImgUrl"
          alt=""
          width="40px"
        />
        <a v-else-if="scope.row.type == 0" href="scope.row.headImgUrl">{{
          scope.row.headImgUrl
        }}</a>
        <span v-else-if="scope.row.type == 2">{{ scope.row.headImgUrl }}</span>
      </template>
    </tableS>
  </div>
</template>

<script>
import tableS from "../components/table.vue";
export default {
  components: {
    tableS,
  },
};
</script>

<style></style>
