import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/assets/css/styles.css';
import { useAuthStore } from './stores/AuthStore';
import VueCookies from 'vue-cookies';


const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(VueCookies);

const authStore = useAuthStore(pinia);
authStore.init();

app.mount('#app');