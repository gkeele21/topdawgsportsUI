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
      <b-form-row>
        <b-col>
          <h3>CREATE NEW TEAM</h3>
        </b-col>
      </b-form-row>
    </b-container>
    <b-form @submit="onSubmit">
      <b-container>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="teamIdGroup"
              horizontal
              label-cols="4"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="League Id:"
            >
              <b-form-input id="leagueId" type="text" v-model="team.FantasyLeagueID" disabled></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="teamUserId"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="User Id:"
            >
              <b-form-input id="userId" type="text" v-model.number="team.UserID"></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="teamNameGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Name:"
            >
              <b-form-input id="name" type="text" v-model="team.Name"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="teamScheduleTeamNumberGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Schedule Team Number:"
            >
              <b-form-input
                id="scheduleTeamNumber"
                type="text"
                v-model.number="team.ScheduleTeamNumber"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6" align-h="start">
            <b-form-group
              id="teamStatusGroup"
              horizontal
              label-cols="4"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Status:"
            >
              <b-form-radio-group
                id="teamStatus"
                name="teamStatus"
                v-model="team.Status"
                :options="statusOptions"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center"></b-form-row>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import moment from "moment";
import { mapState, mapGetters } from "vuex";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(axios);
Vue.use(moment);

export default {
  name: "TeamInfoTable",
  data() {
    return {
      team: {
        UserID: 0,
        FantasyLeagueID: "",
        Name: "",
        CreatedDate: "",
        Status: "active",
        ScheduleTeamNumber: ""
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
  computed: {
    ...mapState(["adminLeagueId"])
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .post("http://localhost:8888/api/v1/fantasyteams", this.team, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          this.successCount = 5;
          this.errorCount = 0;
          this.$router.push({
            name: "adminleagueinfo",
            params: { leagueid: this.adminLeagueId }
          });
          return response;
        })
        .catch(e => {
          this.successCount = 0;
          this.errorCount = 5;
          return e;
        });
    }
  },
  created: function() {
    this.team.FantasyLeagueID = this.adminLeagueId;
  }
};
</script>

