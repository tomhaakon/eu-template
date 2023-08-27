import "./assets/tailwind.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import en from "./locales/en.json";
import bg from "./locales/bg.json";
import no from "./locales/no.json";

const i18n = createI18n({
	locale: "en",
	fallbackLocale: "en",
	messages: { en, bg, no },
});

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);

app.mount("#app");
