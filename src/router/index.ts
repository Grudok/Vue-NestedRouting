import {createRouter, createWebHistory} from 'vue-router'
import DestinationSearchVue from '../pages/DestinationSearch.vue'
import { Destination } from '../interface/destinations.interface'
import Experiences from '../pages/Experience.vue'
import Home from '../pages/Home.vue'
import { ref } from 'vue'

const destinations = ref({} as Destination)

const routes = [
    {name: 'Home', path: '/', component: Home},
    {name: 'DestinationSearch', path: `/destinationsSearch`, component: DestinationSearchVue},
    {name: 'Experiences', path: '/destination/:slug', component: Experiences},
]
console.log("as:", destinations)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
