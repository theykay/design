<template>
  <header>
    <h1 className="site-name">theyKay Design</h1>
    <h1 className="location">{{ title }}</h1>
  </header>
  <div v-if="notHome" className="in-page-link">
    <router-link to="/">home</router-link>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "Header",
  // props: {
  //   title: {
  //     type: String,
  //     default: 'portfolio',
  //   }
  // },
  computed: {
    title: function() {
      return this.$route.meta.title;
    },
    notHome: function() {
      console.log(this.$route.meta.title);
      return this.$route.meta.title != "";
    },
  },
};
</script>

<style scoped lang="scss">
header {
  width: calc(100vw - 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 2rem;
  background: styles.$pink;
  color: styles.$darkpink;
}
.site-name {
  text-align: left;
}
.location {
  text-align: right;
}
.in-page-link {
  background: styles.$pink;
  color: styles.$darkpink;
  padding: .5rem  0;
}
</style>
