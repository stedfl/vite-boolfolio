<script>

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  }
};
</script>

<template>
  <div class="card">
    <div class="inner-card">
      <div class="project-name">
        <router-link :to="{name: 'postdetail', params: {slug: project.slug}}">
          <h2>{{ project.name }}</h2>
        </router-link>
        <span :class="'type ' + project.type.slug" v-if="project.type">{{ project.type.name }}</span>
      </div>
      <p v-html="project.summary"></p>
      <div v-if="project.technologies.length" class="tech">
        <h4>Tecnologie:</h4>
        <div class="images">
          <template
            v-for="technology in project.technologies"
            :key="technology.id"
          >
            <img
              v-if="technology.thumb"
              class="thumb"
              :src="technology.thumb"
              :alt="technology.name"
            />
            <span v-else>{{ technology.name }}</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.card {
  margin-bottom: 2rem;
  margin-right: 3rem;
  max-width: 380px;
  color: $primary-bg-color;
  width: calc(100% / 2);

  .inner-card {
    display: inline-block;
    background-color: aliceblue;
    border-radius: 10px;
    padding: 10px 20px;
    .project-name {
      display: flex;
      align-items: flex-start;
      h2 {
        text-transform: capitalize;
        margin-bottom: 10px;
        color: $primary-bg-color;
      }
      span {
        margin-left: 15px;
      }
    }

    h4 {
      margin: 10px 0;
    }
    .images {
      display: flex;
      align-items: center;
      span {
        text-transform: capitalize;
        margin-left: 15px;
      }
    }
    .thumb {
      height: 40px;
      margin-right: 10px;
    }
  }
}
</style>
