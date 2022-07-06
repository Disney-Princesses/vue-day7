<template>
  <div>
    <p>
      <button type="button" class="btn btn-default" :class="{blue: isBlue == 'shouji'}" @click="phoneRegFn">
        手机注册
      </button>
      <button type="button" class="btn btn-default" :class="{blue: isBlue == 'youxiang'}" @click="emailRegFn">
        邮箱注册
      </button>
    </p>
    <div class="reg-main">
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
      
    </div>
   
  </div>
</template>

<script>
import PhoneReg from './components/Register/PhoneReg.vue'
import EmailReg from './components/Register/EmailReg.vue'
export default {
  components: {
    PhoneReg,
    EmailReg
  },
  data () {
    return {
      isBlue: 'shouji',
      comName:'PhoneReg'
    }
  },
  methods: {
    phoneRegFn(){
      this.isBlue = 'shouji'
      this.comName = 'PhoneReg'
    },
    emailRegFn(){
      this.isBlue = 'youxiang'
      this.comName = 'EmailReg'
    }
  }
};
</script>

<style>
.blue {
  background-color: #0b5ed7 !important; 
  color: #fff !important;
}

</style>
