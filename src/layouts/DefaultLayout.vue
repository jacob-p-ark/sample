<template>
  <div class="layout">
    <div class="content">
      <LNB />
      <main>
        <Header />
          <router-view />
     </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import LNB from '../components/LNB.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

LNB {
  width: 200px;
  background: #f5f5f5;
  border-right: 1px solid #ddd;
}
</style>
