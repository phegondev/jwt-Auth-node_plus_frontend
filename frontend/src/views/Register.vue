<template>
    <div class="registration-container">
      <h2>Registration Page</h2>
      <p v-if="error" class="error-message">{{ error }}</p>
      <form @submit.prevent="register">
          <input v-model="username" required placeholder="Enter Username" />
          <input v-model="password" type="password" required placeholder="Enter Username" />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {handleRegister} from '../services/apiService';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const error = ref('');
  
  const register = async () => {
    try {
      const response = await handleRegister(username.value, password.value );
      console.log('Registration successful', response.data);
      router.push('/login');
    } catch (error) {
      console.error('Registration failed', error.response?.data || 'An unexpected error occurred');
      showError(error.response?.data.message || 'Registration failed');
    }
  };
  
  const showError = (errorMessage) => {
    error.value = errorMessage;
  
    // Clear the error message after 5 seconds
    setTimeout(() => {
      error.value = '';
      username.value = ''
      password.value = ''
    }, 3000);
  };
  </script>
  