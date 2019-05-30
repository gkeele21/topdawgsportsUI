<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-alert
          id="updateSuccess"
          variant="success"
          :show="successCount"
          dismissible
          fade
          @dismissed="successCount=0"
        >Changes have been saved.</b-alert>
        <b-alert
          id="updateError"
          variant="danger"
          :show="errorCount"
          dismissible
          fade
          @dismissed="errorCount=0"
        >Error saving Team. Please try again.</b-alert>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <h3>TEAM INFO</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button
            pill
            variant="success"
            @click="$router.push({name: 'adminteamedit', params: { teamid: teamid}})"
          >edit</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>&#160;</b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center">
        <b-col cols="2">
          <label>Team ID:</label>
        </b-col>
        <b-col>
          <span>{{team.FantasyTeamID}}</span>
        </b-col>
        <b-col cols="2">
          <label>Name:</label>
        </b-col>
        <b-col>
          <span>{{team.Name}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <label>User ID:</label>
        </b-col>
        <b-col>
          <span>{{team.UserID}}</span>
        </b-col>
        <b-col cols="2">
          <label>Fantasy League ID:</label>
        </b-col>
        <b-col>
          <span>{{team.FantasyLeagueID}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <label>Created Date:</label>
        </b-col>
        <b-col>
          <span>{{team.CreatedDate}}</span>
        </b-col>
        <b-col cols="2">
          <label>Schedule Team Number:</label>
        </b-col>
        <b-col>
          <span>{{team.ScheduleTeamNumber}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2" align-h="start">
          <label>Status:</label>
        </b-col>
        <b-col>
          <span>{{team.Status}}</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import moment from "moment";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(axios);
Vue.use(moment);

export default {
  name: "TeamInfoTable",
  props: {
    teamid: Number
  },
  data() {
    return {
      team: {
        FantasyTeamID: this.teamid,
        FantasyLeagueID: "",
        UserID: "",
        Name: "",
        CreatedDate: "",
        ScheduleTeamNumber: "",
        Status: ""
      },
      // sportlevels: [],
      statusOptions: [
        { text: "Active", value: "active" },
        { text: "Dormant", value: "dormant" }
      ],
      successCount: 0,
      errorCount: 0
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8888/api/v1/fantasyteams/" + this.team.FantasyTeamID
      )
      .then(response => {
        this.team = response.data;
        this.team.CreatedDate = moment(String(this.team.CreatedDate)).format(
          "YYYY-MM-DD hh:mm"
        );
      });
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .put(
          "http://localhost:8888/api/v1/fantasyteams/" +
            this.team.FantasyTeamID,
          this.team,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          this.successCount = 5;
          this.errorCount = 0;
          return response;
        })
        .catch(e => {
          this.successCount = 0;
          this.errorCount = 5;
          return e;
        });
    }
  }
};
</script>

