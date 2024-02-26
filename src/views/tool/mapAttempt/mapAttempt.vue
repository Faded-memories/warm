<template>
  <div class="wl-map">
    <div class="wl-echarts-content">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="百度地图" name="1">
          <el-card>
            <HelloWord id="HelloWord" :isFullFlag="isFullFlag" @close="setFullScreen('HelloWord')"/>
            <div style="padding: 14px" class="wl-map-hint">
              <div>岳池县大石乡邮政银行!</div>
              <div>
                <el-icon @click="setFullScreen('HelloWord')">
                  <FullScreen/>
                </el-icon>
              </div>
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import HelloWord from "@/components/mapAttempt/baidu/HelloWord.vue";
import {FullScreen} from "@element-plus/icons-vue";

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
    isFullFlag.value = screenfull.value.isFullscreen
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

