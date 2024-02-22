<script setup lang="ts">
import {computed, reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'
import {useRouter} from "vue-router";
import StarBox from '@/components/login/star.vue'

interface Params {
  account: string
  password: string
}

const router = useRouter(); // 用于页面的跳转
const ruleFormRef = ref<FormInstance>()
const params = reactive<Params>({
  account: '',
  password: ''
})
const rules = reactive<FormRules<Params>>({
  account: [
    {required: true, message: '请输入账号', trigger: 'blur'},
    {min: 3, max: 5, message: '密码长度为3-5位', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, max: 18, message: '密码长度为6-18位', trigger: 'blur'},
  ],
})

const isInput = computed(() => {
  return Boolean(params.account) && Boolean(params.password)
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push('/')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="wl-login">
    <StarBox
        image-url="https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a8ec8a13632762d01fb5afdda6ec08fa503dc6cd.jpg"/>
    <div class="login-info">
      <el-form :model="params"
               ref="ruleFormRef"
               :rules="rules"
               label-width="80px">
        <el-form-item label="账号" prop="account">
          <el-input v-model="params.account" class="login-btn"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="params.password" type="password" class="login-btn"/>
        </el-form-item>
        <el-form-item class="login-btnBox">
          <el-button type="success" @click="submitForm(ruleFormRef)" :disabled="!isInput" class="login-btn">登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wl-login {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .login-info {
    position: absolute;
    width: 400px;
    height: 200px;
    top: calc(50vh - 300px / 2 - 24px);
    left: calc(50vw - 180px - 24px);
    box-shadow: 0 2px 4px rgba(255, 255, 255, .12), 0 0 6px rgba(255, 255, 255, .04);
    border: 10px solid transparent;
    background-clip: padding-box;
    background-image: radial-gradient(ellipse at top left, rgba(181, 143, 190, 0.9) 30%, rgba(121, 186, 196, 0.6) 70%);
    padding: 24px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
}

.login-btnBox {
  margin-top: 30px;
}

.login-btn {
  width: 280px;
}

::v-deep(.el-form-item__label) {
  color: black;
}
</style>
