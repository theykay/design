<template>
  <section :id="trimName(project.name)" class="app-project" @click="expand(project)">
    <h1>{{ project.name }}</h1>
    <img :src="imgPath(project.images[0])" alt="">
  </section>
</template>

<script>
export default {
  name: "ProjectTrigger",
  props: {
    project: Object,
  },
  methods: {
    trimName(name) {
      const reg = new RegExp(/\s/g);
      return name.replace(reg, '').toLowerCase();
    },
    expand(project) {
      console.log(project)
    },
    imgPath(path) {
      return require("@/" + path)
    }
  }
};
</script>

<style scoped lang="scss">
.app-project {

}
</style>
