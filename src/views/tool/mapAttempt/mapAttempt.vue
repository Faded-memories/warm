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
            <BaiDuBasicsMap id="BaiDuBasicsMap" :isFullFlag="isFullFlag" @close="setFullScreen('BaiDuBasicsMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>岳池县大石乡邮政银行!</div>
              <div>
                <el-icon @click="setFullScreen('BaiDuBasicsMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          地图控件-->
          <el-card>
            <BaiDuControlMap id="ControlMap" :isFullFlag="isFullFlag" @close="setFullScreen('ControlMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>地图控件</div>
              <div>
                <el-icon @click="setFullScreen('ControlMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          卫星地图-->
          <el-card>
            <BaiDuSatelliteMap id="SatelliteMap" :isFullFlag="isFullFlag" @close="setFullScreen('SatelliteMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>卫星地图</div>
              <div>
                <el-icon @click="setFullScreen('SatelliteMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          个性地图-->
          <el-card>
            <BaiDuIndividualMap id="IndividualMap" :isFullFlag="isFullFlag" @close="setFullScreen('IndividualMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>个性地图</div>
              <div>
                <el-icon @click="setFullScreen('IndividualMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          路线规划-->
          <el-card>
            <BaiDuPathMap id="PathMap" :isFullFlag="isFullFlag" @close="setFullScreen('PathMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>路线规划</div>
              <div>
                <el-icon @click="setFullScreen('PathMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          成都地铁-->
          <el-card>
            <BaiDuSubwayMap id="SubwayMap" :isFullFlag="isFullFlag" @close="setFullScreen('SubwayMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>成都地铁</div>
              <div></div>
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
          <!--          基础地图-->
          <el-card>
            <AMapBasicsMap id="AMapBasicsMap" :isFullFlag="isFullFlag" @close="setFullScreen('AMapBasicsMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>岳池县大石乡邮政银行!</div>
              <div>
                <el-icon @click="setFullScreen('AMapBasicsMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
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
import {FullScreen, MapLocation} from "@element-plus/icons-vue";
import screenfull from 'screenfull'
import BaiDuBasicsMap from "@/components/mapAttempt/baidu/BasicsMap.vue";
import AMapBasicsMap from "@/components/mapAttempt/amap/BasicsMap.vue";
import BaiDuControlMap from "@/components/mapAttempt/baidu/ControlMap.vue";
import BaiDuIndividualMap from "@/components/mapAttempt/baidu/IndividualMap.vue";
import BaiDuSatelliteMap from "@/components/mapAttempt/baidu/SatelliteMap.vue";
import BaiDuPathMap from "@/components/mapAttempt/baidu/PathMap.vue";
import BaiDuSubwayMap from "@/components/mapAttempt/baidu/SubwayMap.vue";

const activeName = ref('2')
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
  flex-wrap: wrap;
}

::v-deep(.el-card) {
  margin: 0 28px 28px 28px;
}

.el-icon {
  cursor: pointer;
}

::v-deep(.el-card__body) {
  padding: 0;
}
</style>

