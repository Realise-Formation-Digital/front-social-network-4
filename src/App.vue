<template>
  <v-app>
    <v-app-bar max-height="64px">
      <Navbar />
    </v-app-bar>

   <router-view style="margin-top:6px"></router-view>

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
