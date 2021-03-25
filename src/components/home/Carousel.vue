<template>
  <div class="heroBlock">
    <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="title fill-height hidden-xs-only"
          align="center"
          justify="center"
          >{{ item.title }}</v-row
        >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        {
          src: require("../../assets/images/pexels-photo-1797161.jpeg"),
          title: "Rome",
        },
        {
          src: require("../../assets/images/pexels-photo-2775742.jpeg"),
          title: "Moscow",
        },
        {
          src: require("../../assets/images/pexels-photo-4452037.jpeg"),
          title: "Paris",
        },
      ],
    };
  },
};
</script>
