<template>
  <ul>
    <router-link to='/about' custom v-slot="{ navigate }">
      <!-- <MainLink @click="navigate" linkTitle="about me"/> -->
      <li class='about' @click="navigate">about me</li>
    </router-link>
    <router-link to='/apps' custom v-slot="{ navigate }">
      <li class='apps' @click="navigate">apps</li>
    </router-link>
    <router-link to='/ux' custom v-slot="{ navigate }">
      <li class='ux' @click="navigate">UX</li>
    </router-link>
    <router-link to='/handmade' custom v-slot="{ navigate }">
      <li class='handmade' @click="navigate">handmade</li>
    </router-link>
  </ul>
</template>

<script>
import { MainLink } from '../components';

export default {
  name: 'Home',
  components: {
    MainLink
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: column;
}
li {
  width: 100%;
  height: 5rem;
  @include styles.md {

  }
}
.about {
  background-image: url('../assets/images/amongUs.png');
  background-color: lightgrey;
  background-position: center;
  background-blend-mode: screen;
  overflow: hidden;
}
.apps {
  background: orange;
}
.ux {
  background: plum;
}
.handmade {
  background: cyan;
}
</style>