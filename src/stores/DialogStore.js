import { defineStore } from 'pinia';

export const useDialogStore = defineStore('DialogStore', {
  state: () => ({
    activeDialog: null,
  }),
  actions: {
    openContactDialog() {
      this.activeDialog = 'contactDialog';
      console.log(this.activeDialog);
    },
    openLoginDialog() {
      this.activeDialog = 'loginDialog';
      console.log(this.activeDialog);
    },
    openNewsDialog() {
      this.activeDialog = 'newsDialog';
      console.log(this.activeDialog);
    },
    closeDialog() {
      this.activeDialog = null;
      console.log(this.activeDialog);
    },
  },
  getters: {},
});
