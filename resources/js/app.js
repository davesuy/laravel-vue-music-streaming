import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia'

const app = createApp({});

import App from './App.vue';
import router from './router'

const pinia = createPinia()
app.component('app',App);

app.use(pinia)
app.use(router)
app.mount('#app');
