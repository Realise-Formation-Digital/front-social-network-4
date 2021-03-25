<template>
  <v-container>
    <h2 class="text-center">Continents</h2>

    <!-- Loop  through continents table, for each shows image, title... -->
    <v-row v-for="(continent, index) in continents" :key="index">
      <v-col class="d-flex child-flex" cols="6" sm="4">
        <v-card outlined class="mx-auto latestPostBlock">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="continent.src"
          >
            <v-card-title>{{ continent.title }}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- ...and 5 citys with most likes from api-->
      <v-col class="d-flex child-flex" cols="6" sm="8">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Ville
                </th>
                <th class="text-left">
                  Likes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="city in table[index]" :key="city.id">
                <td>{{ city.city_name }}</td>
                <td>{{ city.likes }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Continents",
  data() {
    return {
      table: [],

      continents: [
        {
          title: "Amerique",
          api: "America",
          src: require("../../assets/images/America.jpg"),
        },

        {
          title: "Europe",
          api: "Europa",
          src: require("../../assets/images/Europe.jpeg"),
        },

        {
          title: "Asia",
          api: "Asia",
          src: require("../../assets/images/Asia.jpg"),
        },

        {
          title: "Afrique",
          api: "Africa",
          src: require("../../assets/images/Africa.jpg"),
        },

        {
          title: "Océanie",
          api: "Oceania",
          src: require("../../assets/images/Australia.jpg"),
        },
      ],
    };
  },

  async mounted() {
    try {
      //Connect to API
      const axios = require("axios");
      //Wait the response and pass the url
      // Loops through continents table
      for (let i = 0; i < this.continents.length; i++) {
        // Creates url with continent name
        let url =
          "http://localhost:8000/api/posts/continent/" + this.continents[i].api;
        let result = await axios.get(url);
        let data = result.data;
        // Sorts table with most likes, and leaves 5 of them
        data.sort((a, b) => (a.likes < b.likes ? 1 : -1));
        data = data.slice(0, 5);
        //Pass result from API into table
        this.table.push(data);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<style lang="scss">
$divider-inset-margin: 1000px;
</style>
