<template>
  <div>
    <div class="row">
      <div class="col-md-12">
          <vuestic-widget headerText="SEASON INFO">
            <fieldset>
              <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group">
                            <input id="season-id" type="number" v-model="season.SeasonID" required/>
                            <label class="control-label" for="season-id">ID</label><i class="bar"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <input id="season-name" v-model="season.Name" required/>
                            <label class="control-label" for="season-name">NAME</label><i class="bar"></i>
                        </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <input id="season-sport" v-model="season.SportName" required/>
                        <label class="control-label" for="season-sport">SPORT</label><i class="bar"></i>
                      </div>
                    </div>
                  </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-group">
                      <input id="season-startingyear" type="number" v-model="season.StartingYear" required/>
                      <label class="control-label" for="season-startingyear">YEAR</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="season-status" v-model="season.Status" required/>
                      <label class="control-label" for="season-status">STATUS</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="season-level" v-model="season.SportLevelID" required/>
                      <label class="control-label" for="season-level">LEVEL</label><i class="bar"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <button slot="trigger" class="btn btn-sm btn-primary">
                    SAVE
                  </button>
                </div>
              </div>
                          <!--<div class="form-group">
                              <div class="input-group">
                                  <input id="toast-icon" v-model="toastIcon" required/>
                                  <label class="control-label" for="toast-icon">SeasonName</label><i class="bar"></i>
                              </div>
                          </div>
                          <div class="form-group toasts-position-group d-flex flex-row">
                              <toast-position-picker v-model="toastPosition" />
                              <vuestic-checkbox
                                      :label="'notificationsPage.toasts.fullWidthLabel' | translate"
                                      :id="'toast-fullwidth'"
                                      v-model="isToastFullWidth"/>
                          </div>
                          <button slot="trigger" class="btn btn-sm btn-primary" @click="launchToast">
                              {{'notificationsPage.toasts.launchToast' | translate}}
                          </button>-->

            </fieldset>
          </vuestic-widget>
      </div>
    </div>

    <!-- Head to Head Leagues -->
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="FANTASY LEAGUES - HEAD TO HEAD">
          <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>VISIBILITY</td>
                <td>CREATEDDATE</td>
                <td align="middle">STATUS</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in h2hGames">
                <td>{{item.FantasyLeagueID}}</td>
                <td>{{item.Name}}</td>
                <td>{{item.Visibility}}</td>
                <td>{{item.CreatedDate}}</td>
                <td align="middle">{{item.Status}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <!-- Salary Cap Leagues -->
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="FANTASY LEAGUES - SALARY CAP">
          <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>VISIBILITY</td>
                <td>CREATEDDATE</td>
                <td align="middle">STATUS</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in salGames">
                <td>{{item.FantasyLeagueID}}</td>
                <td>{{item.Name}}</td>
                <td>{{item.Visibility}}</td>
                <td>{{item.CreatedDate}}</td>
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
        season: {
          SeasonID: this.$route.params.seasonid,
          Name: '',
          StartingYear: '',
          Status: '',
          Sport: '',
          SportLevelID: '',
          SportName: ''
        },
        h2hGames: null,
        salGames: null
      }
    },
    mounted () {
      axios
        .get('http://localhost:8888/seasons/' + this.season.SeasonID + '/', {
          params: {
            includeSportLevels: 'true'
          }
        })
        .then(response => (this.season = response.data))
      axios
        .get('http://localhost:8888/seasons/' + this.season.SeasonID + '/games/1/leagues')
        .then(response => (this.h2hGames = response.data))
      axios
        .get('http://localhost:8888/seasons/' + this.season.SeasonID + '/games/2/leagues')
        .then(response => (this.salGames = response.data))
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
