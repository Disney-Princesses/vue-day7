<template>
  <div>
    <div class="title">
      <h2 @click="color = 'phone'; isShow = 'phone'" :class="{ message: color == 'phone' }">手机注册</h2>
      <h2 @click="color = 'e_mail'; isShow = 'e_mail' " :class="{ message: color == 'e_mail' }">邮箱注册</h2>
    </div>
    <keep-alive>
      <component :is="isShow">
        <template v-slot:phone>
          <el-form-item :label="labelStrPhone">
            <el-input :type="type" :placeholder="labelStrPhone" v-model="strPhone"></el-input>
          </el-form-item>
        </template>
        <template v-slot:emil>
          <el-form-item :label="labelStrEmil">
            <el-input :type="type" :placeholder="labelStrEmil" v-model="strEmil"></el-input>
          </el-form-item>
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import phone from './components/phone.vue'
import e_mail from './components/e_mail.vue'
export default {
  data() {
    return {
      isShow: "phone",
      color: 'phone',
      type: "text",
      strEmil: '',
      strPhone: "",
      labelStrPhone: "手机模块",
      labelStrEmil: "邮箱模块"
    }
  },
  components: {
    phone,
    e_mail
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  width: 600px;
  margin: 0 auto;
}

.title h2 {
  cursor: pointer;
  padding: 0 5px 5px;
}

.message {
  color: #0b56ef;
  border-bottom: 4px solid #0b56ef;
}
</style>