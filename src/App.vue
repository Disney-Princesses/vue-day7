<template>
  <div class="box">
    <div class="tab">
      <span :class="{ active: isSel == 'PhoneRegister' }" @click="clickFn1()"
        >手机注册</span
      >
      <span :class="{ active: isSel == 'EmailRegister' }" @click="clickFn2()"
        >邮箱注册</span
      >
    </div>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import PhoneRegister from "./components/PhoneRegister.vue";
import EmailRegister from "./components/EmailRegister.vue";
export default {
  data() {
    return {
      comName: "PhoneRegister",
      isSel: "PhoneRegister",
    };
  },
  components: {
    PhoneRegister,
    EmailRegister,
  },
  methods: {
    clickFn1() {
      this.comName = "PhoneRegister";
      this.isSel = "PhoneRegister";
    },
    clickFn2() {
      this.comName = "EmailRegister";
      this.isSel = "EmailRegister";
    },
  },
};
</script>

<style>
.box {
  margin: 30px;
}
.tab {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
span {
  font-size: 20px;
}
.active {
  color: #0043ed;
  border-bottom: 3px solid #0043ed;
}
</style>