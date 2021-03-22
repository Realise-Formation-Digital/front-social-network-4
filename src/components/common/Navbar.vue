<template>

    <nav>
      <router-link  to="/" 
        ><img id="logo"  src="../../assets/logo/freelance-2.jpg"></router-link
      >
      <router-link
       class="menu-item"
        to="/about"
        >About</router-link
      >
      <router-link
       class="menu-item"
        to="/villes"
        >Villes</router-link
      >

      <router-link
        class="menu-item"
        to="/contact"
        >Contact</router-link
      >
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../scss/main.scss";
</style>
