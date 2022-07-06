<template>
  <div>
    <p>选择所在地区(实名认证主体所在地?)</p>
    <input type="radio" v-model="中国大陆" name="area2" id="dl"><label for="dl">中国大陆&nbsp;&nbsp;</label>
    <input type="radio" v-model="中国香港" name="area2" id="xg"><label for="xg">中国香港</label>
    <br><br>
    <span>邮箱地址: </span>
    <input type="email" name="" id="" placeholder="输入邮箱地址">
    <br><br><br>
    <EmailRegSlot>
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
    </EmailRegSlot>
  </div>
</template>

<script>
import EmailRegSlot from './EmailRegSlot.vue'
export default {
    components: {
        EmailRegSlot
    }
}
</script>

<style>

</style>