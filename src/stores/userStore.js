import { defineStore } from 'pinia'
import * as loginService from "src/services/admin/Login.js";
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    id: null,
    name: null,
    email: null
  }),
  getters: {
    getId: (state) => state.id,
    getName: (state) => state.name,
    getEmail: (state) => state.email
  },
  actions: {
    async getSanctumCookie() {
      try {
        console.log('getSanctumCookie');
        await axios.get(`${process.env.BASE_URL}/sanctum/csrf-cookie`).then(response => {
          console.log('response', response);
        });
      } catch (error) {
        console.log('error', error);
      } finally {
        console.log('finally');
      }
    },
    async login(data) {
      try {
        const response = await loginService.login(data)
        console.log('response', response);
      } catch (error) {
        console.log('error', error);
      } finally {
        console.log('finally');
      }
    },
    setUser(payload) {
      if (payload.id) this.id = payload.id
      if (payload.name) this.name = payload.name
      if (payload.email) this.email = payload.email
    },
    cleanUser() {
      this.id = null
      this.name = null
      this.email = null
    }
  }
})
