<template>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link v-if="!loggedIn" to="/login">Login</router-link>
        <router-link v-if="!loggedIn" to="/register">Register</router-link>
        <router-link v-if="loggedIn" to="/profile">Profile</router-link>
        <router-link v-if="loggedIn" to="/login" @click="handleLogout" >Logout</router-link>
    </div>
</template>
<script setup>
    import { ref, defineProps } from 'vue';
    import { useRouter } from 'vue-router';

    const props = defineProps({
        loggedIn: Boolean
    })

    const router = useRouter()
    const loggedIn = ref(props.loggedIn)

    const handleLogout = () =>{
        localStorage.removeItem('token');
        loggedIn.value = false
        router.push('/login')
    }
</script>
