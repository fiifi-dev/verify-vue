import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const instance = axios.create({
  baseURL: "https://api-staging.veryfy.net/",
});

Vue.use(VueAxios, instance);
