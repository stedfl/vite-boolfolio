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
    getByTypeTech(string, id) {
      axios
        .get(BASE_URL + "projects/projectsby" + string + id)
        .then((result) => {
          store.projects = result.data.projects.data;
          store.linkPages = result.data.projects.links;
          store.lastPage = result.data.projects.last_page;
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
        @click="getByTypeTech('type/', typeItem.id), store.isTitle=true, store.title=`- Tipo: ${typeItem.name}`"
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
          @click="getByTypeTech('technology/', technology.id), store.isTitle=true, store.title=`- Tecnologia: ${technology.name}`"
        />
        <span
          class="tech-item"
          v-else
          @click="getByTypeTech('technology/', technology.id)"
          >{{ technology.name }}</span
        >
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
