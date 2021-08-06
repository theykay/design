<template>
  <!-- dynamically update header title depending on page location -->
  <Header />
  <div id="view">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
import { Header, Footer } from "./components";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  font-family: styles.$fontFancy;
  // position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#view {
  width: 100vw;
  flex: 1 0 auto;
}
</style>
