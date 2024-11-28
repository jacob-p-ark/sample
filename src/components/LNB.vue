<template>
  <aside>
    <Qlist dense>
      <Qitem clickable v-ripple @click="goTo('Home')">
        Home
      </Qitem>
      <Qitem clickable v-ripple @click="goTo('About')">
        About
      </Qitem>
      <Qitem clickable v-ripple @click="goTo('Chart')">
        Chart
      </Qitem>
    </Qlist>
  </aside>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

function goTo(routeName) {
  router.push({name: routeName});
}
</script>

<style scoped>
aside {
  width: 200px;
  background: #f5f5f5;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

q-item {
  margin-bottom: 10px;
}

q-list {
  display: grid;
}
</style>
