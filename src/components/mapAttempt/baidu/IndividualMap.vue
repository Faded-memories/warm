<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="baiDuIndividualMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'BaiDuIndividualMap')">
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
  let BaiDuIndividualMap = new BMapGL.Map('baiDuIndividualMap'); // 创建Map实例
  let point = new BMapGL.Point(106.520527, 30.522224); // 创建点坐标
  BaiDuIndividualMap.centerAndZoom(point, 7); // 初始化地图,设置中心点坐标和地图级别
  BaiDuIndividualMap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
  BaiDuIndividualMap.addOverlay(new BMapGL.Marker(point)); // 将标注添加到地图中
  BaiDuIndividualMap.addControl(new BMapGL.ScaleControl());// 添加比例尺控件
  BaiDuIndividualMap.addControl(new BMapGL.ZoomControl());// 添加缩放控件
  BaiDuIndividualMap.addControl(new BMapGL.CityListControl(BMAP_ANCHOR_TOP_RIGHT)); // 添加城市列表控件
  BaiDuIndividualMap.addControl(new BMapGL.NavigationControl3D());// 添加3D控件
  // 创建点标记
  let marker1 = new BMapGL.Marker(new BMapGL.Point(106.649281,32.082141));
  BaiDuIndividualMap.addOverlay(marker1);  // 在地图上添加点标记
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

