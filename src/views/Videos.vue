<script setup lang="ts">
import { useRouter } from 'vue-router';
import CardSkeleton from '../components/CardSkeleton.vue';
import PageTitle from '../components/PageTitle.vue';
import VideoCard from '../components/VideoCard.vue';
import { listVideosQuery } from '../queries/videos'

const { data: videos, isSuccess, isFetching } = listVideosQuery();

const router = useRouter();

const onClick = (id: string) => {
  router.push(`/videos/${id}`)
}
</script>
<template>
  <PageTitle title="Your videos" />
  <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
    <CardSkeleton v-if="isFetching" />
    <VideoCard v-else-if="isSuccess && videos" v-for="video in videos.videos" :title="video.title"
      :description="video.description" :thumbnail-url="video.thumbnail" :video-id="video.id" @click="onClick(video.id)"/>
  </div>
</template>