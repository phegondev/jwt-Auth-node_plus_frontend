<template>
    <div class="home-container">
        <h2>Explore Our Products</h2>
        <div class="product-list" v-if="products.length > 0">
            <div v-for="product in products" :key="product.id" class="product-item">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <p class="amount">Amount: {{ product.amount }}</p>
            </div>
        </div>
        <div v-else>
            <p>No products available.</p>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { handleGetProducts } from '../services/apiService';

const products = ref([]);

onMounted(
    async () => {
        try {
            const response = await handleGetProducts('/products');
            products.value = response.data;
        } catch (error) {
            console.error('Error fetching products', error);
        }
    });
</script>