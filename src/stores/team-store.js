import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: () => ({
    teamList: []
  }),
  getters: {
    getTeamList: (state) => state.teamList
  },
  actions: {
    setTeam(payload) {
      this.clearData()
      this.teamList = payload
    },
    clearData() {
      this.teamList = []
    }
  },
  persist: true
})
