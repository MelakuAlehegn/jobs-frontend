import VueCookies from 'vue-cookies';
import { defineStore } from "pinia";

export default useCompanyStore = defineStore('companyList', {
    state: () => ({
        companyList: []
    }),
    actions: {
        setCompanyList(companyList) {
            this.companyList = companyList
        }
    }
})