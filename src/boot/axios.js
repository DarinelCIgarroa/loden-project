import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { user } from "src/stores/user-store";

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

if (user().getToken) {
  axiosInstance.interceptors.request.use(((config) => {
    config.headers.Authorization = `Bearer ${user().getToken}`;
    return config;
  }));
}


export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = axiosInstance
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axiosInstance }
