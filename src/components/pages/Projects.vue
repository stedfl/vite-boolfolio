<script>
import axios from "axios";
import ProjectCard from "../ProjectCard.vue";
import {BASE_URL} from '../../data/data.js';
export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      BASE_URL,
      lastPage: null,
      projects: [],
      linkPages: [],
      currentPage: null,
    };
  },
  methods: {
    getApi(url) {
      axios.get(url).then((result) => {
        this.projects = result.data.projects.data;
        this.linkPages = result.data.projects.links;
        this.lastPage = result.data.projects.last_page;
      });
    },
    getPage(numberPage) {
      axios.get(this.linkPages[numberPage].url).then((result) => {
        this.projects = result.data.projects.data;
        this.linkPages = result.data.projects.links;
        this.currentPage = result.data.projects.current_page;
      });
    },
  },
  mounted() {
    this.getApi(this.BASE_URL + 'projects');
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1 class="title">LISTA PROGETTI</h1>
      <div class="cards-container">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
      <div class="pagination">
        <button @click="getPage(1)">
          <i class="fa-solid fa-backward-step"></i>
        </button>
        <template v-for="page in linkPages" :key="page.label">
          <button
            :class="{ clicked: page.active }"
            v-if="!isNaN(page.label)"
            @click="getPage(parseInt(page.label))"
          >
            {{ page.label }}
          </button>
        </template>
        <button @click="getPage(lastPage)">
          <i class="fa-solid fa-forward-step"></i>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

main {
  background-color: #405189;
  color: white;
  padding: 2rem 0;
}
.cards-container {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pagination {
  button {
    padding: 10px 15px;
    background-color: white;
    border: 0;
    margin-left: 5px;
    border-radius: 5px;
    color: #405189;
    font-weight: 600;
    &.clicked {
      background-color: #add8e6;
    }
  }
}
</style>
