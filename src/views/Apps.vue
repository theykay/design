<template>
  <ProjectTrigger v-for="project in projects" :key="project.name" :project="project" />
</template>

<script>
import { ProjectTrigger } from "../components";
import projectInfo from '../assets/data/projects.json';

export default {
  name: "Apps",
  components: {
    ProjectTrigger,
  },
  data() {
    return {
      projects: projectInfo["apps"]
    };
  }
};
</script>

<style></style>
