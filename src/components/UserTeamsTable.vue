<template>
  <div>
    <b-container>
      <b-row align-h="middle">
        <b-col cols="5">
          <b-table striped hover :items="teams" caption-top @row-clicked="myRowClickHandler">
            <template slot="table-caption">{{ fantasyGameName }} Teams</template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { mapState, mapGetters } from "vuex";

export default {
  name: "UserTeams",
  props: {
    userId: Number
  },
  data() {
    return {
      teams: []
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8888/api/v1/users/" + this.authUserId + "/activeteams"
      )
      .then(response => (this.teams = response.data));
  },
  computed: {
    ...mapGetters(["authUserId"])
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