<template>
  <main class="page">
    <!-- Identificación de la interpretación revisada. -->
    <p class="eyebrow">INTERPRETACIÓN / A-DEMO-003</p>
    <h1>Resultados de la interpretación</h1>
    <p class="subhead">Resultados experimentales para revisión académica.</p>

    <!-- Resumen del número de imágenes, regiones y confianza promedio. -->
    <section class="stats">
      <!-- Conteo de imágenes incluidas en el análisis actual. -->
      <article>
        <span>▧</span><div><small>Imágenes procesadas</small><b>3</b></div>
        <i>En esta interpretación</i>
      </article>
      <!-- Conteo de posibles regiones señaladas para revisión. -->
      <article>
        <span>◎</span><div><small>Posibles regiones</small><b>2</b></div>
        <i>Sugeridas por el modelo</i>
      </article>
      <!-- Valor promedio de confianza mostrado como dato experimental. -->
      <article>
        <span>◷</span><div><small>Confianza promedio</small><b>94.2%</b></div>
        <i>Estimación experimental</i>
      </article>
    </section>

    <!-- Tarjetas y porcentajes estáticos de ejemplo; todavía no provienen de un modelo. -->
    <section class="results-grid">
      <article class="panel result-card">
        <div class="scope-large"><i></i><span>Posible pólipo · 94.2%</span></div>
        <h2>Imagen 01 <span class="status">Región detectada</span></h2>
        <p>La región marcada requiere revisión visual especializada.</p>
      </article>
      <article class="panel result-card">
        <div class="scope-large alt"><i></i><span>Sin hallazgos · 91.8%</span></div>
        <h2>Imagen 02 <span class="status">Completado</span></h2>
        <p>No se señaló una región sospechosa en esta imagen.</p>
      </article>
    </section>

    <!-- Acciones para comparar las imágenes o volver al historial. -->
    <div class="button-row">
      <RouterLink class="button secondary" to="/comparacion">Comparar imágenes</RouterLink>
      <RouterLink class="button" to="/historial">Guardar y volver al historial</RouterLink>
    </div>

    <!-- Aclaración sobre los porcentajes de demostración. -->
    <p class="disclaimer">Los porcentajes son estimaciones de demostración; no corresponden a un modelo clínico validado.</p>
  </main>
</template>
<style scoped>
/* Rejilla de resultados individuales y sus variaciones en pantallas pequeñas. */
.results-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
  margin-top:20px;
}
.result-card {
  padding:13px;
}
.result-card .scope-large {
  height:250px;
  margin:0;
}
.result-card h2 {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  margin:14px 1px 7px;
  color:var(--navy);
  font-size:13px;
}
.result-card p {
  margin:0 1px 3px;
  color:var(--muted);
  font-size:10px;
  line-height:1.5;
}
.result-card .status {
  white-space:nowrap;
}
.alt {
  filter:hue-rotate(24deg);
}
.button-row {
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  gap:10px;
  margin-top:17px;
}
@media (max-width:680px) {
  .results-grid {
    grid-template-columns:1fr;
  }
  .result-card .scope-large {
    height:235px;
  }
  .button-row {
    justify-content:stretch;
  }
  .button-row .button {
    flex:1 1 100%;
  }
}
</style>
