<script setup lang="ts">
import {reactive, toRefs} from 'vue'

const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})
const {circleUrl} = toRefs(state)
</script>

<template>
  <div class="wl-Header">
    <div class="wl-Header-logo">warm</div>
    <div>
      <el-avatar :size="35" :src="circleUrl"/>
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
