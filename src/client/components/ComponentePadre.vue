<template>
    <div class="container">
        <h1 class="text-center my-4">Componente Padre</h1>

        <Hijo :mensaje="mensajePadre" @actualizarMensaje="mensajePadre = $event" />

        <button class="btn btn-primary mt-3" v-on:click="resetearMensaje">Resetear Mensaje</button>

        <p v-if="mensajePadre === 'Hola desde el padre'" class="mt-3">El
            mensaje está en su estado original</p>

        <p v-else class="mt-3 text-warning">El mensaje ha sido cambiado por
            el hijo</p>

        <div class="mt-5">
            <h2>Lista de tareas</h2>

            <div v-for="(tarea, index) in tareas" :key="index" class="form-check">

                <input type="checkbox" v-model="tarea.completada" :id="'tarea' +
                    index" class="form-check-input" @change="actualizarTarea(index)">

                <label :for="'tarea' + index" class="form-check-label">{{
                    tarea.nombre }}</label>

                <p v-if="tarea.completada" class="text-success">¡Tarea
                    completada!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Hijo from '../components/ComponenteHijo.vue';

const mensajePadre = ref('Hola desde el padre');
const tareas = ref([]);

const resetearMensaje = () => {
    mensajePadre.value = 'Hola desde el padre';
}

onMounted(() => {
    fetchTareas();
});

const obtenerMensaje = () => {
    fetch('http://localhost:3000/hello')
        .then(response => response.text())
        .then(data => {
            mensajePadre.value = data;
        });
}

const fetchTareas = () => {
    fetch('http://localhost:3000/tareas')
        .then(response => response.json())
        .then(data => {
            tareas.value = data;
        });
}

const actualizarTarea = (index) => {
    fetch(`http://localhost:3000/tareas/${index}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tareas.value[index])
    });
}
</script>