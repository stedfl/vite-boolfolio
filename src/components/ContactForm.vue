<script>
import { BASE_URL } from "../data/data";
import axios from "axios";
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      object: "",
      message: "",
      errors: {},
      isLoading: false,
      showForm: true,
    };
  },
  methods: {
    sendFormContact() {
      this.isLoading = true;
      const formData = {
        name: this.name,
        email: this.email,
        object: this.object,
        message: this.message,
      };
      axios.post(`${BASE_URL}contacts`, formData).then((result) => {
        this.isLoading = false;
        this.errors = result.data.errors;
        if (result.data.success) {
          (this.name = ""),
            (this.email = ""),
            (this.object = ""),
            (this.message = ""),
            (this.errors = {});
          this.showForm = false;
        }
      });
    },
  },
};
</script>
<template>
  <form v-if="showForm" @submit.prevent="sendFormContact()">
    <div class="form-item">
      <label for="name">Nome *</label>
      <input
        v-model.trim="name"
        :class="{ 'is-invalid': errors.name }"
        type="text"
        id="name"
        placeholder="Scrivi qui il tuo nome"
      />
      <p
        class="error"
        v-for="(error, index) in errors.name"
        :key="'name-' + index"
      >
        {{ error }}
      </p>
    </div>
    <div class="form-item">
      <label for="email">E-mail *</label>
      <input
        v-model.trim="email"
        :class="{ 'is-invalid': errors.email }"
        type="text"
        id="email"
        placeholder="Scrivi qui la tua mail"
      />
      <p
        class="error"
        v-for="(error, index) in errors.email"
        :key="'email-' + index"
      >
        {{ error }}
      </p>
    </div>
    <div class="form-item">
      <label for="object">Oggetto *</label>
      <input
        type="text"
        id="object"
        placeholder="Scrivi qui l'oggetto del messaggio"
        v-model.trim="object"
        :class="{ 'is-invalid': errors.object }"
      />
      <p
        class="error"
        v-for="(error, index) in errors.object"
        :key="'object-' + index"
      >
        {{ error }}
      </p>
    </div>
    <div class="form-item">
      <label for="message">Messaggio *</label>
      <textarea
        id="message"
        cols="30"
        rows="10"
        placeholder="Scrivi qui il messaggio"
        v-model.trim="message"
        :class="{ 'is-invalid': errors.message }"
      ></textarea>
      <p
        class="error"
        v-for="(error, index) in errors.message"
        :key="'message-' + index"
      >
        {{ error }}
      </p>
    </div>
    <button type="submit">{{ isLoading ? "Invio in corso" : "Invia" }}</button>
  </form>
  <h2 class="success-message" v-else><i class="fa-solid fa-check"></i> Messaggio inviato con successo! <i class="fa-solid fa-check"></i></h2>
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
    &.is-invalid {
      border: 1px solid #dc3545;
      background-color: #f8d7da;
    }
  }

  textarea::placeholder {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
  }

  .error {
    color: #dc3545;
    font-size: 0.8rem;
    margin-top: 0.5rem;
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

.success-message {
  color: white;
  border-radius: 10px;
  background-color: $secondary-logo-color;
  margin-top: 4rem;
  padding: 15px 20px;
}
</style>
