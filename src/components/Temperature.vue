<template>
  <v-chart class="chart" :option="polar"/>
</template>
<script>
export default {
  name: 'Index-Tab',
  methods: {},

  data() {
    return {
      polar: {
        xAxis: {
          type: 'time',
          name: '时间'
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
          {
            name: '最高温',
            data: [['2022-06-09', 150], ['2022-06-10', 230], ['2022-06-11', 224], ['2022-06-12', 218], ['2022-06-13', 135], ['2022-06-14', 147], ['2022-06-15', 260]],
            type: 'line',
            itemStyle: {normal: {label: {show: true}}},
            smooth: true
          },
        ]
      }
    };
  },
};
</script>
<style>
.chart {
  height: 400px;
}
</style>