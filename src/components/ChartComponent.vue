<template>
  <div>
    <Chart :options="chartOptions" :highcharts="Highcharts"/>
<!--    <Highcharts :options="chartOptions" />-->
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, onMounted } from 'vue';
// import {chart} from 'highcharts';
import {Highcharts} from 'highcharts/modules/stock'; // Stock 모듈 추가
import {Chart} from 'highcharts-vue';

// Highcharts.stockChart

// 외부에서 전달받을 props
const props = defineProps({
  chartType: {
    type: String,
    required: true, // 차트 타입 (예: 'line', 'bar', 'ohlc' 등)
  },
  data: {
    type: Array,
    required: true, // 차트에 표시할 데이터
  },
  screenId: {
    type: String,
    required: true, // 화면 ID
  },
});

// 내부에서 관리하는 차트 옵션
const chartOptions = ref<Highcharts.Options>({});

// 차트 설정을 업데이트하는 함수
const updateChartOptions = () => {
  switch (props.chartType) {
    case 'line':
      chartOptions.value = {
        chart: { type: 'line' },
        title: { text: 'Line Chart' },
        series: [{ data: props.data }],
      };
      break;
    case 'bar':
      chartOptions.value = {
        chart: { type: 'bar' },
        title: { text: 'Bar Chart' },
        series: [{ data: props.data }],
      };
      break;
    case 'column':
      chartOptions.value = {
        chart: { type: 'column' },
        title: { text: 'Column Chart' },
        series: [{ data: props.data }],
      };
      break;
    case 'pie':
      chartOptions.value = {
        chart: { type: 'pie' },
        title: { text: 'Pie Chart' },
        series: [{ data: props.data }],
      };
      break;
    case 'scatter':
      chartOptions.value = {
        chart: { type: 'scatter' },
        title: { text: 'Scatter Chart' },
        series: [{ data: props.data }],
      };
      break;
    case 'ohlc': // 주식 차트 (OHLC)
      chartOptions.value = {
        chart: { type: 'ohlc' },
        title: { text: 'Stock Chart (OHLC)' },
        xAxis: {
          type: 'datetime', // x축을 시간으로 설정
          labels: {
            format: '{value:%Y-%m-%d}', // YYYY-MM-DD 형식으로 표시
          },
        },
        series: [{
          type: 'ohlc',
          name: 'Stock Price',
          data: props.data, // OHLC 데이터
          // tooltip: {
          //   shared: true,
          //   formatter: function () {
          //     const point = this.points?.[0];
          //     if (!point) return '';
          //     const date = Highcharts.dateFormat('%A, %b %e, %Y', this.x);
          //     const ohlcData = point.point.options;
          //     return `
          //   <b>${date}</b><br/>
          //   Open: <b>$${ohlcData.open}</b><br/>
          //   High: <b>$${ohlcData.high}</b><br/>
          //   Low: <b>$${ohlcData.low}</b><br/>
          //   Close: <b>$${ohlcData.close}</b><br/>
          // `;
          //   },
          // },
        }],
      };
      break;
    case 'area':
      chartOptions.value = {
        chart: { type: 'area' },
        title: { text: 'Area Chart' },
        series: [{ data: props.data }],
      };
      break;
    case 'spline':
      chartOptions.value = {
        chart: { type: 'spline' },
        title: { text: 'Spline Chart' },
        series: [{ data: props.data }],
      };
      break;
    case 'bubble':
      chartOptions.value = {
        chart: { type: 'bubble' },
        title: { text: 'Bubble Chart' },
        series: [{ data: props.data }],
      };
      break;
    case 'heatmap':
      chartOptions.value = {
        chart: { type: 'heatmap' },
        title: { text: 'Heatmap' },
        series: [{
          data: props.data, // Heatmap 데이터
        }],
      };
      break;
    case 'polar':
      chartOptions.value = {
        chart: { polar: true, type: 'line' },
        title: { text: 'Polar Chart' },
        series: [{ data: props.data }],
      };
      break;
    default:
      chartOptions.value = {
        chart: { type: 'line' },
        title: { text: 'Default Chart' },
        series: [{ data: props.data }],
      };
      break;
  }
};

// props가 변경될 때마다 차트 옵션을 업데이트
watch(() => props.chartType, updateChartOptions, { immediate: true });

onMounted(() => {
  // 컴포넌트가 마운트되었을 때 차트 설정을 초기화
  updateChartOptions();
});
</script>

<style scoped>
/* 스타일을 추가할 수 있습니다 */
</style>
