<template>
  <div>
    <!-- 选择地区 -->
    <slot name="region">
      <div>
        <p>选择所在地区(实名认证主体所在地?)</p>
        <input type="radio" v-model="中国大陆" name="china" /> 中国大陆
        <input type="radio" v-model="中国香港" name="china" /> 中国香港
        <br />
      </div>
    </slot>

    <!-- 邮箱注册 -->
    <div>邮箱:<input type="text" placeholder="请输入邮箱号" /></div>
    <br />
    <!-- 手机验证 -->
    <div>
      <input type="text" placeholder="请输入验证码" />
      <button>发送验证码</button>
    </div>
    <!-- 登录密码 -->
    <slot name="password">
      <div>
        <p>登陆密码</p>
        <input type="password" placeholder="输入密码" />
        <br /><br />
        <input type="password" placeholder="再次输入密码" />
        <br /><br />
      </div>
    </slot>

    <!-- 邀请码 -->
    <slot name="verifiablecode">
      <div>邀请码:<input type="text" placeholder="输入客户经理邀请码" /></div>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
