<template>
  <div class="home">
    <Sidebar></Sidebar>

    <MainHeader></MainHeader>

    <div id="mainContent">
      <div id="leftSide">
        <div id="topRow">
          <div>
            <p class="gameTitle">Fantasy Golf</p>
            <img src="../assets/GolfPin.png">
          </div>
        </div>
        <div id="middleRow">
          <div>
            <p class="gameTitle">Seed Challenge</p>
            <img src="../assets/Basketball.png">
          </div>
          <div>
            <p class="gameTitle">Bracket Challenge</p>
            <img src="../assets/Brackets.png">
          </div>
        </div>

        <div id="bottomRow">
          <div>
            <p class="gameTitle">Fantasy Football</p>
            <img src="../assets/Football.png">
          </div>

          <div>
            <p class="gameTitle">Salary Cap</p>
            <img src="../assets/SalaryCap.png">
          </div>

          <div>
            <p class="gameTitle">Love Em & Leave Em</p>
            <img src="../assets/Trophy.png">
          </div>
          <div>
            <p class="gameTitle">Pickem</p>
            <img src="../assets/Helmet.png">
          </div>
        </div>
      </div>

      <div id="rightSide">
        <h2>Game Name</h2>
        <label class="infoHeading">Description:</label>
        <p></p>
        <label class="infoHeading">Registration Deadline:</label>
        <p></p>
        <label class="infoHeading">Cost:</label>
        <p></p>
        <label class="infoHeading">League Type:</label>
        <p></p>
        <label class="infoHeading">Prize(s):</label>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "home",
  components: {
    MainHeader,
    Sidebar
  }
};
</script>

<style>
#mainContent {
  margin-top: 25px;
}

#leftSide {
  float: left;
  margin-top: 5px;
  margin-left: 125px;
  text-align: center;
  width: 60%;
}
#leftSide img {
  padding: 0px 35px;
}
#middleRow div,
#bottomRow div {
  display: inline-block;
}
.gameTitle {
  color: darkred;
  font-size: 1.1em;
  font-weight: bold;
}
.infoHeading {
  font-weight: bold;
}

h2 {
  text-align: center;
}
</style>
