<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getVideoQuery } from '../queries/videos';
import PageTitle from '../components/PageTitle.vue';
import TextSkeleton from '../components/TextSkeleton.vue';
import VideoSkeleton from '../components/VideoSkeleton.vue';

const route = useRoute()
const { id } = route.params

const { data: video, isFetching, isSuccess } = getVideoQuery(id as string);
</script>
<template>
  <div class="flex flex-col gap-4" v-if="isFetching">
    <TextSkeleton />
    <VideoSkeleton />
  </div>
  <div v-else-if="isSuccess && video" >
    <PageTitle :title="video?.title" />
    <video class="w-full" controls :poster="video.preview">
      <source :src="video?.video_hls" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div>{{ video.description }}</div>
    <div>{{ video.updated_at }}</div>
  </div>
</template>