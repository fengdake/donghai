<template>
  <!--为echarts准备一个具备大小的容器dom-->
	<div style="display:flex;justify-content: center;align-items: center;padding: 30px 0px;">
  <div id="main" style="width: 400px;height: 406px;margin:0auto;"></div>
	</div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: '',
  data() {
    return {
      charts: '',
      opinionData: ['3', '2', '4', '4', '5']
    }
  },
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['贷款', '存款', '收息', '不良']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
        	 data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-07', '2019-08']
        },
        yAxis: {
          type: 'value'
        },

        series: [
           {
            name: '贷款',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '存款',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '收息',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '不良',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
      
        ]
      })
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
			console.log(4654)
      this.drawLine('main')
    })
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>