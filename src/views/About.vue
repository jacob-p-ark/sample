<template>
  <div>
    <h1>About Page</h1>
    <p>This is the About Page.</p>
    <input type="text"/>
    <input type="text"/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Page 2 mounted');
});
// 특별한 스크립트는 없습니다.
</script>
