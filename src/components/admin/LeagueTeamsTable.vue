<template>
  <div>
    <b-table striped hover :items="teams" caption-top @row-clicked="myRowClickHandler">
      <template slot="table-caption">{{ fantasyLeagueName }} Teams</template>
    </b-table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  name: "LeagueTeams",
  props: {
    leagueInfo: {
      leagueId: String,
      leagueName: String
    }
  },
  data() {
    return {
      fantasyLeagueId: this.leagueInfo.leagueId,
      fantasyLeagueName: this.leagueInfo.leagueName,
      teams: []
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8888/api/v1/fantasyleagues/" +
          this.leagueInfo.leagueId +
          "/teams"
      )
      .then(response => (this.teams = response.data))
      .catch(e => {
        return e;
      });
  },
  methods: {
    myRowClickHandler(record) {
      this.$router.push({
        name: "teaminfo",
        params: { teamid: record["FantasyTeamID"] }
      });
    }
  }
};
</script>