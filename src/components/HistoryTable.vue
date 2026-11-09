<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>
<template>
  <div class="table-scroll"><table class="records"><thead><tr><th>Fecha</th><th>Identificador</th><th>Imágenes</th><th>Confianza</th><th>Configuración</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>
  <tr v-for="item in items" :key="item.id"><td><b>{{ item.date }}</b><small>{{ item.time }}</small></td><td><b>{{ item.id }}</b><small>{{ item.case }}</small></td><td><span class="scope-thumb"><i></i></span><span>{{ item.count }} imágenes</span></td><td><b>{{ item.confidence }}</b><small>{{ item.label }}</small></td><td><b>Modelo experimental</b><small>Versión académica 1.0</small></td><td><span class="status">{{ item.status }}</span><small>{{ item.note }}</small></td><td><RouterLink :to="`/historial/${item.id}`" class="row-link">Ver detalle →</RouterLink><small>Descargar informe</small></td></tr>
  </tbody></table></div>
</template>
