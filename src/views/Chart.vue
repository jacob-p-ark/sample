<template>
  <q-page padding>
    <button @click="changeChartType">Switch to Stock Chart (OHLC)</button>
    <div class="q-mt-md">
      <ChartComponent
          :chartType="chartType"
          :data="chartData"
          :screenId="'screen-1'"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChartComponent from '../components/ChartComponent.vue';

// 기본 차트 설정
const chartType = ref('line');  // 기본 차트 타입은 'line'
const chartData = ref([1, 2, 3, 4, 5]);

// 버튼 클릭 시 차트 유형 변경
const changeChartType = () => {
  chartType.value = 'ohlc';  // 주식 차트로 변경
  chartData.value = [
    [1672444800000, 150, 155, 145, 152], // [timestamp, open, high, low, close]
    [1672531200000, 152, 160, 150, 158],
    [1672617600000, 158, 165, 155, 160],
    // OHLC 데이터 형식: [timestamp, open, high, low, close]
  ];
};
</script>

<style>
/* 스타일을 추가할 수 있습니다 */
</style>