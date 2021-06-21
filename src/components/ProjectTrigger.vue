<template>
  <section @click="expand(project)">
    <h1>{{ project.name }}</h1>
  </section>
</template>

<script>
export default {
  name: "ProjectTrigger",
  props: {
    project: Object,
  },
  methods: {
    expand(project) {
      console.log(project)
    }
  }
};
</script>

<style scoped lang="scss"></style>
