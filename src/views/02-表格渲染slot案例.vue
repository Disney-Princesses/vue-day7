<template>
  <div>
    <keep-alive>
      <myTable :arr="list"> 
        <template v-slot:name='scoped'>
          <input type="text" :value='scoped.row.name'>
        </template>
        <template v-slot:age='scoped'>
          <input type="text" :value='scoped.row1.age'>
        </template>
        <template v-slot:imgurl='scoped'>
          <a v-if='scoped.row2.type==0' :href="scoped.row2.headImgUrl">{{scoped.row2.headImgUrl}}</a>
          <img v-else-if='scoped.row2.type==1' :src="scoped.row2.headImgUrl" alt="" width="50px">
          <span v-else-if='scoped.row2.type==2'>{{scoped.row2.headImgUrl}}</span>
        </template>
      </myTable>
    </keep-alive>
  </div>
</template>

<script>
import myTable from "./components/myTable.vue";
export default {
  data() {
    // 数据渲染成表单
    // 表单的每一项可以自定义
    // name选项如果没有设置，默认展示name
    //age选项如果没有配置，默认展示age
    // headIngUrl选项更具Typr去展示
    // 0：显示成a标签 //1显示成图片 //2显示成文本 必须用slot
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
  components: {
    myTable,
  },
  mounted(){
    let img=document.querySelector("#img");
  }
};
</script>