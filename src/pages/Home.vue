<template>
  <v-content>
    <Carousel />

    <div class="block galleryBlock">
      <v-container>
        <h2 class="text-center">Présentation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-container>
    </div>

    <Continents />

  </v-content>
</template>

<script>
import Carousel from "../components/home/Carousel";
import Continents from "../components/home/Continents";

export default {
  name: "Home",

  components: {
    Carousel,
    Continents,
  },
};
</script>
<style lang="scss">
@import "../scss/main.scss";

</style>
