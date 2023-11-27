<script setup lang="ts">
import { api } from '../api';
import { router } from '../router';
import { store } from '../store';

const logout = () => {
  store.isLogged = 0;
  store.userToken = '';

  router.push('/login');
}

// const videos = [
//   {
//     name: "teste",
//     propriedade: 'boa'
//   },
//   {
//     name: "teste2",
//     propriedade: 'boa2'
//   },
// ];

const videos = await api.get('videos');
</script>
<template>
  <div>
    <template v-for="video in videos">
      <!-- 
      miniatura thumbnail
      titulo
      descrição
      link
      -->
      <div>{{ video.name }}</div>
      <div>{{ video.propriedade }}</div>
      <br/>
    </template>
    <button type="button" v-on:click="logout">Logout</button>
  </div>
</template>