<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div style="display:flex;justify-content: center;align-items: center;padding: 30px 0px;">
    <div id="mainas" style="width: 1000px;height: 600px;margin:0auto;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: '',
  data() {
    return {
      charts: '',
    }
  },
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
				// 手机银行：8f55e7    网银：bf46f8   微信：f3dd90   支付宝：f86846   京东：605ad8   云闪付：6fd501   百付宝：fe75a2   银联：ffb11a   短信：53713e  水费：6c6fbf  电费：5ba8ff
        color: ['#8f55e7','#bf46f8','#f3dd90','#f86846','#605ad8','#6fd501','#fe75a2','#ffb11a','#53713e','#6c6fbf','#5ba8ff'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['手机银行签约用户', '网银签约用户', '微信签约用户', '支付宝签约用户', '京东签约用户', '云闪付签约用户', '百付宝签约用户', '银联在线签约用户', '短信签约用户', '电费签约用户']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              position: 'inner'
            },
            labelLine: {
              show: false
            }
          },
          {
            name: '电子银行开户分布',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
              formatter: '{a|{b}：{c}}',
              backgroundColor: '#fff',
              borderColor: '#fff',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  backgroundColor: '#fff',
                  color: '#000',
                  fontSize: '16px',
                  lineHeight: 22,
                  align: 'center'
                },

                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: '#eee',
                  backgroundColor: '#334455',
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            },
            data: [
							// '手机银行签约用户', '网银签约用户', '微信签约用户', '支付宝签约用户', '京东签约用户', '云闪付签约用户', '百付宝签约用户', '银联在线签约用户', '短信签约用户', '电费签约用户'
              { value: 335, name: '手机银行签约用户' },
              { value: 310, name: '网银签约用户' },
              { value: 234, name: '微信签约用户' },
              { value: 135, name: '支付宝签约用户' },
              { value: 118, name: '京东签约用户' },
              { value: 251, name: '云闪付签约用户' },
              { value: 147, name: '百付宝签约用户' },
							{ value: 102, name: '银联在线签约用户' },
							{ value: 147, name: '短信签约用户' },
              { value: 102, name: '电费签约用户' },
            ]
          }
        ]
      })
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      console.log(4654)
      this.drawLine('mainas')
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