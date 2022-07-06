<template>
  <div>
    <Pannel :arr="list">
    <template v-slot:userId="scope">
      <label>{{scope.row.id}}</label>
    </template>
    <template v-slot:userName="scope">
      <input type="text" v-model="scope.row.name">
    </template>
    <template v-slot:userAge="scope">
      <input type="text" v-model="scope.row.age">
    </template>
    <template v-slot:userImg="scope">
      <img :src="scope.row.headImgUrl" alt="" v-if="scope.row.type == 1" width="200px">
      <a :href="scope.row.headImgUrl" v-else-if="scope.row.type == 0">{{scope.row.headImgUrl}}</a>
      <span v-else-if="scope.row.type == 2">{{scope.row.headImgUrl}}</span>
    </template>
    </Pannel>
  </div>
</template>

<script>
import Pannel from './components/Pannel.vue'
export default {
    components: {
        Pannel
    },
  data() {
    return {
      list: [
        {
          id: 100,
          name: "小传同学",
          age: 18,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
          type: 0, // 0 显示成a标签
        },
        {
          id: 101,
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
          type: 1, // 1 显示成图片
        },
        {
          id: 102,
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
          type: 1, // 1 显示成图片
        },
        {
          id: 103,
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
          type: 2, // 2 显示成文本
        },
      ],
    };
  },
};
</script>

<style></style>
