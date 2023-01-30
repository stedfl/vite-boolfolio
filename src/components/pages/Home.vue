<script>
import { getPathImage } from "../../data/functions";
export default {
  name: "Home",
  data() {
    return {
      getPathImage,
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="left col">
          <span class="hello">Ciao,</span>
          <h2>Sono Stefania</h2>
          <span class="job">Full Stack Web Developer</span>
        </div>
        <div class="right col">
          <img :src="getPathImage('logo.png')" alt="logo" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

@use '../../styles/partials/variables' as *;

.container {
  height: 100%;
  display: flex;
  align-items: center;
}
.row {
  display: flex;
  align-items: center;
  .col {
    width: 50%;
    h2 {
      font-size: 2.7rem;
    }
    .hello {
      font-size: 1.3rem;
    }
    .job {
      color: $secondary-logo-color;
      font-weight: 700;
      font-size: 1.5rem;
    }
    img {
      width: 100%;
    }
  }
  .col.left * {
    padding-bottom: 1rem;
  }
}
</style>
