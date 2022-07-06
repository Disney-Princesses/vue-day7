<template>
  <div>
    <p>选择所在地区(实名认证主体所在地?)</p>
    <input type="radio" v-model="中国大陆" name="area" id="dl"><label for="dl">中国大陆&nbsp;&nbsp;</label>
    <input type="radio" v-model="中国香港" name="area" id="xg"><label for="xg">中国香港</label>
    <br><br>
    <span>手机号码: </span>
    <input type="tel" name="" id="" placeholder="输入手机号">
    <br><br>
    <input type="text" placeholder="输入验证码"> <button class="btn btn-primary">发送验证码</button>
    <br><br><br>
    <PhoneRegSlot>
        <template v-slot:loginPwd>
            <p>登录密码</p>
            <input type="password" name="" id="" placeholder="请输入密码">
            <br><br>
            <input type="password" name="" id="" placeholder="再次输入密码">
            <br><br>
        </template>
        <template v-slot:code>
            <span>邀请码（选填）</span>
            <br>
            <input type="text" name="" id="" placeholder="请输入客户经理邀请码">
        </template>
    </PhoneRegSlot>
  </div>
</template>

<script>
import PhoneRegSlot from './PhoneRegSlot.vue'
export default {
    components: {
        PhoneRegSlot
    }
}
</script>

<style>

</style>