<template>
  <div class="main">
    <Screen
        v-for="id in screenIds"
        :key="id"
        :screenId="id"
    />
  </div>
</template>

<script>
import Screen from "./Screen.vue";

export default {
  name: "MainScreen",
  components: {
    Screen,
  },
  data() {
    return {
      screenIds: Array.from({ length: 100 }, (_, i) => `Screen-${i + 1}`), // 100개의 화면 ID 생성
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
</style>
