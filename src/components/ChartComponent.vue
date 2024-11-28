<!-- src/components/ChartComponent.vue -->
<template>
  <div>
    <Chart :options="options"></Chart>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import {Chart} from "highcharts-vue";

// 속성 정의 (타입스크립트로 설정)
defineProps<{
  options: Highcharts.Options; // Highcharts의 Options 타입 사용
}>();

// HighchartsVue 컴포넌트 등록
</script>

<style scoped>
/* 필요한 스타일 추가 가능 */
</style>
