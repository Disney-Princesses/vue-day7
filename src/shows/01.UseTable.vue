<template>
  <div>
    <UseTable>
      <template v-slot:uesrname="scope">
        <input type="text" v-model="scope.row.name" />
      </template>
      <template v-slot:userage="scope">
        <input type="text" v-model="scope.row.age" />
      </template>
      <template v-slot:headimg="scope">
        <img v-if="scope.row.type==1" :src="scope.row.headImgUrl" alt="" width="50px">
        <a v-else-if="scope.row.type==0" :href="scope.row.headImgUrl">{{scope.row.headImgUrl}}</a>
        <span v-else>{{scope.row.headImgUrl}}</span>
      </template>
      
    </UseTable>
  </div>
</template>

<script>
import UseTable from "../components/UseTable.vue";
export default {
  components: {
    UseTable
  },
};
</script>

<style>
</style>