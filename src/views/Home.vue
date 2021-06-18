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
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
}
.about {
  background-image: url('../assets/images/amongUs.png');
  background-color: lightgrey;
  background-position: center;
  background-blend-mode: screen;
  overflow: hidden;
  @include styles.sm {
    height: 10rem;
    transition: all .2s ease-in-out;
    &:hover {
      height: 20rem;
      background-color: #f2f2f2;
    }
  }
}
.apps {
  background-image: url('../assets/images/amongUs.png');
  background-color: lightgrey;
  background-position: center;
  background-blend-mode: screen;
  overflow: hidden;
  @include styles.sm {
    height: 10rem;
    transition: all .2s ease-in-out;
    &:hover {
      height: 20rem;
      background-color: #f2f2f2;
    }
  }
}
.ux {
  background-image: url('../assets/images/amongUs.png');
  background-color: lightgrey;
  background-position: center;
  background-blend-mode: screen;
  overflow: hidden;
  @include styles.sm {
    height: 10rem;
    transition: all .2s ease-in-out;
    &:hover {
      height: 20rem;
      background-color: #f2f2f2;
    }
  }
}
.handmade {
  background-image: url('../assets/images/amongUs.png');
  background-color: lightgrey;
  background-position: center;
  background-blend-mode: screen;
  overflow: hidden;
  @include styles.sm {
    height: 10rem;
    transition: all .2s ease-in-out;
    &:hover {
      height: 20rem;
      background-color: #f2f2f2;
    }
  }
}
</style>