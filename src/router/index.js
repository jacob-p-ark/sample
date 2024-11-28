import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import App from '../App.vue';
import Home from '/src/views/Home.vue';
import About from '/src/views/About.vue';
import Chart from '/src/views/Chart.vue';
import {defineAsyncComponent} from "vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        // component: App,
        children: [
            {
                path: '',
                name: 'Home',
                // component: Home,
                component: defineAsyncComponent(() => import("/src/views/Home.vue")),
            },
            {
                path: 'about',
                name: 'About',
                // component: About,
                component: defineAsyncComponent(() => import('/src/views/About.vue')),
            },
            {
                path: 'chart',
                name: 'Chart',
                // component: Chart,
                component: defineAsyncComponent(() => import('/src/views/Chart.vue')),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
