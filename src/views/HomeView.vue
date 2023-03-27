<template>
  <div>
    <div id='showorders' style='width:500px; height:500px'></div>
  </div>
</template>
 
<script setup>
import { ref, onMounted } from "vue";
import * as echarts from 'echarts';
let echart = echarts;
onMounted(() => {
  // init()
  showorders()
})

function showorders() {
  // 基于准备好的dom，初始化echarts实例
  var chartDom = document.getElementById('showorders');
  var myChart = echarts.init(chartDom);
  // 指定图表的配置项和数据
  var option;

  option = {
    // # x轴
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    // # y 轴
    yAxis: {
      type: 'value'
    },
    // # 类型
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'bar'
      }
    ]
  };
  option && myChart.setOption(option);
}



</script>
 
<style></style>