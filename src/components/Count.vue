<template>
    <div>
        <h1 class=" text-red-500">{{ count }}</h1>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
const increment = () => count.value++;

</script>