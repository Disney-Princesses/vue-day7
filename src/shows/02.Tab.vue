<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="手机注册" name="first" @click="comName = 'PhoneReg'">
    </el-tab-pane>
    <el-tab-pane label="邮箱注册" name="second"  @click="comName = 'EmailReg'">
    </el-tab-pane>
  </el-tabs>
  <component :is='comName'>

  </component>
    <PhoneReg></PhoneReg>
    <EmailReg></EmailReg>
  </div>
</template>

<script>
import PhoneReg from '../components/tab/Phone.vue'
import EmailReg from '../components/tab/Email'

export default {
     data() {
      return {
        comName:'PhoneReg',
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        PhoneReg,
        EmailReg
    }

}
</script>

<style>

</style>