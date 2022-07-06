<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>
            <slot name="name" :row="item">name</slot>
          </td>
          <td>
            <slot name="age" :row1="item">age</slot>
          </td>
          <td>
            <slot name="imgurl" :row2="item"></slot>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    arr: Array,
  },
};
</script>