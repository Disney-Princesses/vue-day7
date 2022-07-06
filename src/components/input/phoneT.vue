<template>
  <div>
    <phoneS>
      <!-- 选择地区 -->
      <template v-slot:region>
        <div>
          <p>选择所在地区(实名认证主体所在地?)</p>
          <input type="radio" v-model="中国大陆" name="china" /> 中国大陆
          <input type="radio" v-model="中国香港" name="china" /> 中国香港
          <br />
        </div>
      </template>
      <!-- 手机号码注册 -->
      <div>手机号:<input type="text" placeholder="请输入手机号" /></div>
      <br />
      <!-- 手机验证 -->
      <div>
        <input type="text" placeholder="请输入验证码" />
        <button>发送验证码</button>
      </div>
      <!-- 登录密码 -->
      <template v-slot:password>
        <div>
          <p>登陆密码</p>
          <input type="password" placeholder="输入密码" />
          <br /><br />
          <input type="password" placeholder="再次输入密码" />
          <br /><br />
        </div>
      </template>
      <!-- 邀请码 -->
      <template v-show="verifiablecode">
        <div>邀请码:<input type="text" placeholder="输入客户经理邀请码" /></div>
      </template>
    </phoneS>
  </div>
</template>

<script>
import phoneS from "./phone.vue";
export default {
  components: {
    phoneS,
  },
};
</script>

<style></style>
