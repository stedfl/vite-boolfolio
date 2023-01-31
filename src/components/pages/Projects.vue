<script>
import axios from "axios";
import ProjectCard from "../ProjectCard.vue";
import AsideBar from "../AsideBar.vue";
import { BASE_URL } from "../../data/data.js";
import { store } from "../../data/store.js";
export default {
  name: "Projects",
  components: {
    ProjectCard,
    AsideBar,
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
        store.projects = result.data.projects.data;
        store.linkPages = result.data.projects.links;
        store.lastPage = result.data.projects.last_page;
        store.currentPage = result.data.projects.current_page;
        store.technologiesList = result.data.technologies;
        store.typesList = result.data.types;
        store.isTitle = false;
        console.log(result.data.projects);
      });
    },
    getPage(numberPage) {
      axios.get(this.store.linkPages[numberPage].url).then((result) => {
        store.projects = result.data.projects.data;
        store.linkPages = result.data.projects.links;
        store.currentPage = result.data.projects.current_page;
        store.isTitle = false
      });
    },
    getSearch() {
      axios
        .get(this.BASE_URL + "projects/search", {
          params: {
            search: store.search,
          },
        })
        .then((result) => {
          store.projects = result.data.projects.data;
          store.linkPages = result.data.projects.links;
          store.lastPage = result.data.projects.last_page;
          store.isTitle = false;
        });
    },
    getAllOrSearch() {
      if (this.store.search === "") {
        this.getApi(BASE_URL + "projects");
      } else {
        this.getSearch();
      }
    },
  },
  mounted() {
    this.getApi(this.BASE_URL + "projects");
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title-search">
        <h1 class="title">LISTA PROGETTI</h1>
        <div v-if="store.isTitle" class="title-selection">
          <h2>{{ store.title }}</h2>
        </div>
        <div class="search">
          <input
            type="text"
            placeholder="Cerca progetto per titolo"
            v-model.trim="store.search"
            @keyup.enter="getAllOrSearch()"
          />
          <button @click="getAllOrSearch()">Cerca</button>
        </div>
      </div>
      <div class="row">
        <div class="col-left">
          <div class="projects">
            <div v-if="store.projects.length" class="cards-container">
              <ProjectCard
                v-for="project in store.projects"
                :key="project.id"
                :project="project"
              />
            </div>
            <h4 class="no-results" v-else>Nessun risultato trovato</h4>
          </div>

          <div v-if="store.projects.length && store.lastPage > 1" class="pagination">
            <button @click="getPage(1)">
              <i class="fa-solid fa-backward-step"></i>
            </button>
            <button @click="getPage(store.currentPage === 1 ? 1 : store.currentPage  - 1)">
              <i class="fa-solid fa-backward"></i>
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
            <button @click="getPage(store.currentPage === store.lastPage ? store.lastPage : store.currentPage +1)">
              <i class="fa-solid fa-forward"></i>
            </button>
            <button @click="getPage(store.lastPage)">
              <i class="fa-solid fa-forward-step"></i>
            </button>
          </div>
        </div>
        <div class="col-right">
          <AsideBar @getApi="getApi"></AsideBar>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

main {
  background-color: $primary-bg-color;
  overflow: auto;
  color: white;
  padding: 2rem 0;
  .title-search {
    display: flex;
    align-items: center;
    h1 {
      margin-right: 1rem;
    }
    h2 {
      text-transform: capitalize;
      margin-right: 2rem;
    }

    input {
      border: 2px solid $secondary-bg-color;
      height: 30px;
      border-radius: 5px;
    }
    button {
      margin-left: 0.5rem;
      padding: 5px 15px;
      background-color: $secondary-bg-color;
      border: 1px solid $secondary-bg-color;
      cursor: pointer;
      color: $secondary-logo-color;
      font-weight: 700;
      border-radius: 10px;
    }
  }
  .row {
    display: flex;
    .col-left {
      width: 70%;
      .projects {
        min-height: 500px;
      }
      .no-results {
        margin-top: 2rem;
        font-style: italic;
      }
    }
    .col-right {
      width: 30%;
      min-height: 700px;
    }
  }
}
.cards-container {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}
.pagination {
  margin-top: 1rem;
  button {
    padding: 10px 15px;
    background-color: white;
    border: 0;
    margin-left: 5px;
    border-radius: 5px;
    color: $primary-bg-color;
    font-weight: 600;
    &.clicked {
      background-color: $secondary-bg-color;
    }
  }
}
</style>
