<template>
  <q-page padding>
    <!-- 탭 네비게이션 -->
    <q-tabs
        v-model="activeTab"
        class="text-grey"
        align="justify"
        shrink
        active-color="primary"
        indicator-color="primary"
    >
      <q-tab v-for="tab in tabs" :key="tab.id" :name="tab.id" :label="tab.label">그래프 | </q-tab>
    </q-tabs>

    <!-- 탭 내용 (활성 탭에 따라 그래프 변경) -->
    <div class="q-mt-md">
      <ChartComponent :options="activeChartOptions" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ChartComponent from "../components/ChartComponent.vue";
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Page 3 mounted');
});

// 탭 데이터 및 차트 설정
const tabs = ref([
  {
    id: "tab1",
    label: "Line Chart",
    chartOptions: {
      chart: { type: "line" },
      title: { text: "Line Chart" },
      series: [{ data: [1, 2, 3, 4, 5] }],
    },
  },
  {
    id: "tab2",
    label: "Bar Chart",
    chartOptions: {
      chart: { type: "bar" },
      title: { text: "Bar Chart" },
      series: [{ data: [5, 3, 4, 7, 2] }],
    },
  },
  {
    id: "tab3",
    label: "Column Chart",
    chartOptions: {
      chart: { type: "column" },
      title: { text: "Column Chart" },
      series: [{ data: [3, 7, 2, 5, 8] }],
    },
  },
  {
    id: "tab4",
    label: "Pie Chart",
    chartOptions: {
      chart: { type: "pie" },
      title: { text: "Pie Chart" },
      series: [
        {
          data: [
            { name: "A", y: 50 },
            { name: "B", y: 30 },
            { name: "C", y: 20 },
          ],
        },
      ],
    },
  },
  {
    id: "tab5",
    label: "Area Chart",
    chartOptions: {
      chart: { type: "area" },
      title: { text: "Area Chart" },
      series: [{ data: [2, 4, 6, 8, 10] }],
    },
  },
  {
    id: "tab6",
    label: "Scatter Chart",
    chartOptions: {
      chart: { type: "scatter" },
      title: { text: "Scatter Chart" },
      series: [
        {
          data: [[1, 3], [2, 5], [3, 8], [4, 2], [5, 6]],
        },
      ],
    },
  },
  {
    id: "tab7",
    label: "Spline Chart",
    chartOptions: {
      chart: { type: "spline" },
      title: { text: "Spline Chart" },
      series: [{ data: [1, 2, 3, 5, 8, 13] }],
    },
  },
  {
    id: "tab8",
    label: "Bubble Chart",
    chartOptions: {
      chart: { type: "bubble" },
      title: { text: "Bubble Chart" },
      series: [
        {
          data: [
            [9, 81, 63],
            [98, 5, 89],
            [51, 50, 73],
            [41, 22, 14],
          ],
        },
      ],
    },
  },
  {
    id: "tab9",
    label: "Heatmap",
    chartOptions: {
      chart: { type: "heatmap" },
      title: { text: "Heatmap" },
      series: [
        {
          data: [
            [0, 0, 10],
            [0, 1, 19],
            [1, 0, 8],
            [1, 1, 24],
          ],
        },
      ],
    },
  },
  {
    id: "tab10",
    label: "Polar Chart",
    chartOptions: {
      chart: { polar: true, type: "line" },
      title: { text: "Polar Chart" },
      series: [{ data: [2, 4, 6, 8, 10] }],
    },
  },
]);

// 현재 활성화된 탭 ID
const activeTab = ref(tabs.value[0].id);

// 활성화된 차트의 옵션 계산
const activeChartOptions = computed(() => {
  const activeTabData = tabs.value.find((tab) => tab.id === activeTab.value);
  return activeTabData ? activeTabData.chartOptions : {};
});
</script>

<style>
/* 스타일 추가 가능 */
</style>
