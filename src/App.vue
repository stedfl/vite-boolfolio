<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "App",
  components: {
    ProjectCard,
  },
  data() {
    return {
      apiUrl: "http://127.0.0.1:8001/api/",
      projects: [],
    };
  },
  methods: {
    getApi() {
      axios.get(this.apiUrl + "projects").then((result) => {
        this.projects = result.data.projects;
      });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div class="container">
    <div class="main-wrap">
      <h1 class="title">LISTA PROGETTI</h1>
      <div class="cards-container">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>      
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
