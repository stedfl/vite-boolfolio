<script>
export default {
  name: "ContactForm",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <form>
    <div class="form-item">
      <label for="name">Nome *</label>
      <input type="text" id="name" placeholder="Scrivi qui il tuo nome" />
    </div>
    <div class="form-item">
      <label for="email">E-mail *</label>
      <input type="text" id="email" placeholder="Scrivi qui la tua mail" />
    </div>
    <div class="form-item">
      <label for="object">Oggetto *</label>
      <input
        type="text"
        id="object"
        placeholder="Scrivi qui l'oggetto del messaggio"
      />
    </div>
    <div class="form-item">
      <label for="message">Messaggio *</label>
      <textarea
        name=""
        id="message"
        cols="30"
        rows="10"
        placeholder="Scrivi qui il messaggio"
      ></textarea>
    </div>
    <button>Invia</button>
  </form>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.form-item {
  margin-bottom: 1rem;
  label {
    display: block;
    margin-bottom: 0.3rem;
    color: $secondary-logo-color;
    font-weight: 500;
  }

  input,
  textarea {
    width: 450px;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }

  textarea::placeholder {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
  }
}

button {
  padding: 5px 10px;
  background-color: $secondary-logo-color;
  color: white;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;
  border: 1px solid $secondary-logo-color;
  font-size: 0.9rem;
  &:hover {
    background-color: lighten($secondary-logo-color, 10%);
  }
  &:active {
    background-color: lighten($secondary-logo-color, 15%);
    font-size: 1rem;
  }
}
</style>
