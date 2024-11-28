<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
    <input type="text"/>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Page 1 mounted');
});
// 특별한 스크립트는 없습니다.
</script>
