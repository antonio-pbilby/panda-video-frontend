<script setup lang="ts">
import { AxiosError } from 'axios';
import { store } from '../store';
import { router } from '../router';
import { getAxiosError } from '../utils/get-axios-error'
import { api } from '../api'
import Input from '../components/Input.vue';

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

    store.userToken = response.data.token;

    router.push('/videos');
  } catch (err: any) {
    let errorMessage = '';
    if (err instanceof AxiosError) {
      errorMessage = getAxiosError(err)
    }
    window.alert(`Login failed: ${errorMessage}`)
    store.userToken = '';
  }
};
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="login">
            <Input v-model:value="loginData.email" label="Your email" name="email" type="email"
              placeholder="name@email.com" />
            <Input v-model:value="loginData.password" label="Password" name="password" type="password"
              placeholder="••••••••" :required="true" />
            <button type="submit"
              class="w-full text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 transition-all">Sign
              in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <router-link to="/signup" class="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Sign
                up</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>