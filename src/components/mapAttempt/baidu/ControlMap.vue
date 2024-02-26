<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="controlMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'ControlMap')">
      <CloseBold/>
    </el-icon>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {CloseBold} from "@element-plus/icons-vue";

const props = defineProps(['isFullFlag'])
const emit = defineEmits(['close'])
// 百度地图BMap构造函数
let BMap = null;
onMounted(() => {
  BMap = window.BMap;
  let map = new BMap.Map("controlMap"); // 创建地图实例
  let point = new BMap.Point(106.520527, 30.522224); // 创建点坐标
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  let marker = new BMap.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  map.openInfoWindow(map.getCenter()); // 打开信息窗口
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

