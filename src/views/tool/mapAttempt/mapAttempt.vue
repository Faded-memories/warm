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
            <BaiDuControlMap id="BaiDuControlMap" :isFullFlag="isFullFlag" @close="setFullScreen('BaiDuControlMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>地图控件</div>
              <div>
                <el-icon @click="setFullScreen('BaiDuControlMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          卫星地图-->
          <el-card>
            <BaiDuSatelliteMap id="BaiDuSatelliteMap" :isFullFlag="isFullFlag"
                               @close="setFullScreen('BaiDuSatelliteMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>卫星地图</div>
              <div>
                <el-icon @click="setFullScreen('BaiDuSatelliteMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          个性地图-->
          <el-card>
            <BaiDuIndividualMap id="BaiDuIndividualMap" :isFullFlag="isFullFlag"
                                @close="setFullScreen('BaiDuIndividualMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>个性地图</div>
              <div>
                <el-icon @click="setFullScreen('BaiDuIndividualMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          路线规划-->
          <el-card>
            <BaiDuPathMap id="BaiDuPathMap" :isFullFlag="isFullFlag" @close="setFullScreen('BaiDuPathMap')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>路线规划</div>
              <div>
                <el-icon @click="setFullScreen('BaiDuPathMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          成都地铁-->
          <el-card>
            <BaiDuSubwayMap id="BaiDuSubwayMap" :isFullFlag="isFullFlag" @close="setFullScreen('BaiDuSubwayMap')"/>
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
            <AMapBasicsMap id="AMapBasicsMap" :isFullFlag="isFullFlag" @close="setFullScreen('AMapBasicsMap')"  v-if="Number(activeName) === 2"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>岳池县大石乡邮政银行!</div>
              <div>
                <el-icon @click="setFullScreen('AMapBasicsMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          地图控件-->
          <el-card>
            <AMapControlMap id="AMapControlMap" :isFullFlag="isFullFlag" @close="setFullScreen('AMapControlMap')" v-if="Number(activeName) === 2"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>地图控件</div>
              <div>
                <el-icon @click="setFullScreen('AMapControlMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          卫星地图-->
          <el-card>
            <AMapSatelliteMap id="AMapSatelliteMap" :isFullFlag="isFullFlag"
                              @close="setFullScreen('AMapSatelliteMap')" v-if="Number(activeName) === 2"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>卫星地图</div>
              <div>
                <el-icon @click="setFullScreen('AMapSatelliteMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          个性地图-->
          <el-card>
            <AMapIndividualMap id="AMapIndividualMap" :isFullFlag="isFullFlag"
                               @close="setFullScreen('AMapIndividualMap')" v-if="Number(activeName) === 2"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>个性地图</div>
              <div>
                <el-icon @click="setFullScreen('AMapIndividualMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          路线规划-->
          <el-card>
            <AMapPathMap id="AMapPathMap" :isFullFlag="isFullFlag" @close="setFullScreen('AMapPathMap')" v-if="Number(activeName) === 2"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>路线规划</div>
              <div>
                <el-icon @click="setFullScreen('AMapPathMap')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
          <!--          路面实况-->
          <el-card>
            <AMapPracticalMap id="AMapPracticalMap" :isFullFlag="isFullFlag"
                              @close="setFullScreen('AMapPracticalMap')" v-if="Number(activeName) === 2"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>成都地铁</div>
              <div></div>
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
import AMapControlMap from "@/components/mapAttempt/amap/ControlMap.vue";
import BaiDuIndividualMap from "@/components/mapAttempt/baidu/IndividualMap.vue";
import AMapIndividualMap from "@/components/mapAttempt/amap/IndividualMap.vue";
import BaiDuSatelliteMap from "@/components/mapAttempt/baidu/SatelliteMap.vue";
import AMapSatelliteMap from "@/components/mapAttempt/amap/SatelliteMap.vue";
import BaiDuPathMap from "@/components/mapAttempt/baidu/PathMap.vue";
import AMapPathMap from "@/components/mapAttempt/amap/PathMap.vue";
import BaiDuSubwayMap from "@/components/mapAttempt/baidu/SubwayMap.vue";
import AMapPracticalMap from "@/components/mapAttempt/amap/PracticalMap.vue";

const activeName = ref('3')
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

