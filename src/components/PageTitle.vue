<script setup lang="ts">
interface PageTitleProps {
  title: string;
}

defineProps<PageTitleProps>()
</script>
<template>
  <div class="max-w-screen-md mb-8 lg:mb-16">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ title }}</h2>
  </div>
</template>