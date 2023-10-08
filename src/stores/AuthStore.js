import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        user: null,
        isAuthenticated: false
    }),
    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token)
            this.isAuthenticated = true;
        },
        setUser(user) {
            this.user = user
            localStorage.setItem('user', user)
        },
        logout() {
            this.token = null;
            this.user = null
            localStorage.removeItem('token')
            this.isAuthenticated = false;
        },
        init() {
            const storedToken = localStorage.getItem('token');
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