<script setup lang="ts">
import {onMounted, reactive} from 'vue'
import * as echarts from 'echarts'

const state = reactive({
  option: {
    grid: {
      top: '4%',
      left: '2%',
      right: '4%',
      bottom: '0%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ["芳草地国际", "实验小学", "白家庄小学", "外国语小学", "师范学校附属", "望京东园"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '学校',
        type: 'bar',
        barWidth: '40%',
        data: [260, 680, 360, 460, 150, 320],
      },
    ],
  },
})
const initCharts = () => {
  let barChart = echarts.init(document.getElementById('barChart'))
  // 绘制图表
  barChart.setOption(state.option)
}

onMounted(() => {
  initCharts()
})
</script>

<template>
  <div id="barChart" :style="{ width: '300px', height: '300px' }"/>
</template>


<style scoped lang="scss">

</style>
