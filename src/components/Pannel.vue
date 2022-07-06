<template>
  <div>
      <table border="1" class="table">
          <thead>
              <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>头像</th>
              </tr>
          </thead>
          <thead>
              <tr v-for="obj in arr" :key="obj.id">
                  <td>
                    <slot name="userId" :row="obj">{{obj.id}}</slot>
                  </td>
                  <td>
                    <slot name="userName" :row="obj">{{obj.name}}</slot>
                  </td>
                  <td>
                    <slot name="userAge" :row="obj">{{obj.age}}</slot>
                  </td>
                  <td>
                    <slot name="userImg" :row="obj"></slot>
                  </td>
              </tr>
          </thead>
      </table>
  </div>
</template>

<script>
export default {
    props: {
        arr: Array
    }
}
</script>