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
          <v-card outlined class="latestPostBlock" @click="noFilter(item)">
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
      <v-btn depressed color="primary" block @click="show()">Recherche</v-btn>
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
              <div class="overflow">{{ item.description }}</div>
            </v-card-text>

            <!-- début modale---------------------------------------------------------------------------------------------------------------- -->
            <v-container>
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog transition="dialog-top-transition" max-width="600">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" v-bind="attrs" v-on="on"
                        >more</v-btn
                      >
                    </template>
                    <template v-slot:default="dialog" class="MOODAL">
                      <v-card>
                        <!-- titre modal -->
                        <v-toolbar color="primary" dark
                          ><h1 class="titre-modale">
                            Welcome to {{ item.city_name }} !
                          </h1></v-toolbar
                        >

                        <!-- texte modal -->
                        <v-card-text>
                          <div class="text-h2 pa-12, Discover" titre-modal>
                            <h4>
                              Discover the city of
                              <span class="BOLD">{{ item.city_name }}</span>
                              situated in
                              <span class="BOLD">{{ item.country }}</span>
                              in
                              <span class="BOLD">{{ item.continent }}</span>
                            </h4>
                          </div>
                          <br />
                          <div class="stats">
                            price_life : {{ item.price_life }}/5 <br />
                            internet_good : {{ item.internet_good }}/5 <br />
                            city_save : {{ item.city_save }}/5 <br />
                            apartment_easy : {{ apartment_easy }}/5 <br />
                            amusement : {{ item.amusement }}/5 <br />
                            here, we talk {{ item.language }} <br /><br />
                            
                          </div>

                          <!-- Description modal -->

                          <div class="Description">
                            <h4 class="BOLD">
                            description of the city : <br />
                            </h4>
                            {{ item.description }}
                          </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false"
                            >Close</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>

            <!-- -fin modale--------------------------------------------------------------------------------------------------------------- -->
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
      dialog2: false,
    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/main.scss";

.overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.MOODAL {
  background-color: black;
}

.Discover {
  font-weight: bold;
  margin-top: 7%;
  color: black;
}

.titre-modale {
  font-weight: bold;
  margin: auto;
}

.BOLD {
  font-family: serif;
  font-weight: bold;
}

.Description {
  color: black;
  text-align: justify;
}

.stats {
  color: black;
}
</style>
