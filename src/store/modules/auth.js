import Vue from "vue";
import jwt_decode from "jwt-decode";

export const auth = {
  namespaced: true,
  state: {
    token_data: {
      token: localStorage.getItem("t"),
      uid: localStorage.getItem("uid"),
    },
    endpoints: {
      login: "auth/login/",
      logout: "auth/logout/",
      signup: "auth/signup/",
      user: "v1/users/",
      password_instructions: "auth/password_instructions/",
      reset_password: "auth/reset_password/",
    },
  },
  mutations: {
    updateToken(_, token_data) {
      localStorage.setItem("t", token_data.authorization);
      localStorage.setItem("uid", token_data.uid);
    },
    removeToken() {
      localStorage.removeItem("t");
      localStorage.removeItem("uid");
    },
  },
  actions: {
    async login({ commit, state }, payload) {
      try {
        let response = await Vue.axios.post(state.endpoints.login, {
          user: {
            email: payload.email,
            password: payload.password,
          },
        });
        commit("updateToken", response.headers);
        return;
      } catch (error) {
        throw error.response;
      }
    },
    async logout({ commit, state }) {
      try {
        const config = {
          headers: { Authorization: localStorage.getItem('t') },
        };
        await Vue.axios.delete(state.endpoints.logout, config);
        commit("removeToken");
        return;
      } catch (error) {
        throw error.response;
      }
    },

    async signup({ commit, state }, payload) {
      try {
        let response = await Vue.axios.post(state.endpoints.signup, {
          user: {
            first_name: payload.first_name,
            last_name: payload.last_name,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation,
            market_id: payload.market_id,
            terms_and_policy: payload.terms_and_policy,
          },
        });

        console.log(response.data);
        let token = response.data.token;
        commit("updateToken", token);
        return;
      } catch (error) {
        console.log(error.data);
        throw error.response;
      }
    },

    async inspectToken() {
      try {
        const token = localStorage.getItem('t');
        if (token) {
          const decoded = jwt_decode(token);
          const exp = decoded.exp;
          if (exp - Date.now() / 1000 <= 0) {
            Vue.$toasted.show("Your token has expired. Please sign in", {
              type: "error",
            });
            return false;
          }
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
    },

    async resetPasswordEmail({ state }, payload) {
      try {
        let response = await Vue.axios.get(
          state.endpoints.reset_password +
            `?email=${encodeURIComponent(payload.email)}/`
        );
        return response.data;
      } catch (error) {
        throw error.response;
      }
    },

    async resetPassword({ state }, payload) {
      try {
        let response = await Vue.axios.put(
          state.endpoints.reset_password + `${payload.token}/`,
          {
            registration: {
              password: payload.password,
              password_confirmation: payload.password_confirmation,
            },
          }
        );
        return response.data;
      } catch (error) {
        throw error.response;
      }
    },

    async getUser({ state }) {
      try {
        const config = {
          headers: { Authorization: localStorage.getItem('t') },
        };
        let response = await Vue.axios.get(
          state.endpoints.user + `${localStorage.getItem('uid')}/`,
          config
        );
        let user = response.data.data;
        return user;
      } catch (error) {
        console.log(error);
        throw error.response;
      }
    },
  },
};
