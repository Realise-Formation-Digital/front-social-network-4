<template>
  <div class="footer">
    <div class="container1">
      <router-link to="/">
        <img id="logovoyage" src="../../assets/logo/logo-backpack.png" />
      </router-link>
    </div>

    <div class="container1">
      <p class="copyright">© 2021 BackPack, Inc. All rights reserved</p>
    </div>

    <div class="container1" id="cont3">
      <router-link to="/contact">
        <img class="icônes" src="../../assets/icônes/black-fb.png" />
      </router-link>

      <router-link to="/contact">
        <img class="icônes" src="../../assets/icônes/black-insta.png" />
      </router-link>

      <router-link to="/contact">
        <img class="icônes" src="../../assets/icônes/black-twitter.png" />
      </router-link>

      <router-link to="/contact">
        <img class="icônes" src="../../assets/icônes/black-tripadvisor.png" />
      </router-link>

      <router-link to="/contact">
        <img class="icônes" src="../../assets/icônes/black-airbnb.png" />
      </router-link>
      <!-- 
                <router-link  to="/contact">
                    <img class="icônes, gmaps" src="../../assets/icônes/black-gmapspin.png"> 
                </router-link>
            -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
/*
    colors : // #A81E1C // #5C2C2B // #DB2825 // #E1E1E1 // #5C1110 //
    */

.footer {
  background-color: rgb(212, 212, 212);
  color: black;
  display: flex;
  width: 100%;

  width: 100%;

  font-weight: bold;
  font-size: medium;
}
.container1 {
  width: 100%;
  text-align: center;
}
.icônes {
  width: 40%;
  margin-top: 55%;
  justify-content: end;
}
.gmaps {
  width: 24%;
  margin-top: 35%;
  margin-right: 50%;
}
.copyright {
  margin-top: 20%;
}
#cont3 {
  display: flex;
  margin-bottom: 0px;
}
#logovoyage {
  width: 20%;
  border-radius: 100%;
  margin-top: 7%;
}
</style>
