<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'portfolio',
    }
  }
};
</script>

<style scoped lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 1rem;
    font-size: 2rem;
    background: styles.$empink;
    color: styles.$darkpink;
  }
</style>
