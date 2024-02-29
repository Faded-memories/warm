<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="qqBasicsMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'QqBasicsMap')">
      <CloseBold/>
    </el-icon>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted} from "vue";
import {CloseBold} from "@element-plus/icons-vue";

const props = defineProps(['isFullFlag'])
const emit = defineEmits(['close'])
let map = null;

function initMap() {
  //定义地图中心点坐标
  let center = new TMap.LatLng(39.984120, 116.307484)
  //定义map变量，调用 TMap.Map() 构造函数创建地图
  map = new TMap.Map(document.getElementById('qqBasicsMap'), {
    center: center,//设置地图中心点坐标
    zoom: 17.2,   //设置地图缩放级别
  });
}
onMounted(() => {
  initMap()
});

onUnmounted(() => {
  // map?.destroy();
});
</script>

<style scoped lang="scss">
.fullScreen {
  width: 100vw;
  height: 100vh;
  transition: width 0.5s linear;
}

.mapBox {
  width: 300px;
  height: 300px;
}

.close {
  position: fixed;
  top: 20px;
  right: 20px;
}

.el-icon {
  cursor: pointer;
}
</style>

