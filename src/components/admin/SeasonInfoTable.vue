<template>
    <div>
        <b-alert id="updateSuccess" variant="success" :show="successCount" dismissible fade @dismissed="successCount=0">Changes have been saved.</b-alert>
        <b-alert id="updateError" variant="danger" :show="errorCount" dismissible fade @dismissed="errorCount=0">Error saving Season.  Please try again.</b-alert>

        <b-container>
            <b-form-row>
                <b-col><h3>SEASON INFO</h3></b-col>
            </b-form-row>
        </b-container>
        <b-form @submit="onSubmit">
            <b-container>
                <b-form-row align-h="center">
                    <b-col cols="6">
                        <b-form-group id="seasonIdGroup"
                                      horizontal
                                      label-cols="4"
                                      label-for="inputHorizontal"
                                      label-class="font-weight-bold pt-0"
                                      label-text-align="right"
                                      label="Season ID:">
                            <b-form-input id="seasonId" type="text" v-model="season.SeasonID" disabled></b-form-input>
                        </b-form-group>

                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="seasonNameGroup"
                                      horizontal
                                      label-cols="4"
                                      label-class="font-weight-bold pt-0"
                                      label-text-align="right"
                                      label="Name:">
                            <b-form-input id="seasonName" type="text" v-model="season.Name"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row align-h="center">
                    <b-col cols="6">
                        <b-form-group id="seasonYearGroup"
                                      horizontal
                                      label-cols="4"
                                      label-for="inputHorizontal"
                                      label-class="font-weight-bold pt-0"
                                      label-text-align="right"
                                      label="Starting Year:">
                            <b-form-input id="startingYear" type="number" v-model="season.StartingYear"></b-form-input>
                        </b-form-group>

                    </b-col>
                    <b-col cols="6">
                        <b-form-group id="seasonSportLevelIDGroup"
                                      horizontal
                                      label-cols="4"
                                      label-for="inputHorizontal"
                                      label-class="font-weight-bold pt-0"
                                      label-text-align="right"
                                      label="Sport Level ID:">
                            <!--<b-form-input id="sportLevelID" type="text" v-model="season.SportLevelID"></b-form-input>-->
                            <b-form-select id="sportLevelID" v-model="season.SportLevelID" :options="sportlevels" />
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row align-h="center">
                    <b-col cols="6" align-h="start">
                        <b-form-group id="seasonStatusGroup"
                                      horizontal
                                      label-cols="4"
                                      label-class="font-weight-bold pt-0"
                                      label-text-align="right"
                                      label="Active:">
                            <b-form-checkbox id="seasonStatus" v-model="season.Status" value="active" unchecked-value="inactive"></b-form-checkbox>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-container>
        </b-form>


        <!-- Head to Head Leagues -->
 <!--       <div class="row">
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
-->
        <!-- Salary Cap Leagues -->
<!--        <div class="row">
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
-->
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import BootstrapVue from 'bootstrap-vue'

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    Vue.use(BootstrapVue);
    Vue.use(axios);

    export default {
        name: 'SeasonInfoTable',
        data () {
            return {
                season: {
                    SeasonID: this.$route.params.seasonid,
                    Name: '',
                    StartingYear: '',
                    Status: '',
                    SportLevelID: '',
                },
                sportlevels: [],
                successCount: 0,
                errorCount: 0
            }
        },
        mounted () {
            axios
                    .get('http://localhost:8888/seasons/' + this.$route.params.seasonid + '/')
                    .then((response) => {
                        this.season = response.data
                        console.log("SeasonInfo: " + JSON.stringify(response.data))
                    })

            axios
                    .get('http://localhost:8888/sportlevels')
                    .then(response => {
                        var numResults = response.data.length;
                        console.log("Num Sport Levels : " + numResults);
                        for (var j=0; j < numResults; j++) {
                            var id = response.data[j].SportLevelID;
                            var level = response.data[j].SportLevel;
                            var sportname = response.data[j].SportName;
                            var text = id + " - " + sportname + " - " + level;
                            this.sportlevels.push({text: text, value: id});
                            console.log("Id : " + id);

                        }
//                        this.sportlevels = response.data
                        console.log("SportLevels : " + JSON.stringify(response.data))
            })
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                alert(JSON.stringify(this.season));
                axios.post('http://localhost:8888/seasons/' + this.season.SeasonID, {

                })



                this.successCount = 5;
                this.errorCount = 0;

            }
        }
    }
</script>

