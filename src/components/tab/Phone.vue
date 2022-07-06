<template>
    <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="手机号码">
    <el-input v-model.number="ruleForm.age" placeholder="请输入您的手机号"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="ruleForm.pass" placeholder="请输入您的密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码">
    <el-input type="password" v-model="ruleForm.checkPass" placeholder="请确认密码"></el-input>
  </el-form-item>
   <slot name="zd"></slot>
  <el-form-item>
    <el-button type="primary">提交</el-button>
    <el-button >重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
      };
    },
  }
</script>