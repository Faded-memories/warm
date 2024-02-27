<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="aMapControlMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'AMapControlMap')">
      <CloseBold/>
    </el-icon>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted} from "vue";
import {CloseBold} from "@element-plus/icons-vue";

const props = defineProps(['isFullFlag'])
const emit = defineEmits(['close'])
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;
onMounted(() => {
  initMap()
});
const initMap = () => {
  AMapLoader.load({
    key: "ec90d69f4a3ab38c5208d269a023b5fb", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Scale', 'AMap.ElasticMarker', 'AMap.ToolBar', 'AMap.HawkEye', 'AMap.ControlBar', 'AMap.Geolocation', 'AMap.AutoComplete', 'AMap.PlaceSearch'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
      .then((AMap) => {
        map = new AMap.Map("aMapControlMap", {
          // 设置地图容器id
          viewMode: "3D", // 是否为3D地图模式
          zoom: 15, // 初始化地图级别
          center: [106.513589, 30.516474], // 初始化地图中心点位置
        });
        map.addControl(new AMap.Scale()); //添加工具条插件到页面
        map.addControl(new AMap.ElasticMarker()); //添加工具条插件到页面
        map.addControl(new AMap.ToolBar()); //添加工具条插件到页面
        map.addControl(new AMap.HawkEye()); //添加工具条插件到页面
        map.addControl(new AMap.ControlBar()); //添加工具条插件到页面
        map.addControl(new AMap.Geolocation()); //添加工具条插件到页面
        map.addControl(new AMap.AutoComplete()); //添加工具条插件到页面
        map.addControl(new AMap.PlaceSearch()); //添加工具条插件到页面
        map.addControl(new AMap.Driving()); //添加工具条插件到页面
      })
      .catch((e) => {
        console.log(e);
      });
}
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

