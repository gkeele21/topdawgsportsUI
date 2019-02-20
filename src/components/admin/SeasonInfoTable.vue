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
      <b-form-row>
        <b-col>
          <h3>SEASON INFO</h3>
        </b-col>
      </b-form-row>
    </b-container>
    <b-form @submit="onSubmit">
      <b-container>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="seasonIdGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Season ID:"
            >
              <b-form-input id="seasonId" type="text" v-model="season.SeasonID" disabled></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="seasonNameGroup"
              horizontal
              label-cols="4"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Name:"
            >
              <b-form-input id="seasonName" type="text" v-model="season.Name"></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6">
            <b-form-group
              id="seasonYearGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Starting Year:"
            >
              <b-form-input id="startingYear" type="number" v-model="season.StartingYear"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="seasonSportLevelIDGroup"
              horizontal
              label-cols="4"
              label-for="inputHorizontal"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Sport Level ID:"
            >
              <!--<b-form-input id="sportLevelID" type="text" v-model="season.SportLevelID"></b-form-input>-->
              <b-form-select
                id="sportLevelID"
                v-model="season.SportLevelID"
                :options="sportlevels"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row align-h="center">
          <b-col cols="6" align-h="start">
            <b-form-group
              id="seasonStatusGroup"
              horizontal
              label-cols="4"
              label-class="font-weight-bold pt-0"
              label-text-align="right"
              label="Status:"
            >
              <b-form-radio-group
                id="seasonStatus"
                name="seasonStatus"
                v-model="season.Status"
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

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(axios);

export default {
  name: "SeasonInfoTable",
  props: {
    seasonid: Number
  },
  data() {
    return {
      season: {
        SeasonID: this.seasonid,
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
    axios.get("/api/seasons/" + this.season.SeasonID + "/").then(response => {
      this.season = response.data;
      // Vue.console.log("SeasonInfo: " + JSON.stringify(response.data));
    });

    axios.get("/api/sportlevels").then(response => {
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
      fetch("/api/seasons/" + this.season.SeasonID, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(this.season) // body data type must match "Content-Type" header
      })
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

