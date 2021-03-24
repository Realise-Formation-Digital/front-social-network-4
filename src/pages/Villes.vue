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
      <v-row align="center" justify="center">
        <v-col v-for="(item, index) in continents" :key="index" cols="2">
          <v-card
            outlined
            class="latestPostBlock"
            @click="(continent = item.api), getTable();"
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

    <v-container v-if="continent !== null">
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-select
            v-model="language"
            :items="languages"
            label="Language"
          ></v-select>
        </v-col>
        <v-col v-for="(filter, index) in filters" :key="index" cols="6">
          <v-subheader>{{ filter.name }}</v-subheader>

          <v-card-text>
            <v-slider
              v-model="filter.value"
              thumb-label="always"
              min="1"
              max="5"
              ticks="always"
              tick-size="4"
            ></v-slider>
          </v-card-text>
        </v-col>
      </v-row>
      <v-btn depressed color="primary" block @click="show()">SEARCH</v-btn>
    </v-container>

    <v-container align="center" justify="center">
      <v-row>
        <v-col v-for="item in filteredTable" :key="item.id" cols="12" md="4">
          <v-card outlined class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.image_city"
            >
              <v-card-title>{{ item.city_name }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0"></v-card-subtitle>
            <v-card-text class="text--primary">
              <div></div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import axiosMixin from "../JS/axiosMixin";

export default {
  name: "Villes",
  mixins: [axiosMixin],

  data() {
    return {
      

    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/main.scss";
</style>
