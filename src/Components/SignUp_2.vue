<script setup>
import { ref } from "vue";
import api from "../services/api";
import TokenService from "../services/TokenService";
import router from "../router/index";

const name = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");

async function signup() {
  try {
    const response = await api.post("/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value
    });
    TokenService.setToken(response.data);

    alert("Sign-up successful");
    return response.data;
  } catch (error) {
    console.error("Sign-up failed".error.response?.data);
  }
}
</script>

<template>
  <v-container align="center">
    <v-row>
      <v-col>
        <v-card class="pa-6" width="600" color="teal-darken-3">
          <v-card-title>Sign Up</v-card-title>
          <v-text-field v-model="name" label="Name" required></v-text-field>
          <v-text-field
            v-model="email"
            label="Email Address"
            :rules="[
              (v) => !!v || 'Email is required',
              (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
            ]"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :rules="[
              (v) => !!v || 'Password is required',
              (v) => v.length >= 8 || 'Password must be at least 8 characters',
            ]"
            required
          ></v-text-field>
          <v-text-field
            v-model="password_confirmation"
            label="Confirm Password"
            required
          ></v-text-field>

          <v-card-text>
            Already have an account
            <router-link to="/login">Log In</router-link>
          </v-card-text>
          <v-card-actions>
            <v-btn color="white" variant="teal-darken-3" @click="signup()"
              >Sign Up</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
