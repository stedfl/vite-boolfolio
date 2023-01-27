<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="container">
      <h1>Portfolio</h1>
      <nav>
        <ul>
          <li>
            <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'projects' }"
              >Progetti</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'contacts' }"
              >Contatti</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="social">
        <a href="#"><i class="fa-brands fa-facebook-f icon"></i></a>
        <a href="#"><i class="fa-brands fa-twitter icon"></i></a>
        <a href="#"><i class="fa-brands fa-instagram icon"></i></a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 80px;
}

nav {
  height: 100%;
}

.container,
ul {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link,
.icon {
  color: #405189;
  font-weight: bold;
}

.link {
  padding: 31px 20px;
  &.active {
    background-color: #405189;
    color: white;
  }
}

.icon {
  margin: 10px;
}
</style>
