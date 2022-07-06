<template>
  <div>
    <emailS>
      <!-- 选择地区 -->
      <template v-slot:region>
        <div>
          <p>选择所在地区(实名认证主体所在地?)</p>
          <input type="radio" v-model="中国大陆" name="china" /> 中国大陆
          <input type="radio" v-model="中国香港" name="china" /> 中国香港
          <br />
        </div>
      </template>
      <!-- 邮箱注册 -->
      <div>邮箱:<input type="text" placeholder="请输入邮箱" /></div>
      <br />
      <!-- 邮箱验证 -->
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
    </emailS>
  </div>
</template>

<script>
import emailS from "./email.vue";
export default {
  components: {
    emailS,
  },
};
</script>

<style></style>
