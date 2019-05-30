<template>
  <div>
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
    >Error saving Season. Please try again.</b-alert>

    <b-container>
      <b-row>
        <b-col>
          <h3>SEASON INFO</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button
            pill
            variant="success"
            @click="$router.push({name: 'adminseasonedit', params: { seasonId: seasonId}})"
          >edit</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>&#160;</b-col>
      </b-row>
        <b-row align-h="center">
          <b-col cols="2">
            <label>Season ID:</label>
          </b-col>
          <b-col>
            <span>{{season.SeasonID}}</span>
          </b-col>
          <b-col cols="2">
            <label>Name:</label>
          </b-col>
          <b-col>
            <span>{{season.Name}}</span>
          </b-col>
        </b-row>
        <b-row align-h="center">
          <b-col cols="2">
            <label>Starting Year:</label>
          </b-col>
          <b-col>
            <span>{{season.StartingYear}}</span>
          </b-col>
          <b-col cols="2">
            <label>Sport Level ID:</label>
          </b-col>
          <b-col>
            <span>{{season.SportLevelID}}</span>
          </b-col>
        </b-row>
        <b-row align-h="center">
          <b-col cols="2">
            <label>Status:</label>
          </b-col>
          <b-col>
            <span>{{season.Status}}</span>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(axios);

export default {
  name: "SeasonInfoTable",
  props: {
    seasonId: Number
  },
  data() {
    return {
      season: {
        SeasonID: this.seasonId,
        Name: "",
        StartingYear: "",
        Status: "",
        SportLevelID: ""
      },
      sportlevels: [],
      statusOptions: [
        { text: "Pending", value: "pending" },
        { text: "Active", value: "active" },
        { text: "Final", value: "final" }
      ],
      successCount: 0,
      errorCount: 0
    };
  },
  mounted() {
    axios
      .get("http://localhost:8888/api/v1/seasons/" + this.season.SeasonID)
      .then(response => {
        this.season = response.data;
        // Vue.console.log("SeasonInfo: " + JSON.stringify(response.data));
      });

    axios.get("http://localhost:8888/api/v1/sportlevels").then(response => {
      var numResults = response.data.length;
      // Vue.console.log("Num Sport Levels : " + numResults);
      for (var j = 0; j < numResults; j++) {
        var id = response.data[j].SportLevelID;
        var level = response.data[j].SportLevel;
        var sportname = response.data[j].SportName;
        var text = id + " - " + sportname + " - " + level;
        this.sportlevels.push({ text: text, value: id });
      }
    });
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .put(
          "http://localhost:8888/api/v1/seasons/" + this.season.SeasonID,
          this.season,
          {
            headers: { "content-type": "application/json" }
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

