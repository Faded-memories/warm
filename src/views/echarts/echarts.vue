<script setup lang="ts">
import {ref} from "vue";
import BarChart from "@/components/echarts/BarChart.vue";
import GisMap from "@/components/echarts/GisMap.vue";

const barVisible = ref(false)
const gisMapVisible = ref(false)
const activeName = ref('1')
</script>

<template>
  <div class="wl-echarts">
    <div class="wl-pageHeader">
      <span>echarts图表</span>
    </div>
    <div class="wl-echarts-content">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="bar柱状图" name="1">
          <el-button round type="success" @click="barVisible = true">category</el-button>
          <el-button round type="success" @click="gisMapVisible = true">gisMap</el-button>
        </el-collapse-item>
      </el-collapse>
    </div>

    <el-dialog v-model="barVisible" title="category图表" width="350">
      <BarChart v-if="barVisible"/>
    </el-dialog>
    <el-dialog v-model="gisMapVisible" title="GisMap" width="900">
            <GisMap v-if="gisMapVisible"/>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.wl-echarts {
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
</style>
