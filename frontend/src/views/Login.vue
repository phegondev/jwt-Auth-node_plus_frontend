<template>
    <div class="login-container">
      <h2>Login Page</h2>
      <p v-if="error" class="error-message">{{ error }}</p>
      <form @submit.prevent="login">
          <input v-model="username" required  placeholder="Enter Your Username"/>
          <input v-model="password" type="password" required placeholder="Enter Your Password" />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <router-link to="/register">Register</router-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {handleLogin} from '../services/apiService';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const error = ref('');
  
  const login = async () => {
    try {
      const response = await handleLogin(username.value, password.value );
      const { token } = response.data;
  
      console.log('Login successful', response.data);
  
      // Save the token to localStorage
      localStorage.setItem('token', token);
  
      // Redirect to profile page
      router.push('/profile');
    } catch (error) {
      console.error('Login failed', error.response?.data.message || 'An unexpected error occurred');
      showError(error.response?.data.message || 'An unexpected error occurred');
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
  