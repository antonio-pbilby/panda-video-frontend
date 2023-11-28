<script setup lang="ts">
import { store } from '../store';
import { watch } from 'vue';
import Layout from '../components/Layout.vue';
import { useRouter } from 'vue-router';

watch(store, (val) => {
  console.log('watch', val.userToken)
  window.localStorage.setItem('userToken', val.userToken)
})

const localStorageToken = window.localStorage.getItem('userToken');
store.userToken = localStorageToken || store.userToken;
console.log('require login', store.userToken);

const router = useRouter();

if (!store.userToken) {
  router.push('/login');
}
</script>
<template>
  <Layout />
</template>