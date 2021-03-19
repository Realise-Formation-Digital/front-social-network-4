<template>
  <v-app>
    <v-app-bar flat max-height="65">
      <Navbar />
    </v-app-bar>

    <router-view></router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/common/Navbar";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  })
};
</script>
