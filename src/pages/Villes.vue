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
            @click="(continent = item.api), test(continent)"
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
              @change="test(filter.name + ' = ' + filter.value)"
            ></v-slider>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

    <v-container align="center" justify="center">
      <v-btn depressed color="primary" block @click="show()">TEST</v-btn>
      <v-row>
        <v-col v-for="item in table" :key="item.id" cols="12" md="4">
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
      table: [],

      items: [
        {
          id: 1,
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
          description:
            "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
          src: require("../assets/images/img10.jpg"),
        },
        {
          id: 2,
          title: "Christmas tales to read",
          subtitle: "2,000 miles of wonder",
          description:
            "Sea ad habemus assueverit, omnes platonem convenire sit et, at integre pericula quo. Facete adolescens definitionem cu qui, in putant aliquid fierent ius.",
          src: require("../assets/images/img11.jpg"),
        },
        {
          id: 3,
          title: "20 movies not to miss in 2020",
          subtitle: "3,000 miles of wonder",
          description:
            "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
          src: require("../assets/images/img12.jpg"),
        },
      ],

      filters: [
        { name: "Prix", value: 0 },
        { name: "Internet", value: 0 },
        { name: "Securité", value: 0 },
        { name: "Distractions", value: 0 },
        { name: "Appartements", value: 0 },
      ],

      language: null,
      languages: [
        { text: "french", name: "Français" },
        { text: "german", name: "Allemand" },
        { text: "english", name: "Anglais" },
        { text: "spanish", name: "Espagnol" },
        { text: "italian", name: "Italien" },
      ],

      continent: null,
      continents: [
        {
          title: "Amerique",
          api: "America",
          src: require("../assets/images/America.jpg"),
        },

        {
          title: "Europe",
          api: "Europa",
          src: require("../assets/images/Europe.jpeg"),
        },

        {
          title: "Asia",
          api: "Asia",
          src: require("../assets/images/Asia.jpg"),
        },

        {
          title: "Afrique",
          api: "Africa",
          src: require("../assets/images/Africa.jpg"),
        },

        {
          title: "Oceanie",
          api: "Oceania",
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
