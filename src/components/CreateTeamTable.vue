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
import { mapGetters } from "vuex";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(axios);
Vue.use(moment);

export default {
  name: "CreateTeamTable",
  props: {
    fantasyleagueid: Number
  },
  data() {
    return {
      team: {
        UserID: 0,
        FantasyLeagueID: this.$props.fantasyleagueid,
        Name: "",
        CreatedDate: "",
        Status: "active",
        ScheduleTeamNumber: 0
      },
      successCount: 0,
      errorCount: 0
    };
  },
  computed: {
    ...mapGetters(["authUserId"])
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
            params: { leagueid: this.team.FantasyLeagueID }
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
    this.team.UserID = this.authUserId;
  }
};
</script>

