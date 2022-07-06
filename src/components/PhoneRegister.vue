<template>
  <div>
    
    <p>选择所在地区(实名认证主体所在地)</p>
    <input type="radio" v-model='contry' value="中国大陆">中国大陆
    <input type="radio" v-model='contry' value="中国香港">中国香港
    <br>
    <br>
    <p>手机号码</p>
    <input type="text" placeholder="请输入手机号码">
    <input type="text" placeholder="输入验证码">
    <button>发送验证码</button>
    <p>登陆密码</p>
    <input type="text" placeholder="请输入登陆密码">
    <input type="text" placeholder="再次输入登陆密码">
    <p>邀请码(选填)</p>
    <input type="text" placeholder='输入客户经理邀请码'>
  </div>
</template>

<script>
export default {
  data(){
    return {
        contry:'',
        phonenum:'',
        code:"",
        password:'',
        invitacode:'',
    }
  },

}
</script>

<style scoped>
p{
  font-size: 12px;
  color:#333;
}
input{
  margin: 5px 0;
}
input[type='text']{
  height: 30px;
}
button{
  margin: 10px;
  height: 35px;
  background: #0d59f0;
  color:#fff;
  border:1px solid #0d59f0;
  border-radius: 5px;
}
</style>