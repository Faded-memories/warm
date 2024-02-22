<script setup lang="ts">
import StarBox from '@/components/login/star.vue'
</script>

<template>
  <div class="wl-login">
    <StarBox
        image-url="https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a8ec8a13632762d01fb5afdda6ec08fa503dc6cd.jpg"/>
    <div class="login-info">
      524
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
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0 2px 4px rgba(255, 255, 255, .12), 0 0 6px rgba(255, 255, 255, .04);
    padding: 24px;
    border-radius: 5px;
  }
}
</style>
