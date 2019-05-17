<template>
  <div>
    <b-container>
      <b-row align-h="end">
        <b-col cols="1" align-self="end">
          <b-button
            pill
            variant="success"
            @click="$router.push({name: 'adminleaguecreate', params: { seasonId: seasonId}})"
          >+</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table striped hover :items="leagues" caption-top @row-clicked="myRowClickHandler">
            <template slot="table-caption">{{ fantasyGameName }} Leagues</template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

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
      leagues: [],
      seasonId: this.$route.params.seasonid
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8888/api/v1/seasons/" +
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
        name: "adminleagueinfo",
        params: { leagueid: record["FantasyLeagueID"] }
      });
    }
  }
};
</script>