<template>
  <!-- <ul>
    <li v-for="project in projects" :key="trimName(project.name)">{{ project.name }}</li>
  </ul> -->
  <ProjectTrigger
    v-for="project in projects"
    :key="trimName(project.name)"
    :project="project"
  />
</template>

<script>
import { ProjectTrigger } from "../components";
import projectInfo from "../assets/data/projects.json";

export default {
  name: "Apps",
  components: {
    ProjectTrigger,
  },
  data() {
    return {
      projects: projectInfo["apps"],
    };
  },
  methods: {
    trimName() {
      const reg = new RegExp(/\s/g);
      return name.replace(reg, "").toLowerCase();
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  width: 10rem;
  margin: 0.5rem auto 0.5rem 1rem;
  @include styles.sm {
    display: flex;
    flex-direction: column;
    // justify-content: flex-start;
    align-items: flex-start;
  }
}
li {
  width: 100%;
  padding: 0 0.5rem;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: left;
  color: styles.$darkpink;
  @include styles.sm {
    &:hover {
      background-color: styles.$pink;
    }
  }
}
</style>
