<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="qqPathMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'QqPathMap')">
      <CloseBold/>
    </el-icon>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted} from "vue";
import {CloseBold} from "@element-plus/icons-vue";

const props = defineProps(['isFullFlag'])
const emit = defineEmits(['close'])

let map;

function initMap() {
  map = new TMap.Map('qqPathMap', {
    center: new TMap.LatLng(30.51658, 106.513349),
    zoom: 6,
  });
  let startPosition = new TMap.LatLng(30.51658, 106.513349); // 路线规划起点
  let endPosition = new TMap.LatLng(32.075998, 106.642992); // 路线规划终点
  let marker = new TMap.MultiMarker({
    // 创造MultiMarker显示起终点标记
    id: 'marker-layer',
    map: map,
    styles: {
      start: new TMap.MarkerStyle({
        width: 25,
        height: 35,
        anchor: {x: 16, y: 32},
        src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png',
      }),
      end: new TMap.MarkerStyle({
        width: 25,
        height: 35,
        anchor: {x: 16, y: 32},
        src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png',
      }),
    },
    geometries: [
      {
        id: 'start',
        styleId: 'start',
        position: startPosition,
      },
      {
        id: 'end',
        styleId: 'end',
        position: endPosition,
      },
    ],
  });
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

