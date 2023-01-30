<script>
import axios from "axios";
import ProjectCard from "../ProjectCard.vue";
import {BASE_URL} from '../../data/data.js';
import { store } from '../../data/store.js'
export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      BASE_URL,
      store,
    };
  },
  methods: {
    getApi(url) {
      axios.get(url).then((result) => {
        this.store.projects = result.data.projects.data;
        this.store.linkPages = result.data.projects.links;
        this.lastPage = result.data.projects.last_page;
        store.pagination = true;
      });
    },
    getPage(numberPage) {
      axios.get(this.store.linkPages[numberPage].url).then((result) => {
        this.store.projects = result.data.projects.data;
        this.store.linkPages = result.data.projects.links;
        this.store.currentPage = result.data.projects.current_page;
        store.pagination = true;
      });
    },
    getSearch() {
      axios.get(this.BASE_URL + 'projects/search', {
        params: {
          search : store.search
        }
      })
      .then((result) => {
        this.store.projects = result.data.projects;
        this.store.pagination = false;
        this.store.search = '';
      })
    },
    getAllOrSearch() {
      if(this.store.search === '') {
        this.getApi(this.BASE_URL + 'projects');
      } else {
        this.getSearch();
      }
    }
  },
  mounted() {
    this.getApi(this.BASE_URL + 'projects');
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title-search">
        <h1 class="title">LISTA PROGETTI</h1>
        <div class="search">
          <input type="text" placeholder="Cerca progetto per titolo" v-model.trim="store.search" @keyup.enter="getAllOrSearch()">
          <button @click="getAllOrSearch()">Cerca</button>
        </div>
      </div>
      <div class="cards-container">
        <ProjectCard
          v-for="project in store.projects"
          :key="project.id"
          :project="project"
        />
      </div>
      <div v-if="store.pagination" class="pagination">
        <button @click="getPage(1)">
          <i class="fa-solid fa-backward-step"></i>
        </button>
        <template v-for="page in store.linkPages" :key="page.label">
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
@use '../../styles/partials/variables' as *;

main {
  background-color: $primary-bg-color;
  overflow: auto;
  color: white;
  padding: 2rem 0;
  .title-search {
    display: flex;
    align-items: center;
    h1 {
      margin-right: 3rem;
    }
    button {
      margin-left: 0.5rem;
    }
  }
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
    color:$primary-bg-color;
    font-weight: 600;
    &.clicked {
      background-color: $secondary-bg-color;
    }
  }
}
</style>
