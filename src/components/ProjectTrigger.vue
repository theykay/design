<template>
  <section :id="trimName(project.name)" @click="expand(project)">
    <h1>{{ project.name }}</h1>
    <img :src="imgPath(project.images[0])" :alt="alt(project)">
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
    },
    alt(project) {
      return `screen grab of ${project.name} app`;
    }
  }
};
</script>

<style scoped lang="scss">
section {
  
}
img {
  width: 100%;
  height: auto;
}
</style>
