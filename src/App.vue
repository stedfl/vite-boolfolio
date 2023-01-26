<script>
import axios from "axios";

export default {
  name: "App",
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
    <h1>Lista Progetti</h1>
    <div v-for="project in projects" :key="project.id">
      <h1>{{ project.name }}</h1>
      <p v-html="project.summary"></p>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
