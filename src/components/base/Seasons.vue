<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="SEASONS">
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
              <tr v-for="item in items">
                <td>{{item.SeasonID}}</td>
                <td>
                    <router-link :to="{ name: 'seasoninfo', params: { seasonid: item.SeasonID } }">{{item.Name}}</router-link>
                </td>
                <td>{{item.StartingYear}}</td>
                <td>{{item.SportName}}</td>
                <td>{{item.SportLevel}}</td>
                <td align="middle">{{item.Status}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import BadgeColumn from '../tables/BadgeColumn.vue'
  import {SpringSpinner} from 'epic-spinners'

  Vue.component('badge-column', BadgeColumn)

  export default {
    components: {
      SpringSpinner
    },
    data () {
      return {
        items: null
      }
    },
    mounted () {
      axios
        .get('http://localhost:8888/seasons', {
          params: {
            orderBy: 'season_id',
            orderByAsc: 'desc',
            includeSportLevels: 'true'
          }
        })
        .then(response => (this.items = response.data))
    }
  }
</script>

<style lang="scss">

  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }
</style>
