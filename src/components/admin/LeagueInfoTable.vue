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
          <h3>LEAGUE INFO</h3>
        </b-col>
      </b-form-row>
      <b-row>
        <b-col>
          <b-button
            pill
            variant="success"
            @click="$router.push({name: 'adminleagueedit', params: { leagueId: leagueId}})"
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
          <label>League ID:</label>
        </b-col>
        <b-col>
          <span>{{league.FantasyLeagueID}}</span>
        </b-col>
        <b-col cols="2">
          <label>Name:</label>
        </b-col>
        <b-col>
          <span>{{league.Name}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <label>Season ID:</label>
        </b-col>
        <b-col>
          <span>{{league.SeasonID}}</span>
        </b-col>
        <b-col cols="2">
          <label>Fantasy Game ID:</label>
        </b-col>
        <b-col>
          <span>{{league.FantasyGameID}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <label>Description:</label>
        </b-col>
        <b-col>
          <span>{{league.Description}}</span>
        </b-col>
        <b-col cols="2">
          <label>Password:</label>
        </b-col>
        <b-col>
          <span>{{league.Password}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <label>Created On:</label>
        </b-col>
        <b-col>
          <span>{{league.CreatedDate}}</span>
        </b-col>
        <b-col cols="2">
          <label>Visibility:</label>
        </b-col>
        <b-col>
          <span>{{league.Visibility}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <label>Created By:</label>
        </b-col>
        <b-col>
          <span>{{league.CreatedByUserID}}</span>
        </b-col>
        <b-col cols="2" align-h="start">
          <label>Status:</label>
        </b-col>
        <b-col>
          <span>{{league.Status}}</span>
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
  name: "LeagueInfoTable",
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

