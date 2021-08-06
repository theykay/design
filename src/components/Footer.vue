<template>
  <footer>
    <p>&copy;theyKay</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
  footer {
    color: styles.$darkpink;
    background: styles.$pink;
    width: calc(100vw - .5rem);
    height: 2rem;
    padding: 0.25rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>