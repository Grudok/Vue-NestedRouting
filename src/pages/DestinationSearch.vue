<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Destination } from '../interface/destinations.interface';

const route = useRoute();
const router = useRouter();
const destinations = ref<Destination[]>([]);

onMounted(async () => {
    const response = await fetch('/data.json');
    const json = await response.json();

    destinations.value = json.destinations;
})

function goToDestination(destinations: Destination) {
    router.push(`destination/${destinations.slug}`);
}
</script>

<template>
    <button @click="goToDestination(destination)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded flex flex-col items-center justify-center" v-for="destination in destinations"
        :key="destination.id">{{ destination.id }}
        <h1 class="uppercase text-xl underline">{{ destination.name }}</h1>
        <p class="text-lg">{{ destination.description }}</p>
       <img class="border rounded-md bg-white px-2 py-2 m-4" :src="'/' + destination.image" :alt="destination.name">
</button>
</template>