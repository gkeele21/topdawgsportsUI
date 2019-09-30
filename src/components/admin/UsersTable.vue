<template>
  <div>
    <h2>Users</h2>
    <b-table striped hover :items="items" :fields="fields" caption-top @row-clicked="myRowClickHandler">
      <template slot="table-caption">Users List</template>
      <template slot="Name" slot-scope="data">
        <a href="http://www.nfl.com">{{data.value}}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  name: "UsersTable",
  props: {
    msg: String
  },
  data() {
    return {
      fields: [
        {
          key: "UserID",
          sortable: true
        },
        {
          key: "FirstName",
          sortable: true
        },
        {
          key: "LastName",
          sortable: true
        },
        {
          key: "Username",
          sortable: true
        },
        {
          key: "UserPassword",
          sortable: true
        }
      ],
      items: null
    };
  },
  mounted() {
    axios({
      url: "http://localhost:8888/api/v1/users",
      params: {
        orderBy: "user_id",
        orderByAsc: "desc"
      },
      method: "GET"
    })
      .then(resp => {
        console.log("Data returned.");
        this.items = resp.data;
      })
      .catch(err => {
        alert("error getting results" + err);
      });
  },
  methods: {
    myRowClickHandler(record) {
      this.$router.push({
        name: "adminuserinfo",
        params: { userid: record["UserID"] }
      });
    }
  }
};
</script>
