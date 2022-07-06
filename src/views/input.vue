<template>
  <div>
    <button @click="comName = 'phoneT'">手机注册</button>
    <button @click="comName = 'emailT'">邮箱注册</button>
    <KeepAlive>
      <component :is="comName"></component>
    </KeepAlive>
  </div>
</template>

<script>
import phoneT from "../components/input/phoneT.vue";
import emailT from "../components/input/emailT.vue";
export default {
  components: {
    phoneT,
    emailT,
  },
  data() {
    return {
      comName: "phoneT",
    };
  },
};
</script>

<style></style>
