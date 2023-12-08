<template>
<div>
  <Navbar :loggedIn="loggedIn"/>
  <router-view></router-view>
</div>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
import {ref, onBeforeMount} from 'vue'

const loggedIn = ref(false)

const checkIfLoggedIn = () =>{
  const token = localStorage.getItem('token')
  if (token) {
    loggedIn.value = true
  }
}
onBeforeMount(checkIfLoggedIn)
</script>