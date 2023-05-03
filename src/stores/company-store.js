import { defineStore } from 'pinia'
import * as LoanService from 'src/services/admin/LoansService';
import { notifySuccess, notifyError } from 'src/utils/notify';

export const useCompanyStore = defineStore('team', {
  state: () => ({
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
    getCompany: (state) => state.company
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
    async store(payload) {
      try {
        console.log('payload store', payload);
        const response = await LoanService.store(payload)
        this.company = response.company
        notifySuccess(response.message)
        return response
      } catch (error) {
        notifyError(error.response.data.message)
      }
    },
  },
  persist: true
})
