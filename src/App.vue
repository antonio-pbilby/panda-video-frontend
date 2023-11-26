<script setup lang="ts">
import { router } from './router';
import { store } from './store';

if (store.isLogged === 0) {
  router.push('/login');
}
</script>
<template>
  <RouterView />
</template>
