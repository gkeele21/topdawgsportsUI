<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-table striped hover :items="teams" caption-top @row-clicked="myRowClickHandler">
            <template slot="table-caption">{{ fantasyGameName }} Standings</template>
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
  name: "StandingsTable",
  props: {
    gameInfo: {
      gameId: String,
      gameName: String
    }
  },
  data() {
    return {
      leagueID: 32,
      weekId: 1,
      teams: []
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8888/api/v1/loveemstandings/" +
          this.$route.params.leagueId +
          "/" +
          this.$route.params.weekId
      )
      .then(response => (this.teams = response.data));
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