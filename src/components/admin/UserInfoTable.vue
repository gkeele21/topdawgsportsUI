<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h3>USER INFO</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button
            pill
            variant="success"
            @click="$router.push({name: 'adminuseredit', params: { userid: userid}})"
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
          <label>User ID:</label>
        </b-col>
        <b-col>
          <span>{{user.UserID}}</span>
        </b-col>
        <b-col cols="2">
          <label>Email:</label>
        </b-col>
        <b-col>
          <span>{{user.Email}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <label>First Name:</label>
        </b-col>
        <b-col>
          <span>{{user.FirstName}}</span>
        </b-col>
        <b-col cols="2">
          <label>Last Name:</label>
        </b-col>
        <b-col>
          <span>{{user.LastName}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2">
          <label>Cell:</label>
        </b-col>
        <b-col>
          <span>{{user.Cell}}</span>
        </b-col>
        <b-col cols="2">
          <label>Username:</label>
        </b-col>
        <b-col>
          <span>{{user.Username}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2" align-h="start">
          <label>Password:</label>
        </b-col>
        <b-col>
          <span>{{user.UserPassword}}</span>
        </b-col>
        <b-col cols="2" align-h="start">
          <label>Created:</label>
        </b-col>
        <b-col>
          <span>{{user.CreatedDate}}</span>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="2" align-h="start">
          <label>Last Logged In:</label>
        </b-col>
        <b-col>
          <span>{{user.LastLoginDate}}</span>
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
  name: "UserInfoTable",
  props: {
    userid: Number
  },
  data() {
    return {
      user: {
        UserID: this.userid,
        FirstName: "",
        LastName: "",
        Email: "",
        Cell: "",
        Username: "",
        UserPassword: "",
        CreatedDate: "",
        LastLoginDate: ""
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
      .get("http://localhost:8888/api/v1/users/" + this.user.UserID)
      .then(response => {
        this.user = response.data;
        this.user.CreatedDate = moment(String(this.user.CreatedDate)).format(
          "YYYY-MM-DD hh:mm"
        );
        this.user.LastLoginDate = moment(
          String(this.user.LastLoginDate)
        ).format("YYYY-MM-DD hh:mm");
      });
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .put(
          "http://localhost:8888/api/v1/users/" + this.user.UserID,
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

