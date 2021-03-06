import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#023047",
        secondary: "#fb8500",
        accent: "#219ebc",
        error: "#d62828",
      },
    },
  },
});
