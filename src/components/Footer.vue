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
    position: absolute;
    bottom: 0;
    color: styles.$darkpink;
    background: styles.$pink;
    width: 100%;
    height: 2rem;
    padding: 0.25rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>