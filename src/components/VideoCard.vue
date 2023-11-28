<script setup lang="ts">
interface VideoCardProps {
  videoId: string;
  thumbnailUrl: string;
  title: string;
  description?: string;
}

defineProps<VideoCardProps>()
</script>
<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:scale-105 transition-transform">
    <img class="rounded-t-lg" :src="thumbnailUrl" alt="" />
    <div class="p-5">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description || '' }}</p>
    </div>
  </div>
</template>