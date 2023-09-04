import { defineStore } from 'pinia';

export const useDialogStore = defineStore('DialogStore', {
  state: () => ({
    activeDialog: null,
    blurBg: false,
    showPartner: null,
  }),
  actions: {
    openContactDialog() {
      this.activeDialog = 'contact';
      console.log(this.activeDialog);
    },
    openLoginDialog() {
      this.activeDialog = 'login';
      console.log(this.activeDialog);
    },
    openNewsDialog() {
      this.activeDialog = 'news';
      console.log(this.activeDialog);
    },
    openPartnerDialog(partner) {
      this.activeDialog = 'partner';
      this.showPartner = partner;
      console.log(partner);
    },
    closeDialog() {
      if (this.showPartner !== null) {
        this.showPartner = null;
      }
      if (!this.activeDialog) {
        return;
      }
      this.blurBg = false;
      this.activeDialog = null;
      console.log('closed dialog');
    },
  },
  getters: {},
});
