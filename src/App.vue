<template>
  <div id="app">
    <!-- Ocultar NavBar y Footer cuando la ruta sea el login -->
    <NavBar v-if="$route.name != 'login'"></NavBar>
    <router-view></router-view>
    <Footer v-if="$route.name != 'login'"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: "app",
  data() {
    return {};
  },
  components: { Footer, NavBar }
}
</script>


