import { defineStore } from 'pinia';
import { computed, ref } from "vue";


export const useWorkStore = defineStore('workStore', {
  state: () => ({
    currentPage: 1,
    list:[],
    totalPage:0,
  }),
  getters: {
    startIndex: (state) => (state.currentPage - 1),
    // endIndex: (state, getters) => state.startIndex,
    prevInfo: ( state ) => ( state.list[state.currentPage-2]),
    nextInfo: ( state ) => ( state.list[state.currentPage]),
    totalItem : ( state ) => ( state.totalPage )
  },
  actions: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
});




