<script setup lang="ts">
import { AxiosError } from 'axios';
import { store } from '../store';
import { router } from '../router';
import {getAxiosError} from '../utils/get-axios-error'
import { api } from '../api'

interface LoginData {
  email: string;
  password: string;
}

const loginData: LoginData = {
  email: '',
  password: '',
};

const login = async () => {
  try {
    const response = await api.post('/login', loginData);

    store.isLogged = 1;
    store.userToken = response.data.token;

    router.push('/');
  } catch (err: any) {
    let errorMessage = '';
    if (err instanceof AxiosError) {
      errorMessage = getAxiosError(err)
    }
    window.alert(`Login failed: ${errorMessage}`)
    store.isLogged = 0;
  }
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="loginData.email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="loginData.password">
      </div>
      <button type="submit">Submit</button>
    </form>
    <router-link to="/signup">Signup</router-link>
  </div>
</template>