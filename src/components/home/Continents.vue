<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Continents</h2>
      <v-row>
        <v-col class="d-flex child-flex" cols="6" sm="4">
          <v-card outlined class="mx-auto latestPostBlock">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../../assets/images/America.jpg"
            >
              <v-card-title>Amerique</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-flex child-flex" cols="6" sm="8">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    City
                  </th>
                  <th class="text-left">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex child-flex" cols="6" sm="4">
          <v-card outlined class="mx-auto latestPostBlock">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../../assets/images/Europe.jpeg"
            >
              <v-card-title>Europe</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-flex child-flex" cols="6" sm="8">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    City
                  </th>
                  <th class="text-left">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex child-flex" cols="6" sm="4">
          <v-card outlined class="mx-auto latestPostBlock">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../../assets/images/Asia.jpg"
            >
              <v-card-title>Asia</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-flex child-flex" cols="6" sm="8">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    City
                  </th>
                  <th class="text-left">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex child-flex" cols="6" sm="4">
          <v-card outlined class="mx-auto latestPostBlock">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../../assets/images/Africa.jpg"
            >
              <v-card-title>Afrique</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-flex child-flex" cols="6" sm="8">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    City
                  </th>
                  <th class="text-left">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex child-flex" cols="6" sm="4">
          <v-card outlined class="mx-auto latestPostBlock">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../../assets/images/Australia.jpg"
            >
              <v-card-title>Australie</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-flex child-flex" cols="6" sm="8">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    City
                  </th>
                  <th class="text-left">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Continents",
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
      ],
    };
  },
};
</script>
