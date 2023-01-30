<script>
import { store } from "../data/store";
export default {
  name: "AsideBar",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <aside>
    <h3>Tipologie</h3>
    <div class="types">
      <span :class="'type ' + typeItem.slug" v-for="typeItem in store.typesList" :key="'type' + typeItem.id">
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
  </aside>
</template>

<style scoped lang="scss">
h3 {
  margin: 2rem 0;
}
.types {
  display: flex;
  flex-wrap: wrap;
  span {
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
}
.technologies {
  span {
    text-transform: capitalize;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .logo {
    height: 50px;
    display: block;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .tech-item {
    margin: 1rem 0;
  }
}
</style>
