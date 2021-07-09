<template>
  <ul>
    <li v-for="project in projects" :key="trimName(project.name)">{{ project.name }}</li>
  </ul>
  <ProjectTrigger v-for="project in projects" :key="trimName(project.name)" :project="project" />
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
  },
  methods: {
    trimName() {
      const reg = new RegExp(/\s/g);
      return name.replace(reg, '').toLowerCase();
    }
  }
};
</script>

<style></style>
