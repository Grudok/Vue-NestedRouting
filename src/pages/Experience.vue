<script setup lang="ts">
import {computed, ref, onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Destination } from '../interface/destinations.interface';

const destination = ref<Destination[]>([]);

const route = useRoute();
const router = useRouter();

const slug = computed(() => {return route.params.slug});

onMounted(async () => {
    const response = await fetch('/data.json');
    const json = await response.json();

    destination.value = json.destinations.find((destination: Destination) => destination.slug === slug.value);
})

</script>
<template>
    <h1 class="uppercase text-xl underline">Our Destinations</h1>
    <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded flex flex-col items-center justify-center" v-for="experience in destination?.experiences">
        <h2 class="text-lg">{{ experience.name }}</h2>
        <p class="text-lg">{{ experience.description }}</p>
        <img class="border rounded-md bg-white px-2 py-2 m-4" :src="'/' + experience.image" :alt="experience.name">
    </div>
    <RouterView></RouterView>
</template>