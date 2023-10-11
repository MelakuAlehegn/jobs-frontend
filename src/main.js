import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/assets/css/styles.css';
import { useAuthStore } from './stores/AuthStore';
import VueCookies from 'vue-cookies';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(VueCookies);

const vuetify = createVuetify();

const authStore = useAuthStore(pinia);
authStore.init();
app.use(vuetify);
app.mount('#app');