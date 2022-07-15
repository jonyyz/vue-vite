import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { VuesticPlugin } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import "@/style/app.scss";
import { locales } from "./lang";
import Router from "./views/router";
import App from "./App.vue";

const defaultLanguage = locales[0].id;

function loadTranslations() {
  return locales.reduce(async (promise, { id: localeId }) => {
    const messages = await promise;
    messages[localeId] = (await import(`./lang/${localeId}.json`)).default;
    return messages;
  }, Promise.resolve({}));
}

(async () => {
  const messages = await loadTranslations();
  const i18n = createI18n({
    locale: "es",
    messages,
    fallbackLocale: defaultLanguage,
  });

  const app = createApp(App);

  app.use(VuesticPlugin, {
    components: {
      VaButton: {
        rounded: false,
      },
      VaInput: {
        outline: true,
      },
    },
  });
  app.use(i18n);
  app.use(Router);
  app.mount("#app");
})();
