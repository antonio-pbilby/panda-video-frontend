<script setup lang="ts">
import axios from 'axios';
import { router } from '../router';
interface SignupData {
  email: string;
  password: string;
  name: string;
}

const signupData: SignupData = {
  email: '', 
  password: '',
  name: '',
}

const signup = async () => {
  try {
    await axios.post('http://localhost:3030/signup', signupData);

    router.push('/login');
  } catch(err: any) {
    window.alert(`Signup failed: ${err.message}`)
  }
}
</script>

<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="signupData.name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="signupData.email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="signupData.password">
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>