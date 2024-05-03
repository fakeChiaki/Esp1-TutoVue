import { createMemoryHistory, createRouter } from 'vue-router'
import Contador from "../components/Contador.vue";
const routes = [
    { path: '/', component: Contador },
]
export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})