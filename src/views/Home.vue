<script setup lang="ts">
import { store } from '../store';

const logout = () => {
  store.isLogged = 0;
}
</script>
<template>
  <div>
    HOME
    <button type="button" v-on:click="logout">Logout</button>
  </div>
</template>