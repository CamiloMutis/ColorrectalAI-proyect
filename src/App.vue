<script setup>
import { useRoute } from 'vue-router'
import MainNav from './components/MainNav.vue'
const route = useRoute()
</script>

<template>
  <MainNav v-if="!['/acceso', '/registro', '/analizando'].includes(route.path)" />
  <RouterView />
</template>
