import { defineStore } from 'pinia'
import * as loginService from 'src/services/admin/Login.js';
import axios from 'axios'
import { notifySuccess, notifyError } from 'src/utils/notify'
import { axiosInstance } from 'boot/axios'

export const user = defineStore('user', {
  state: () => ({
    id: null,
    name: null,
    email: null,
    token: null,
  }),
  getters: {
    getId: (state) => state.id,
    getName: (state) => state.name,
    getEmail: (state) => state.email,
    getToken: (state) => state.token
  },
  actions: {
    async getSanctumCookie() {
      try {
        await axios.get(`${process.env.BASE_URL}/sanctum/csrf-cookie`).then(() => {
        });
      } catch (error) {
        notifyError()
      }
    },
    async login(data) {
      try {
        const response = await loginService.login(data)
        notifySuccess(response.message)
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.token}`;
        window.sessionStorage.setItem('authentication_token', response.token);
        return response
      } catch (error) {
        notifyError(error.response.data.message)
      }
    },
    async logout(id) {
      try {
        const response = await loginService.logout(id)
        notifySuccess();
        return response
      } catch (error) {
        console.log('error', error);
        notifyError()
      }
    },
    setUser(payload) {
      if (payload.user.id) this.id = payload.user.id
      if (payload.user.name) this.name = payload.user.name
      if (payload.user.email) this.email = payload.user.email
      if (payload.token) this.token = payload.token
    },
    cleanUser() {
      this.id = null
      this.name = null
      this.email = null
      this.token = null
    }
  },
  persist: true
})
