<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="aMapPathMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'AMapPathMap')">
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

let marker, map = null;

onMounted(() => {
  AMapLoader.load({
    key: "ec90d69f4a3ab38c5208d269a023b5fb", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
      .then((AMap) => {
        map = new AMap.Map("aMapPathMap", {
          // 设置地图容器id
          resizeEnable: true,
          viewMode: "3D", // 是否为3D地图模式
          zoom: 6, // 初始化地图级别
          center: [106.513589, 30.516474], // 初始化地图中心点位置
        });
        AMap.plugin(
            ["AMap.ToolBar", "AMap.Driving", "AMap.Polyline", "AMap.Marker"],
            function () {
              //异步同时加载多个插件
              let toolbar = new AMap.ToolBar();
              map.addControl(toolbar);
              let driving = new AMap.Driving({map}); //驾车路线规划
              driving.search(
                  new AMap.LngLat(106.649232, 32.082143),
                  new AMap.LngLat(106.520527, 30.522224),
                  function (status, result) {
                    // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                    if (status === "complete") {
                      // console.log("绘制驾车路线完成", result);
                    } else {
                      // console.log("获取驾车数据失败：" + result);
                    }
                  }
              );
            }
        );
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

