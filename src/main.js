import { createApp } from 'vue';
import { Quasar } from 'quasar';
import router from './router';
// import 'quasar/src/css/index.sass';

import App from './App.vue';

const app = createApp(App);

app.use(Quasar, {
    plugins: {}, // 필요한 Quasar 플러그인 추가 가능
});

app.use(router);

app.mount('#app');
