import { defineStore } from 'pinia';

const useMainStore = defineStore({
  id: 'main',

  state: () => ({
    isLoading: false,
  }),
});

export default useMainStore;
