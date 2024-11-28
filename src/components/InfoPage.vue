<template>
  <div>
    <h2>About Page</h2>
    <p>This is the InfoPage</p>
    <input type="text" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log('InfoPage mounted');
});

onUnmounted(() => {
  console.log('InfoPage unmounted');
});
</script>
