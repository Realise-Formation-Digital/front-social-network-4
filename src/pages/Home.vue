<template>
    <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
</template>

<script>
  export default {
        name: 'Home',
data() {
    return {
      items: [
        {
          src: require("../assets/images/pexels-photo-1797161.jpeg"),

        },
        {
          src: require("../assets/images/pexels-photo-2775742.jpeg"),

        },
        {
          src: require("../assets/images/pexels-photo-4452037.jpeg"),

        }
      ]
    };
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
