<script setup lang="ts">
</script>

<template>
    <nav class="w-full flex flex-wrap items-center gap-4 bg-blue-700 text-white">
        <h2 class="text-xl uppercase px-2 py-2 my-4 mx-4">Navigate threw our Tours</h2>
        <RouterLink class="underline pointer hover:uppercase" :to="{name: 'Home'}">Home</RouterLink>
        <RouterLink class="underline pointer hover:uppercase" :to="{name: 'DestinationSearch'}">Destination Search</RouterLink>
    </nav>
</template>