<template >
<!--  <div>-->
<!--    <div class="layout">-->
<!--      <div class="content">-->
<!--        <LNB />-->
<!--        <main>-->
<!--          <Header />-->
<!--          <keep-alive :include="cachedComponents">-->
<!--            <router-view />-->
<!--          </keep-alive>-->
<!--        </main>-->
<!--      </div>-->
<!--      <Footer />-->
<!--    </div>-->
<!--  </div>-->
  <keep-alive :include="cachedComponents">
    <router-view />
  </keep-alive>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import LNB from "./components/LNB.vue";

  // 현재 라우터 경로를 기반으로 동적으로 캐시할 컴포넌트 설정
  const route = useRoute();

  const cachedComponents = computed(() => {
    return [route.name as string]; // 현재 경로에 해당하는 컴포넌트를 캐시
  });
</script>
