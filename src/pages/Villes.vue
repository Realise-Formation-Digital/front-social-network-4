<template>
  <v-content>
    <v-img src="../assets/images/pexels-photo-802412.jpeg" height="300px">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
            <div class="headline">Parcourir la liste de villes</div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>

    <v-container>
      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="6">
          <v-card
            outlined
            class="latestPostBlock"
            @click="(continent = item.title), test(continent)"
          >
            <v-img
              class="white--text align-end cardsImage"
              height="200px"
              :src="item.src"
            >
              <v-card-title class="white--text">{{ item.title }} </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import filters from "../JS/filters";

export default {
  name: "Villes",
  mixins: [filters],
  data() {
    return {
      continent: null,

      items: [
        {
          title: "Amerique",
          src: require("../assets/images/America.jpg"),
        },

        {
          title: "Europe",
          src: require("../assets/images/Europe.jpeg"),
        },

        {
          title: "Asia",
          src: require("../assets/images/Asia.jpg"),
        },

        {
          title: "Afrique",
          src: require("../assets/images/Africa.jpg"),
        },

        {
          title: "Australia",
          src: require("../assets/images/Australia.jpg"),
        },
      ],
    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/main.scss";
</style>
