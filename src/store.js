import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  debug: true,
  state: {
    status: "",
    accessToken: localStorage.getItem("token") || "",
    currentUser: {},
    adminSeasonId: ""
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, data) {
      state.status = "success";
      state.accessToken = data.Token;
      state.currentUser = data.User;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.accessToken = "";
    },
    setAdminSeasonId(state, data) {
      state.adminSeasonId = data.adminSeasonId;
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "/td/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.Token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common = {
              Authorization: `Bearer ${token}`
            };
            commit("auth_success", resp.data);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "/td/register",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.Token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common = {
              Authorization: `Bearer ${token}`
            };
            commit("auth_success", resp.data);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    setAdminSeasonId({ commit }, adminSeasonId) {
      return new Promise((resolve, reject) => {
        commit("setAdminSeasonId", adminSeasonId);
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => {
      return !!state.currentUser.username;
    },
    authStatus: state => {
      return state.status;
    },
    authUser: state => {
      return state.currentUser.username;
    },
    isAdmin: state => {
      return state.currentUser.is_admin;
    },
    adminSeasonId: state => {
      return state.adminSeasonId;
    }
  }
});
