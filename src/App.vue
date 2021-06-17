<template>
<!-- dynamically update header title depending on page location -->
  <Header />
  <Footer />
</template>

<script>
import { Header, Footer } from './components';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
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
}
</style>
