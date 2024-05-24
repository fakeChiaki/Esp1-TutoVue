<template>
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">Componente Hijo</h5>
            <p class="card-text">{{ mensaje }}</p>
            <button class="btn btn-success" v-on:click="handleEventEmit">Cambiar Mensaje</button>
            <p v-show="mensajeCambiado">El mensaje ha sido cambiado</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

defineProps({
    mensaje: String,
    tareas: Array
})

const emit = defineEmits(['actualizarMensaje']);

const handleEventEmit = () => {
    emit('actualizarMensaje', 'Hola desde el hijo')
}

</script>