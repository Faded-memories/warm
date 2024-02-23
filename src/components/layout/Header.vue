<script setup lang="ts">
</script>

<template>
  <div class="wl-Header">
    <div class="wl-Header-logo">warm</div>
    <div>
      <el-avatar :size="35" src="http://mms2.baidu.com/it/u=819438293,4140029301&fm=253&app=138&f=JPEG?w=400&h=400"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wl-Header {
  width: calc(100% - 24px * 2);
  height: 100%;
  padding: 0 24px;
  background-image: linear-gradient(to right, #3e9a8a 60%, #4fa8c1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-logo {
    color: white;
  }
}

</style>
