<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import { store } from '../store';
import { router } from '../router';
import { watch } from 'vue';

const localStorageToken = window.localStorage.getItem('userToken');

store.userToken = localStorageToken || store.userToken;

if (!store.userToken) {
  router.push('/login');
}

watch(store, (val) => {
  window.localStorage.setItem('userToken', val.userToken)
})
</script>
<template>
  <Navbar />
  <RouterView />
</template>