<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const loggedInView = computed(() => ['/inicio','/historial','/carga','/resultados','/comparacion'].some(path => route.path.startsWith(path)))
</script>
<template><header class="topbar"><RouterLink class="brand" :to="loggedInView ? '/inicio' : '/'"><span class="brand-symbol">C<span>AI</span></span><span>Colorrectal<span class="accent">AI</span></span></RouterLink><nav v-if="loggedInView"><RouterLink to="/historial" :class="{ active: route.path.startsWith('/historial') }">Historial</RouterLink><RouterLink class="interpret-link" to="/carga">Interpretación del cáncer</RouterLink></nav><nav v-else><a href="#acerca">Acerca de</a><RouterLink to="/acceso">Iniciar sesión</RouterLink><RouterLink class="interpret-link" to="/registro">Crear cuenta</RouterLink></nav><RouterLink v-if="loggedInView" class="account" to="/inicio"><span class="avatar">JS</span><span>Juan S.</span><span class="chevron">⌄</span></RouterLink></header></template>
