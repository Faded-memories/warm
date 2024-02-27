<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="baiDuControlMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'BaiDuControlMap')">
      <CloseBold/>
    </el-icon>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {CloseBold} from "@element-plus/icons-vue";

const props = defineProps(['isFullFlag'])
const emit = defineEmits(['close'])

function initMap() {
  let BaiDuControlMap = new BMapGL.Map('baiDuControlMap'); // 创建Map实例
  let point = new BMapGL.Point(106.520527, 30.522224); // 创建点坐标
  BaiDuControlMap.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
  BaiDuControlMap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
  BaiDuControlMap.addOverlay(new BMapGL.Marker(point)); // 将标注添加到地图中
  BaiDuControlMap.setTilt(73);       //设置地图的倾斜角度
  BaiDuControlMap.addControl(new BMapGL.ScaleControl());// 添加比例尺控件
  BaiDuControlMap.addControl(new BMapGL.ZoomControl());// 添加缩放控件
  BaiDuControlMap.addControl(new BMapGL.CityListControl(BMAP_ANCHOR_TOP_RIGHT)); // 添加城市列表控件
  BaiDuControlMap.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式
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

