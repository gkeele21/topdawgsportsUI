<template>
  <div class="home">
    <Sidebar></Sidebar>

    <MainHeader></MainHeader>

    <div id="mainContent">
      <div id="leftSide">
        <div id="topRow">
          <h3 class="gameHeading">Fantasy Golf</h3>
          <img class="golfimage">
        </div>
        <div id="middleRow">
          <div>
            <h3 class="gameHeading">Bracket Challenge</h3>
            <img class="golfimage">
            <h3 class="gameHeading">Seed Challenge</h3>
            <img class="golfimage">
          </div>
        </div>
        <div id="bottomRow">
          <img class="golfimage">
          <img class="golfimage">
          <img class="golfimage">
          <img class="golfimage">
        </div>
      </div>
      <div id="rightSide">
        <h2>Informational</h2>
      </div>
      <!-- <div id="topSection">
        <div id="marchMadness">
          <h2>March Madness</h2>
          <div id="bracketChallenge">
            <h3>Bracket Challenge</h3>
            <img>
          </div>
          <div id="seedChallenge">
            <h3>Seed Challenge</h3>
            <img>
          </div>
        </div>

        <div id="golf">
          <h2>Golf</h2>
          <div id="phase1">
            <h3>Golf</h3>
            <img>
          </div>
        </div>
      </div>

      <div id="bottomSection">
        <div id="fantasyFootball">
          <h2>Football</h2>
          <div id="headToHead">
            <h3>Fantasy Football</h3>
            <img>
          </div>
          <div id="salaryCap">
            <h3>Salary Cap</h3>
            <img>
          </div>
          <div id="pickem">
            <h3>Pickem</h3>
            <img>
          </div>
          <div id="loveEm">
            <h3>Love Em &amp; Leave Em</h3>
            <img>
          </div>
        </div>
      </div>-->
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
  margin-left: 250px;
  margin-top: 10px;
  text-align: center;
}

#leftSide {
  width: 50%;
  float: left;
  text-align: center;
  border: 0px;
}

#rightSide {
  width: 50%;
  float: left;
}

#leftSide img {
  height: 112px;
  width: 112px;
  border-style: none;
}

#middleRow > div {
  display: inline;
}

.golfimage {
  background: url(../assets/SportsSet2.png) 120px -10px;
}

/* #mainContent {
  margin-left: 250px;
  margin-top: 10px;
  text-align: center;
}

#mainContent img {
  height: 112px;
  width: 112px;
}

#mainContent h2 {
  color: white;
}

#bracketChallenge img {
  background: url(../assets/SportsSet.png) -265px -10px;
}
#seedChallenge img {
  background: url(../assets/SportsSet.png) -135px -10px;
}

#golf img {
  background: url(../assets/SportsSet.png) 120px -10px;
}

#headToHead img {
  background: url(../assets/FootballSet.png) 245px -10px;
}
#salaryCap img {
  background: url(../assets/FootballSet.png) 120px -10px;
}
#pickem img {
  background: url(../assets/FootballSet.png) -135px -10px;
}
#loveEm img {
  background: url(../assets/FootballSet.png) -266px -10px;
}

#bottomSection {
  margin-top: 20px;
  overflow: hidden;
}
#topSection {
  overflow: hidden;
  text-align: center;
}
#bottomSection div,
#topSection div {
  background-color: #ab9869;
  border-radius: 40px;
  float: left;
  margin: 0px 15px;
  padding: 15px;
}
#bottomSection div div,
#topSection div div {
  cursor: pointer;
}

#fantasyFootball,
#golf,
#marchMadness {
  background-color: #45597c !important;
  border: thick solid black;
  color: #2b1a0a;
} */
</style>
