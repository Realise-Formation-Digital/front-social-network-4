<template>
  <nav>
    <router-link to="/"
      ><img id="logo" src="../../assets/logo/freelance-2.jpg"
    /></router-link>

    <router-link class="menu-item" to="/about">About</router-link>
    <router-link class="menu-item" to="/villes">Villes</router-link>

    <router-link class="menu-item" to="/contact">Contact</router-link>

    <div class="menu-item loginButton" @click.stop="dialog = true">Login</div>

    <v-dialog v-model="dialog" max-width="500">
     <Login />
    </v-dialog>
  </nav>
</template>

<script>
import Login from "./Login";

export default {
  name: "Navbar",

   components: {
     Login
  },
  data() {
    return {
      dialog: false,

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../scss/main.scss";
</style>
