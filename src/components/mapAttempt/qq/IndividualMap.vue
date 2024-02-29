<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="qqIndividualMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'QqIndividualMap')">
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
  let center = new TMap.LatLng(30.51658, 106.513349)
  //定义map变量，调用 TMap.Map() 构造函数创建地图
  map = new TMap.Map(document.getElementById('qqIndividualMap'), {
    center: center,//设置地图中心点坐标
    zoom: 7,   //设置地图缩放级别
    pitch: 0, // 俯仰度
    rotation: 0, // 旋转角度
  });
  map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.SCALE)
  map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM)
  map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ROTATION)
  // MultiMarker文档地址：https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker
  const geometries = [
    // 点标记数据数组
    {
      // 标记位置(纬度，经度，高度)
      position: center,
      id: 'marker',
    },
    {
      // 标记位置(纬度，经度，高度)
      position: new TMap.LatLng(32.075998, 106.642992),
      id: 'marker2',
    },
  ]
  let marker = new TMap.MultiMarker({
    map: map,
    styles: {
      // 点标记样式
      marker: new TMap.MarkerStyle({
        width: 20, // 样式宽
        height: 30, // 样式高
        anchor: {x: 10, y: 30}, // 描点位置
      }),
    },
    geometries
  });
  //初始化
  let bounds = new TMap.LatLngBounds();
  //判断标注点是否在范围内
  geometries.forEach(function (item) {
    //若坐标点不在范围内，扩大bounds范围
    if (bounds.isEmpty() || !bounds.contains(item.position)) {
      bounds.extend(item.position);
    }
  })
  //设置地图可视范围
  map.fitBounds(bounds, {
    padding: 100 // 自适应边距
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

