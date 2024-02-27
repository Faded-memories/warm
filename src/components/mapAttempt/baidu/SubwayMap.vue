<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="subwayMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'SubwayMap')">
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
  /**
   * 从所有城市列表中获取北京信息
   * 结果格式
   * {
   *     keyword: 'beijing',
   *     name: '北京',
   *     citycode: '131'
   * }
   */
  /* globals BMapSub */
  let subwayCityName = '成都';
  let list = BMapSub.SubwayCitiesList;
  let subwayCity = null;
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === subwayCityName) {
      subwayCity = list[i];
      break;
    }
  }
  // 获取北京地铁数据-初始化地铁图
  let subway = new BMapSub.Subway('subwayMap', subwayCity.citycode);
  subway.setZoom(0.1);

  // let subwayMap = new BMapGL.Map('subwayMap'); // 创建Map实例
  // subwayMap.centerAndZoom(new BMapGL.Point(106.520527, 30.522224));  // 初始化地图,设置中心点坐标和地图级别.
  // subwayMap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
  // subwayMap.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式
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

