<script setup lang="ts">
import {onMounted} from 'vue'
import * as echarts from 'echarts'
import {chinaDatas, chinaGeoCoordMap, data} from "@/assets/json/chinaMap.ts";
import "@/assets/json/china.js"
let coordMap = chinaGeoCoordMap
for (let i = 0; i < data.length; i++) {
  let da = coordMap[data[i].name];
  coordMap[data[i].name] = [...da, ...data[i].dataCount];
}
let convertData = function (data: any) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i];
    let fromCoord = [coordMap[dataItem[0].name][0], coordMap[dataItem[0].name][1]];
    let toCoord = [117.1582, 36.8701];
    if (fromCoord && toCoord) {
      res.push([{
        coord: fromCoord,
        value: dataItem[0].value
      }, {
        coord: toCoord,
      }]);
    }
  }
  return res;
};
let seriesA = []
seriesA.push(
    {
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0.3, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: 'pin', //箭头图标
        symbolSize: 8, //图标大小
        color: '#2a6fd9'
      },
      lineStyle: {
        normal: {
          color: '#003262',
          width: 1,//尾迹线条宽度
          opacity: .9, //尾迹线条透明度
          curveness: .3 //尾迹线条曲直度
        }
      },
      data: convertData(chinaDatas)
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: { // 涟漪特效
        period: 2, // 动画时间，值越小速度越快
        brushType: 'fill', // 波纹绘制方式 stroke, fill
        scale: 6, // 波纹圆环最大限制，值越大波纹越大
        color: '#003262' // 涟漪的颜色，默认为散点的颜色。
      },
      label: {
        normal: {
          show: true,
          color: '#283c64',
          position: 'top', // 显示位置
          offset: [0, 0], // 偏移设置
          formatter: function (params: any) { // 圆环显示文字
            return params.data.name
          },
          fontSize: 13
        },
        emphasis: {
          show: false
        }
      },
      symbol: 'circle',
      symbolSize: function (val: any) {
        return 1 + val[2] * 5 // 圆环大小
      },
      itemStyle: {
        color: "#2a6fd9",
        shadowBlur: 4,
        shadowColor: "#2a6fd9",
      },
      data: chinaDatas.map(function (dataItem: any) {
        return {
          name: dataItem[0].name,
          value: coordMap[dataItem[0].name],
          itemStyle: {
            color: "#2a6fd9",
            shadowBlur: 4,
            shadowColor: "#2a6fd9",
          }
        }
      })
    },
    //被攻击点
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      label: {
        normal: {
          show: false,
          position: 'right',
          color: 'red',
          formatter: '{b}',
          textStyle: {
            color: "red"
          }
        },
        emphasis: {
          show: true,
          color: "red"
        }
      },
      symbol: 'pin',
      symbolSize: 0,
      data: [{
        name: '山东',
        value: coordMap['山东'].concat([10]),
      }],
    }
);

let option = {
  tooltip: {
    show: true,
    trigger: 'item',
    backgroundColor: '#2e65fd',
    borderColor: '#FFFFCC',
    showDelay: 0,
    hideDelay: 0,
    enterable: true,
    transitionDuration: 0,
    extraCssText: 'z-index:100',
    formatter: function (params: any) {
      console.log(params)
      // 根据业务自己拓展要显示的内容
      let res = ''
      let name = params.name
      let value1 = params.value[params.seriesIndex + 3] || 0
      let value2 = params.value[params.seriesIndex + 4] || 0
      let value3 = params.value[params.seriesIndex + 5] || 0
      let value4 = params.value[params.seriesIndex + 6] || 0
      let value5 = params.value[params.seriesIndex + 7] || 0
      let value6 = params.value[params.seriesIndex + 8] || 0
      let value7 = params.value[params.seriesIndex + 9] || 0
      res = "<span style='color:#fff'>" + name + '</span>' +
          '<br/>' +
          '<i class="icon icon-xuesheng"></i> 学生：' + value1 +
          '<br/>' +
          '<i class="icon icon-laoshi_huaban"></i> 老师：' + value2 +
          '<br/>' +
          '<i class="icon icon-baoanxiehui"></i> 青企协：' + value3 +
          '<br/>' +
          '<i class="icon icon-rencaizhengce"></i> 青年企业家：' + value4 +
          '<br/>' +
          '<i class="icon icon-investmentinstitutions"></i> 十强产业：' + value5 +
          '<br/>' +
          '<i class="icon icon-caozuoyaoqingjiabin"></i> 峰会嘉宾：' + value6 +
          '<br/>' +
          '<i class="icon icon-rencai"></i> 高端人才：' + value7
      return res
    }
  },
  regions: [
    //隐藏南海
    {
      name: "南海诸岛",
      itemStyle: {
        normal: {
          borderColor: "red",
          borderWidth: 20, //设置外层边框
          opacity: 0, // 为 0 时不绘制该图形
        },
      },
      label: {
        show: false, // 隐藏文字
      },
    },
  ],
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  geo: {
    map: 'china',
    zoom: 1.2,
    label: {
      normal: {
        color: '#1e2d4c'
      },
      emphasis: {
        show: false
      }
    },
    roam: false, // 是否允许缩放

    itemStyle: {
      normal: {
        color: '', // 地图背景色
        borderColor: '#5ea8ff', // 省市边界线00fcff 516a89
        borderWidth: 1
      },
      emphasis: {
        color: '#81acff' // 悬浮背景
      }
    }
  },
  series: seriesA
}

const initCharts = () => {
  let gisMapRef = echarts.init(document.getElementById('gisMapRef'))
  // 绘制图表
  gisMapRef.setOption(option)
}
onMounted(() => {
  initCharts()
})
</script>

<template>
  <div class="map-container" style="width: 100%; height: 100%" ref="gisMapRef" id="gisMapRef"/>
</template>


<style scoped lang="scss">

</style>
