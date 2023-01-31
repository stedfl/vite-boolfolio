<script>
import ContactForm from "../ContactForm.vue";
export default {
  name: "Contacts",
  components: {
    ContactForm,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="main-wrap">
        <h1>
          <span class="name title">Sdf</span>
          <span class="job-left title">Web</span>
          <span class="job-right title">Developer</span>
        </h1>
        <address>
          <p>Strada Maggiore, 37 - Bologna</p>
          <p>Telefono: +39 408-816-8765</p>
          <a href="mailto:info-portfolio@sdf.it">info-portfolio@sdf.it</a>
        </address>
        <ContactForm />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name,
.job-right {
  color: $secondary-logo-color;
}

.job-left {
  color: $primary-logo-color;
}

.title {
  margin-right: 10px;
}

h1 {
  text-align: center;
}

address {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  & * {
    margin-bottom: 0.4rem;
  }
}
</style>
