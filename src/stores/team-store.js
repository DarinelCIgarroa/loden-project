import { defineStore } from 'pinia'
import * as TeamService from 'src/services/admin/TeamService';
import { notifySuccess, notifyError } from 'src/utils/notify';

export const useTeamStore = defineStore('team', {
  state: () => ({
    teamList: []
  }),
  getters: {
    getTeamList: (state) => state.teamList
  },
  actions: {
    async store(payload) {
      try {
        const response = await TeamService.store(payload)
        this.teamList.unshift(response.integrant)
        notifySuccess(response.message)
        return response
      } catch (error) {
        Object.keys(error.response.data.errors).forEach((key) => {
          error.response.data.errors[key].forEach((errorMessage) => {
            notifyError(errorMessage);
          });
        });
      }
    },
    async update(payload, id) {
      try {
        const response = await TeamService.update(payload, id)
        const index = this.teamList.findIndex((integrant) => integrant.id === id);
        this.teamList.splice(index, 1, response.integrant);
        notifySuccess(response.message)
        return response
      } catch (error) {
        for (const key in error.response.data.errors) {
          error.response.data.errors[key].forEach((errorMessage) => {
            notifyError(errorMessage);
          });
        }
      }
    },
    async delete(idIntegrant) {
      try {
        const response = await TeamService.destroy(idIntegrant)
        const filter = this.teamList.filter((element) => element.id != response.integrant.id)
        this.teamList = filter
        notifySuccess(response.message)
        return response
      } catch (error) {
        notifyError(error.response.data.message)
      }
    },
    setTeam(payload) {
      this.clearData()
      this.teamList = payload
    },
    addIntegrant(payload) {
      this.teamList.push(payload)
    },
    clearData() {
      this.teamList = []
    }
  },
  persist: true
})
