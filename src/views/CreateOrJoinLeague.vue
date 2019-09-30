<template>
  <div class="home">
    <Sidebar></Sidebar>

    <MainHeader></MainHeader>

    <div id="mainContent">
      <h2>Create or join a league</h2>
      <b-container>
        <b-row>
          <b-col>
            <div>SeasonId: {{seasonId}}</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div>FantasyGameId: {{fantasyGameId}}</div>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row align="center">
          <b-col cols="6">
            <b-button
              type="submit"
              variant="primary"
              @click="$router.push({name: 'createleague', params: { seasonid: seasonId, fantasygameid: fantasyGameId },})"
            >Create New League</b-button>
          </b-col>
          <b-col cols="6">
            <b-button type="submit" variant="primary">Join League</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import MainHeader from "@/components/MainHeader.vue";
import Sidebar from "@/components/Sidebar.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(axios);

export default {
  name: "createorjoinleague",
  components: {
    MainHeader,
    Sidebar
  },
  data() {
    return {
      seasonId: this.$route.params.seasonid,
      fantasyGameId: this.$route.params.fantasygameid,
      season: {}
    };
  },
  mounted() {
    axios
      .get("http://localhost:8888/api/v1/seasons/" + this.seasonId)
      .then(response => {
        this.user = response.data;
      });
  }
};
</script>

<style>
#mainContent {
  margin-top: 25px;
}

h2 {
  text-align: center;
}
</style>
