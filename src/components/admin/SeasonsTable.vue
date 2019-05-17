<template>
  <div>
    <!--        <div class="row">
            <div class="col-md-12">
                {{ msg }}
                <div class="table-responsive">
                    <table class="table table-striped table-sm color-icon-label-table">
                        <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>YEAR</td>
                            <td>SPORT</td>
                            <td>SPORTLEVEL</td>
                            <td align="middle">STATUS</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, key, index) in items" :key="item.SeasonID">
                            <td>{{key}} - {{index}} - {{item.SeasonID}}</td>
                            <td>{{item.Name}}</td>
                            <td>{{item.StartingYear}}</td>
                            <td>{{item.SportName}}</td>
                            <td>{{item.SportLevel}}</td>
                            <td align="middle">{{item.Status}}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <hr />
    -->
    <b-container>
      <b-row align-h="end">
        <b-col cols="1" align-self="end">
          <b-button pill variant="success" @click="$router.push({name: 'adminseasoncreate'})">+</b-button>
        </b-col>
      </b-row>
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        caption-top
        @row-clicked="myRowClickHandler"
      >
        <template slot="table-caption">Seasons List</template>
        <!--      <template slot="Name" slot-scope="data">
        <b-link :to="{ name: 'seasoninfo', params: {seasonid: data.item.SeasonID}}">{{data.value}}</b-link>
        </template>-->
      </b-table>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  name: "SeasonsTable",
  props: {
    msg: String
  },
  data() {
    return {
      fields: [
        {
          key: "SeasonID",
          sortable: true
        },
        {
          key: "StartingYear",
          sortable: true
        },
        {
          key: "Name",
          sortable: true
        },
        "SportName",
        {
          key: "SportLevel"
        },
        {
          key: "Status"
        }
      ],
      items: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:8888/api/v1/seasons", {
        params: {
          orderBy: "season_id",
          orderByAsc: "desc",
          includeSportLevels: "true"
        }
      })
      .then(response => {
        this.items = response.data;
      })
      .catch(e => {
        alert("error getting results" + e);
      });
  },
  methods: {
    myRowClickHandler(record) {
      this.$router.push({
        name: "adminseasoninfo",
        params: { seasonid: record["SeasonID"] }
      });
    }
  }
};
</script>
