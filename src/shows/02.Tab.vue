<template>
  <div class="tabs">
    <button @click="comName = 'PhoneReg'">手机注册</button>
    <button @click="comName = 'EmailReg'">邮箱注册</button>
    <keep-alive>
      <component :is="comName">
        <PhoneReg>
          <template v-slot:zd>
            <!-- <el-form-item label="自定义">
              <el-input v-model="ruleForm"></el-input>
            </el-form-item> -->
            <input type='text'>
          </template>
        </PhoneReg>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import PhoneReg from "../components/tab/Phone.vue";
import EmailReg from "../components/tab/Email";

export default {
  data() {
    return {
      comName: "PhoneReg"
    };
  },
  components: {
    PhoneReg,
    EmailReg
  }
};
</script>

<style scoped>
.tabs {
  width: 600px;
}
button {
  border: none;
  font-size: 20px;
  margin-left: 120px;
  margin-top: 10px;
  margin-bottom: 30px;
  background-color: #fff;
}
button:hover {
  color: pink;
}
</style>