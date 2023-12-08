<template>
    <div>
      <h2>Profile Page</h2>
      <p v-if="error" style="color: red;">{{ error }}</p>
      <div v-if="user">
        <p>Welcome, <b>{{ user.username }}!</b></p>
        <p> We are happy to have you here 😁</p>
        <!-- Display other user details as needed -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import {handleGetProfile} from '../services/apiService';
  
  const user = ref(null);
  const error = ref(null);
  
  onMounted(async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` }
      const response = await handleGetProfile(headers);
      console.log(response.data)
      user.value = response.data;
    } catch (err) {
      console.error('Error fetching user profile', err);
      error.value = 'Error fetching user profile. Please try again.' + err;
    }
  });
  </script>
  
  <style scoped>
  div {
    text-align: center;
    font-size: larger;
  }
  
  b {
    color: blue;
  }
  </style>
  