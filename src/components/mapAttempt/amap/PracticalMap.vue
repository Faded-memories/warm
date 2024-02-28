<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="aMapPracticalMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'AMapPracticalMap')">
      <CloseBold/>
    </el-icon>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import {CloseBold} from "@element-plus/icons-vue";
const props = defineProps(['isFullFlag'])
const emit = defineEmits(['close'])
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;

onMounted(() => {
  AMapLoader.load({
    key: "ec90d69f4a3ab38c5208d269a023b5fb", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
      .then((AMap) => {
        map = new AMap.Map("aMapPracticalMap", {
          // 设置地图容器id
          viewMode: "3D", // 是否为3D地图模式
          zoom:7, // 初始化地图级别
          center: [106.649281,32.082141], // 初始化地图中心点位置
        });
        //实时路况图层
        let trafficLayer = new AMap.TileLayer.Traffic({
          zIndex: 10,
          zooms: [7, 22],
        });

        trafficLayer.setMap(map);

        let isVisible = true;
        function toggle() {
          if (isVisible) {
            trafficLayer.hide();
            isVisible = false;
          } else {
            trafficLayer.show();
            isVisible = true;
          }
        }

        document.getElementById('btn').addEventListener('click', toggle);
      })
      .catch((e) => {
        console.log(e);
      });
});

onUnmounted(() => {
  map?.destroy();
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

