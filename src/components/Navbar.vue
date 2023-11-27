<script setup lang="ts">
import { router } from '../router';
import { store } from '../store';

const logout = () => {
  store.userToken = '';  
  router.push('/login')
}
</script>
<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Videos Platform</span>
        <div class="flex items-center lg:order-2">
          <button @click="logout"
            class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">Logout</button>
        </div>
      </div>
    </nav>
  </header>
</template>