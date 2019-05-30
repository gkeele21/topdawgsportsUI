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
        >Error saving League. Please try again.</b-alert>
      </b-row>
    </b-container>
    <b-container>
      <b-form-row>
        <b-col>
          <h3>LEAGUE EDIT</h3>
        </b-col>
      </b-form-row>
    </b-container>
    <b-form @submit="onSubmit">
      <b-container>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="leagueIdGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="League ID:"
            >
              <b-form-input id="leagueId" type="text" v-model="league.FantasyLeagueID" disabled></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="leagueNameGroup"
              horizontal
              label-cols="4"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Name:"
            >
              <b-form-input id="leagueName" type="text" v-model="league.Name"></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="leagueSeasonIdGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Season ID:"
            >
              <b-form-input id="seasonID" type="text" v-model="league.SeasonID"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="leagueFantasyGameIDGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Fantasy Game ID:"
            >
              <b-form-input id="gameID" type="text" v-model="league.FantasyGameID"></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="leagueDescriptionGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Description:"
            >
              <b-form-input id="description" type="text" v-model="league.Description"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="leaguePasswordGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Password:"
            >
              <b-form-input id="leaguePassword" type="text" v-model="league.Password"></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="leagueCreatedDate"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Created On:"
            >
              <b-form-input id="createdDate" type="text" v-model="league.CreatedDate" disabled></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="leagueVisibility"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Visibility:"
            >
              <b-form-radio-group
                id="leagueVisibility"
                name="leagueVisibility"
                v-model="league.Visibility"
                :options="visibilityOptions"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="leagueCreatedBy"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Created By:"
            >
              <b-form-input id="createdBy" type="text" v-model="league.CreatedByUserID" disabled></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6" align-h="start">
            <b-form-group
              id="leagueStatusGroup"
              horizontal
              label-cols="4"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Status:"
            >
              <b-form-radio-group
                id="leagueStatus"
                name="leagueStatus"
                v-model="league.Status"
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
  name: "LeagueEditTable",
  props: {
    leagueid: Number
  },
  data() {
    return {
      league: {
        FantasyLeagueID: this.leagueid,
        SeasonID: "",
        FantasyGameID: "",
        Name: "",
        Description: "",
        LeaguePassword: "",
        Visibility: "",
        CreatedDate: "",
        CreatedByUserID: "",
        Status: ""
      },
      // sportlevels: [],
      statusOptions: [
        { text: "Pending", value: "pending" },
        { text: "Active", value: "active" },
        { text: "Final", value: "final" }
      ],
      visibilityOptions: [
        { text: "Public", value: "public" },
        { text: "Private", value: "private" }
      ],
      successCount: 0,
      errorCount: 0
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8888/api/v1/fantasyleagues/" +
          this.league.FantasyLeagueID
      )
      .then(response => {
        this.league = response.data;
        this.league.CreatedDate = moment(
          String(this.league.CreatedDate)
        ).format("YYYY-MM-DD hh:mm");
      });

    // axios.get("/api/sportlevels").then(response => {
    //   var numResults = response.data.length;
    //   // Vue.console.log("Num Sport Levels : " + numResults);
    //   for (var j = 0; j < numResults; j++) {
    //     var id = response.data[j].SportLevelID;
    //     var level = response.data[j].SportLevel;
    //     var sportname = response.data[j].SportName;
    //     var text = id + " - " + sportname + " - " + level;
    //     this.sportlevels.push({ text: text, value: id });
    //   }
    // });
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .put(
          "http://localhost:8888/api/v1/fantasyleagues/" +
            this.league.FantasyLeagueID,
          this.league,
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
            name: "adminleagueinfo",
            params: { leagueid: this.leagueid }
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

