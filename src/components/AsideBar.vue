<script>
import { store } from "../data/store";
import { BASE_URL } from "../data/data";
import axios from "axios";
export default {
  name: "AsideBar",
  data() {
    return {
      store,
      BASE_URL,
    };
  },
  methods: {
    getByType(id) {
      axios
        .get(this.BASE_URL + "projects/projectsbytype/" + id)
        .then((result) => {
          store.projects = result.data.projects;
          store.pagination = false;
        });
    },
  },
};
</script>

<template>
  <aside>
    <h3>Tipologie</h3>
    <div class="types">
      <span
        :class="'type ' + typeItem.slug"
        v-for="typeItem in store.typesList"
        :key="'type' + typeItem.id"
        @click="getByType(typeItem.id)"
      >
        {{ typeItem.name }}
      </span>
    </div>
    <h3>Tecnologie</h3>
    <div class="technologies">
      <template
        v-for="technology in store.technologiesList"
        :key="'tech' + technology.id"
      >
        <img
          v-if="technology.logo"
          class="logo"
          :src="technology.logo"
          :alt="technology.name"
        />
        <span class="tech-item" v-else>{{ technology.name }}</span>
      </template>
    </div>
    <div class="all" @click="$emit('getApi', BASE_URL + 'projects')">
      <h3>
        Vai a tutti i progetti
        <i class="fa-solid fa-arrow-right-to-bracket"></i>
      </h3>
    </div>
  </aside>
</template>

<style scoped lang="scss">
h3 {
  margin: 2rem 0;
}

.types span,
.technologies span,
.all,
.logo {
  cursor: pointer;
}

.types {
  display: flex;
  flex-wrap: wrap;
  span {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
.technologies {
  span {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .logo {
    height: 50px;
    display: block;
    margin-bottom: 1rem;
  }
  .tech-item {
    margin: 1rem 0;
  }
}
</style>
