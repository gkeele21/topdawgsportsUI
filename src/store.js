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
    adminSeasonId: "",
    adminLeagueId: "",
    adminTeamId: ""
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, data) {
      state.status = "success";
      state.accessToken = data.Token;
      state.currentUser = data.User;
      console.log("AuthUser :");
      console.log(state.currentUser);
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.accessToken = "";
      state.currentUser = {};
    },
    setAdminSeasonId(state, data) {
      state.adminSeasonId = data.adminSeasonId;
    },
    setAdminLeagueId(state, data) {
      state.adminLeagueId = data.adminLeagueId;
    },
    setAdminTeamId(state, data) {
      state.adminTeamId = data.adminTeamId;
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
      console.log("setting adminSeasonId to " + adminSeasonId);
      return new Promise((resolve, reject) => {
        commit("setAdminSeasonId", adminSeasonId);
        resolve();
      });
    },
    setAdminLeagueId({ commit }, adminLeagueId) {
      console.log("setting adminLeagueId to " + adminLeagueId);
      return new Promise((resolve, reject) => {
        commit("setAdminLeagueId", adminLeagueId);
        resolve();
      });
    },
    setAdminTeamId({ commit }, adminTeamId) {
      console.log("setting adminTeamId to " + adminTeamId);
      return new Promise((resolve, reject) => {
        commit("setAdminTeamId", adminTeamId);
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
    authUserId: state => {
      return state.currentUser.user_id;
    },
    isAdmin: state => {
      return state.currentUser.is_admin;
    }
  }
});
