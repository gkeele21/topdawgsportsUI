<template>
  <div>
    <b-table striped hover :items="leagues" caption-top @row-clicked="myRowClickHandler">
      <template slot="table-caption">{{ fantasyGameName }} Leagues</template>
    </b-table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(axios);
Vue.use(BootstrapVue);

export default {
  name: "SeasonLeague",
  props: {
    gameInfo: {
      gameId: String,
      gameName: String
    }
  },
  data() {
    return {
      fantasyGameId: this.gameInfo.gameId,
      fantasyGameName: this.gameInfo.gameName,
      leagues: []
    };
  },
  mounted() {
    axios
      .get(
        "/api/seasons/" +
          this.$route.params.seasonid +
          "/games/" +
          this.fantasyGameId +
          "/leagues"
      )
      .then(response => (this.leagues = response.data));
  },
  methods: {
    myRowClickHandler(record) {
      this.$router.push({
        name: "leagueinfo",
        params: { leagueid: record["FantasyLeagueID"] }
      });
    }
  }
};
</script>