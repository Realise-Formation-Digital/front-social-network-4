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

nav {
  display: flex;
  background: #222;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  padding: 0px 200px 0px 150px;
    #logo {
    padding-left: 15px;
    height: 70px;
    transform: scale(2);
  }

  :nth-child(2) {
  margin-left: auto;
  }

  .menu-item {
    text-decoration: none;
    color: #FFF;
    padding: 20px 40px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;

    &.active, &:hover {
      background-color: #444;
      border-bottom-color: #FF5858;
    }
  }
}
</style>
