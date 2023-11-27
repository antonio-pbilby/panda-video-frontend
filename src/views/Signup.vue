<script setup lang="ts">
import { api } from '../api'
import { router } from '../router';
import Input from '../components/Input.vue';

interface SignupData {
  email: string;
  password: string;
  name: string;
}

const signupData: SignupData = {
  email: '',
  password: '',
  name: '',
}

const signup = async () => {
  try {
    await api.post('/signup', signupData);

    router.push('/login');
  } catch (err: any) {
    window.alert(`Signup failed: ${err.message}`)
  }
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="signup">
            <Input v-model:value="signupData.name" name="name" placeholder="John Doe" :required="true" label="Your name"
              type="text" />
            <Input v-model:value="signupData.email" name="email" placeholder="name@email.com" :required="true" label="Your email"
              type="email" />
            <Input v-model:value="signupData.password" name="password" placeholder="••••••••" :required="true" label="Password"
              type="password" />
            <button type="submit"
              class="w-full text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 transition-all">Sign
              up</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <router-link to="/login"
                class="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Login</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
</section></template>