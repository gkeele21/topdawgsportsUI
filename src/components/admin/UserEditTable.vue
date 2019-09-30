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
          <h3>USER INFO</h3>
        </b-col>
      </b-form-row>
    </b-container>
    <b-form @submit="onSubmit">
      <b-container>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="userIdGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="User ID:"
            >
              <b-form-input id="userId" type="text" v-model="user.UserID" disabled></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="emailGroup"
              horizontal
              label-cols="4"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Email:"
            >
              <b-form-input id="email" type="text" v-model="user.Email"></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="firstNameGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="First Name:"
            >
              <b-form-input id="firstName" type="text" v-model="user.FirstName"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="lastNameGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Last Name:"
            >
              <b-form-input id="lastName" type="text" v-model="user.LastName"></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="cellGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Cell:"
            >
              <b-form-input id="cell" type="text" v-model="user.Cell" disabled></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="teamScheduleTeamNumber"
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
          this.$router.push({
            name: "adminteaminfo",
            params: { teamid: this.teamid }
          });

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

