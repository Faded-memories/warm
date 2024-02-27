<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="AMapSatelliteMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'AMapSatelliteMap')">
      <CloseBold/>
    </el-icon>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {CloseBold} from "@element-plus/icons-vue";

const props = defineProps(['isFullFlag'])
const emit = defineEmits(['close'])
function initMap() {
  let AMapSatelliteMap = new BMapGL.Map('AMapSatelliteMap'); // 创建Map实例
  AMapSatelliteMap.centerAndZoom(new BMapGL.Point(106.520527, 30.522224));  // 初始化地图,设置中心点坐标和地图级别.
  AMapSatelliteMap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
  AMapSatelliteMap.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式
}

onMounted(() => {
  initMap()
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

