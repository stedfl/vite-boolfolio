<script>
import { BASE_URL } from "../../data/data.js";
import axios from "axios";

export default {
  name: "ProjectDetail",
  data() {
    return {
      BASE_URL,
      project: {},
    };
  },
  methods: {
    getApi(slug) {
      axios.get(this.BASE_URL + "projects/" + slug).then((results) => {
        this.project = results.data.project;
      });
    },
  },

  mounted() {
    const slug = this.$route.params.slug;
    this.getApi(slug);
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="main-wrap">
        <div class="card">
          <img :src="project.cover_image" :alt="project.name" />
          <span class="type" v-if="project.type">{{ project.type.name }}</span>
          <div class="text">
            <h1>{{ project.name }}</h1>
            <div class="summary" v-html="project.summary"></div>
          </div>
          <div class="tech">
            <template
              v-for="technology in project.technologies"
              :key="technology.id"
            >
              <img
                v-if="technology.logo"
                :src="technology.logo"
                :alt="technology.name"
              />
              <span  class="tech-item" v-else>{{ technology.name }}</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem 0;
  .main-wrap {
    text-align: center;
  }
}

.card {
  position: relative;
  height: 100%;
  background-color: #405189;
  color: white;
  padding: 2rem 3rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10%;
  img {
    height: 400px;
  }
  h1 {
    text-transform: uppercase;
    margin: 1rem 0;
    text-shadow: 0 4px 0 #b9b9b9;
  }
  .type{
    position: absolute;
    top: -20px;
    right: -50px;
    font-weight: 900;
    padding: 10px 20px;
    background-color: #70bdc2;
    border-radius: 20px;
    font-size: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
}

.tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  img {
    height: 60px;
    border-radius: 15px;
    margin: 0 20px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
  .tech-item {
    color: white;
    text-transform: capitalize;
    padding: 10px 15px;
    border-radius: 30px;
    border: 1px solid white;
  }
}

</style>
