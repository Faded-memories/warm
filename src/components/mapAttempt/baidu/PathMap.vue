<template>
  <div>
    <!-- 设置放置地图的ref -->
    <div id="pathMap" :class="[props.isFullFlag?'fullScreen':'mapBox']"/>
    <el-icon class="close" v-if="props.isFullFlag" @click="emit('close', 'PathMap')">
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
  let pathMap = new BMapGL.Map('pathMap'); // 创建Map实例
  pathMap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
  let driving = new BMapGL.DrivingRouteLine(pathMap, {
    renderOptions: {
      map: pathMap,
      autoViewport: true,
      enableDragging: true,
    }
  })
  const start = new BMapGL.Point(106.649232, 32.082143);
  const end = new BMapGL.Point(106.520527, 30.522224);
  driving.search(start, end);
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

