import { defineStore } from 'pinia';

export const usePaginationStore = defineStore('pagination', {
  state: () => ({
    pagination: {
      current_page: 1,
      rows_page: 2,
      last_page: 5,
      max: 10,
    }
  }),
  getters: {
    getCurrentPage: (state) => state.pagination.current_page,
    getRowPage: (state) => state.pagination.rows_page,
    getLastPage: (state) => state.pagination.last_page,
    getPagination: (state) => state.pagination.pagination,
  },
  actions: {
    setCurrentPage(currentPage) {
      this.pagination.current_page = currentPage
    },
    setLastPage(lastPage) {
      this.pagination.last_page = lastPage
    },
    setPagination(payload) {
      if (payload.per_page) this.pagination.last_page = payload.last_page
      if (payload.total) this.pagination.max = payload.to
    },
  },
});
