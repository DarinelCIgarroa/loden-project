import { defineStore } from 'pinia'
import * as LoanService from 'src/services/admin/LoansService';
import * as homeService from "src/services/HomePage/homeService";
import { notifySuccess, notifyError } from 'src/utils/notify';

export const useCompanyStore = defineStore('company', {
  state: () => ({
    currentLogo: null,
    baseUrl: null,
    company: {
      address: null,
      city: null,
      country: null,
      email: null,
      logo: null,
      name: null,
      phone_number: null,
      state: null,
      zip_code: null
    }
  }),
  getters: {
    getStateCompany: (state) => state.company,
    getStateCurrentLogo: (state) => state.currentLogo,
    getBaseUrl: (state) => state.baseUrl,
  },
  actions: {
    async getDataCompany() {
      try {
        const response = await LoanService.index()
        if (response.company !== null) {
          this.company = response.company
        }
      } catch (error) {
        notifyError(error.response.data.message)
      }
    },
    async getDataHomeCompany() {
      try {
        const response = await homeService.getDataCompany()
        this.company = response.data.company
      } catch (error) {
        notifyError(error.response.data.message)
      }
    },
    async getCompanyLogo() {
      try {
        const response = await LoanService.getLogo({ path: this.company.logo })
        this.currentLogo = response.data.url
      } catch (error) {
        notifyError(error.response.data.message)
      }
    },
    async store(payload) {
      try {
        const response = await LoanService.store(payload)
        this.company = response.company
        await this.getCompanyLogo()
        notifySuccess(response.message)
        return response
      } catch (error) {
        notifyError(error.response.data.message)
      }
    },
    setBaseUrl(url) {
      this.baseUrl = url
    },
  },
  persist: true
})
