<template>
  <div class="wl-map">
    <div class="wl-echarts-content">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template #title>
            <el-icon style="margin-right: 6px">
              <MapLocation/>
            </el-icon>
            百度地图
          </template>
          <!--          基础地图-->
          <el-card>
            <BasicsMap id="BasicsMap" :isFullFlag="isFullFlag" @close="setFullScreen('BasicsMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>岳池县大石乡邮政银行!</div>
              <div>
                <el-icon @click="setFullScreen('BasicsMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          地图控件-->
          <el-card>
            <ControlMap id="ControlMap" :isFullFlag="isFullFlag" @close="setFullScreen('ControlMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>地图控件</div>
              <div>
                <el-icon @click="setFullScreen('ControlMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>

        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <el-icon style="margin-right: 6px">
              <MapLocation/>
            </el-icon>
            高德地图
          </template>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <el-icon style="margin-right: 6px">
              <MapLocation/>
            </el-icon>
            腾讯地图
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import BasicsMap from "@/components/mapAttempt/baidu/BasicsMap.vue";
import ControlMap from "@/components/mapAttempt/baidu/ControlMap.vue";
import {FullScreen, MapLocation} from "@element-plus/icons-vue";
import screenfull from 'screenfull'

const activeName = ref('1')
const isFullFlag = ref(false)
const fullFlagName = ref('')
const setFullScreen = (id) => {
  fullFlagName.value = id
  isFullFlag.value = !isFullFlag.value
  const element = document.getElementById(id);//指定全屏区域元素
  if (isFullFlag.value) {
    element.requestFullscreen()
  } else {
    document.exitFullscreen();
  }
}
onMounted(() => {
  // 监听页面全屏
  window.addEventListener("fullscreenchange", (e) => {
    isFullFlag.value = Boolean(screenfull.element)
  })
});
</script>

<style scoped lang="scss">
.wl-map {
  &-content {
    padding: 24px;
  }
}

::v-deep(.el-collapse-item__header) {
  background: linear-gradient(to right, #489aa6, #bad7e2);
  padding: 0 12px;
  color: white;
}

::v-deep(.el-collapse-item__content) {
  padding: 25px 12px;
}

.wl-map {
  padding: 12px;
}

.wl-map-hint {
  > div:first-child {
    color: #cccccc;
  }

  > div:last-child {
    display: flex;
    flex-flow: row-reverse;
  }
}

::v-deep(.el-collapse-item__content) {
  display: flex;
}

::v-deep(.el-card) {
  margin: 0 12px;
}

.el-icon {
  cursor: pointer;
}

::v-deep(.el-card__body) {
  padding: 0;
}
</style>

