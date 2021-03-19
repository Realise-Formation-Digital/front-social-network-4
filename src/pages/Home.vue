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

    <Gallery />

    <LatestPost />
  </v-content>
</template>

<script>
import Carousel from "../components/home/Carousel";
import Gallery from "../components/home/Gallery";
import LatestPost from "../components/home/LatestPost";

export default {
  name: "Home",

  components: {
    Carousel,
    Gallery,
    LatestPost,
  },
};
</script>
<style lang="scss">
@import "../scss/main.scss";
// hero block
.heroBlock {
  position: relative;

  .v-window {
    @media only screen and (max-width: 599px) {
      height: 220px !important;
    }
  }

  .v-image__image {
    &:before {
      content: "";
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }

  .title {
    color: $white;
    position: relative;
    z-index: 2;
    font: 300 50px/1.6 $primary-font !important;
  }
}

// latest post block
.latestPostBlock {
  background: darken($white, 2%);

  .v-card__title {
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
