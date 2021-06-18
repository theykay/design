<template>
  <header>
    <h1>kay murray</h1>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  name: 'Header',
  // props: {
  //   title: {
  //     type: String,
  //     default: 'portfolio',
  //   }
  // },
  computed: {
    title: function() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style scoped lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 2rem;
    margin-bottom: 1rem;
    background: styles.$pink;
    color: styles.$darkpink;
  }
</style>
