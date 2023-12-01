import VueCookies from 'vue-cookies';
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: VueCookies.get('token') || null,
        user: null,
        isAuthenticated: false
    }),
    actions: {
        setToken(token) {
            this.token = token;
            VueCookies.set('token', token);
            this.isAuthenticated = true;
        },
        setUser(user) {
            this.user = user
            VueCookies.set('user', user);
        },
        logout() {
            this.token = null;
            this.user = null
            VueCookies.remove('token');
            this.isAuthenticated = false;
        },
        init() {
            const storedToken = VueCookies.get('token');
            if (storedToken) {
                this.token = storedToken;
                this.isAuthenticated = true;
            }
        }
    },
    created() {
        this.init();
    }
})