<template>
  <v-app>
    <v-app-bar max-height="64px">
      <Navbar />
    </v-app-bar>

   <router-view style="margin-top:0.2%"></router-view>

      <Footer />
    
  </v-app>
</template>

<script>
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
