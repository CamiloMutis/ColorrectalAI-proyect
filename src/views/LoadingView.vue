<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BrandLogo from '../components/BrandLogo.vue'

const router = useRouter()

// Simula unos segundos de análisis y luego dirige a los resultados de demostración.
onMounted(() => {
  setTimeout(() => router.replace('/resultados/A-DEMO-003'), 1900)
})
</script>

<template>
  <!-- Capa oscura que enfoca la atención en el cuadro de progreso. -->
  <div class="modal-screen">
    <!-- Diálogo con el logo, el mensaje informativo y la barra animada. -->
    <div class="progress-dialog">
      <BrandLogo />
      <h2>Analizando imágenes</h2>
      <p>ColorrectalAI es una herramienta académica experimental. Sus resultados pueden contener errores y no constituyen un diagnóstico médico.</p>
      <div class="progress-track"><i></i></div>
      <small>En curso · 64%</small>
    </div>
  </div>
</template>
<style scoped>
/* Fondo que cubre la vista mientras se muestra el estado de análisis. */
.modal-screen {
  position:fixed;
  inset:0;
  z-index:30;
  display:grid;
  place-items:center;
  padding:18px;
  background:#0b294a7a;
  backdrop-filter:blur(3px);
}
/* Tarjeta central que contiene el estado y la explicación experimental. */
.progress-dialog {
  width:min(380px,100%);
  padding:28px 30px 24px;
  border:1px solid #d9e5ec;
  border-radius:10px;
  background:#fff;
  box-shadow:0 24px 70px #071e3650;
  text-align:center;
}
.progress-dialog > :deep(.brand-lockup) {
  justify-content:center;
}
.progress-dialog :deep(.brand-name) {
  color:var(--navy);
}
.progress-dialog :deep(.brand-lockup small) {
  color:var(--muted);
}
.progress-dialog h2 {
  margin:19px 0 9px;
  color:var(--navy);
  font-size:17px;
}
.progress-dialog p {
  margin:0;
  color:var(--muted);
  font-size:10px;
  line-height:1.6;
  text-align:left;
}
.progress-track {
  height:7px;
  overflow:hidden;
  margin-top:21px;
  border-radius:7px;
  background:#e8f0f4;
}
.progress-track i {
  display:block;
  width:64%;
  height:100%;
  border-radius:inherit;
  background:var(--brand-bright);
  animation:progress 1.8s linear forwards;
}
.progress-dialog > small {
  display:block;
  margin-top:8px;
  color:var(--brand);
  font-size:9px;
  text-align:right;
}
/* La barra avanza durante la misma ventana que dura la simulación. */
@keyframes progress {
  to {
    width:100%;
  }
}
</style>
