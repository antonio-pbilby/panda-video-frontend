<script setup lang="ts">
import Navbar from './Navbar.vue';
</script>
<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <section class="bg-white dark:bg-gray-900 flex-1">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <RouterView/>
      </div>
    </section>
  </div>
</template>