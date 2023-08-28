import { defineStore } from 'pinia';

export const useDialogStoreStore = defineStore('DialogStore', {
  state: () => ({
    openDialog: null,
  }),
  actions: {
    openContactDialog() {
      this.openDialog = 'contactDialog';
    },
    openLoginDialog() {
      this.openDialog = 'loginDialog';
    },
    openNewsDialog() {
      this.openDialog = 'newsDialog';
    },
    closeDialog() {
      this.openDialog = null;
    },
  },
  getters: {},
});
