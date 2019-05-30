<template>
  <div>
    <b-container>
      <b-row align-h="end">
        <b-col cols="1" align-self="end">
          <b-button pill variant="success" @click="$router.push({name: 'adminteamcreate'})">+</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table
            striped
            hover
            :items="teams"
            :fields="fields"
            caption-top
            @row-clicked="myRowClickHandler"
          >
            <template slot="table-caption">Teams</template>
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
  name: "LeagueTeamsTable",
  props: {
    leagueid: Number
  },
  data() {
    return {
      fields: [
        {
          key: "FantasyTeamID",
          sortable: true
        },
        {
          key: "TeamName",
          sortable: true
        },
        {
          key: "DateCreated",
          sortable: true
        },
        {
          key: "Status",
          sortable: true
        },
        {
          key: "ScheduleTeamNumber",
          sortable: true
        },
        {
          key: "UserID",
          sortable: true
        },
        {
          key: "UserFirstName",
          sortable: true
        },
        {
          key: "UserLastName",
          sortable: true
        }
      ],
      teams: []
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8888/api/v1/fantasyleagues/" +
          this.leagueid +
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
        name: "adminteaminfo",
        params: { teamid: record["FantasyTeamID"] }
      });
    }
  }
};
</script>