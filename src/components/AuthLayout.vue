<script setup>
import BrandLogo from './BrandLogo.vue'

defineProps({
  headline: { type: String, required: true },
  introduction: { type: String, required: true },
})
</script>

<template>
  <main class="auth-page">
    <section class="auth-copy">
      <RouterLink to="/" class="auth-logo">
        <BrandLogo :tagline="true" />
      </RouterLink>

      <div class="auth-message">
        <p class="auth-kicker">COLORRECTALAI · PLATAFORMA ACADÉMICA</p>
        <h2>{{ headline }}</h2>
        <p>{{ introduction }}</p>
      </div>

      <div class="auth-benefits">
        <div>
          <span>01</span>
          <p><b>Sube imágenes</b><small>JPG o PNG, una o varias por caso</small></p>
        </div>
        <div>
          <span>02</span>
          <p><b>Revisa el resultado</b><small>Consulta regiones sugeridas y confianza</small></p>
        </div>
        <div>
          <span>03</span>
          <p><b>Vuelve cuando quieras</b><small>Encuentra tus casos en el historial</small></p>
        </div>
      </div>

      <p class="auth-disclaimer">
        Herramienta de exploración académica. No sustituye la valoración de un especialista.
      </p>
    </section>

    <section class="auth-panel">
      <slot />
    </section>
  </main>
</template>

<style scoped>
.auth-page {
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(370px, 0.82fr);
  align-items: stretch;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

.auth-page::before {
  position: fixed;
  z-index: -1;
  inset: 0 0 0;
  content: '';
  background: url('/img/FondoTecnologico.png') center / cover no-repeat;
  filter: brightness(0.8) contrast(1) blur(2px);
}

.auth-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
}

.auth-logo {
  align-self: flex-start;
  text-decoration: none;
}

.auth-message {
  max-width: 460px;
  margin: 38px 0 26px;

}

.auth-kicker {
  margin: 0 0 12px;
  color: #6bd6ee;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
}

.auth-message h2 {
  margin: 0 0 12px;
  color: #fff;
  font-size: clamp(25px, 3vw, 35px);
  line-height: 1.16;
  letter-spacing: -0.7px;
}

.auth-message > p:last-child {
  max-width: 400px;
  margin: 0;
  color: #c1d4e1;
  font-size: 12px;
  line-height: 1.65;
}

.auth-benefits {
  display: grid;
  gap: 9px;
}

.auth-benefits > div {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid #ffffff1b;
  border-radius: 6px;
  background: #ffffff0a;
}

.auth-benefits > div > span {
  display: grid;
  width: 29px;
  height: 29px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  background: #00abf526;
  color: #76ddf0;
  font-size: 9px;
  font-weight: 700;
}

.auth-benefits p {
  display: grid;
  gap: 3px;
  margin: 0;
}

.auth-benefits b {
  color: #fff;
  font-size: 11px;
}

.auth-benefits small {
  color: #b4c9d7;
  font-size: 9px;
}

.auth-disclaimer {
  max-width: 410px;
  margin: 20px 0 0;
  color: #adc1cf;
  font-size: 9px;
  line-height: 1.6;
}

.auth-panel {
  width: 80%;
  height: 100%;
  background: #fff;
}

.auth-panel :deep(.auth-form) {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: clamp(25px, 3vw, 38px);
}

.auth-panel :deep(.form-heading) {
  margin-bottom: 3px;
}

.auth-panel :deep(.form-heading .eyebrow) {
  margin-bottom: 8px;
}

.auth-panel :deep(.form-heading h1) {
  margin: 0;
  color: var(--navy-deep);
  font-size: 27px;
  letter-spacing: -0.6px;
}

.auth-panel :deep(.auth-intro) {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
}

.auth-panel :deep(.auth-form label) {
  display: block;
  color: #34536d;
  font-size: 10px;
  font-weight: 600;
}

.auth-panel :deep(.auth-form input) {
  display: block;
  width: 100%;
  height: 43px;
  margin-top: 6px;
  padding: 0 12px;
  border: 1px solid #d2dfe7;
  border-radius: 5px;
  background: #fcfdfe;
  color: var(--ink);
  font-size: 11px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.auth-panel :deep(.auth-form input::placeholder) {
  color: #97a8b5;
}

.auth-panel :deep(.auth-form input:focus) {
  border-color: var(--brand);
  box-shadow: 0 0 0 3px #087fa81a;
}

.auth-panel :deep(.forgot-link) {
  align-self: flex-end;
  margin-top: -8px;
  color: var(--brand);
  font-size: 10px;
  font-weight: 600;
  text-decoration: none;
}

.auth-panel :deep(.forgot-link:hover),
.auth-panel :deep(.auth-switch a:hover) {
  text-decoration: underline;
}

.auth-panel :deep(.form-error) {
  margin: -4px 0 0;
  color: #b84045;
  font-size: 10px;
}

.auth-panel :deep(.auth-form > .button) {
  width: 100%;
  margin-top: 2px;
}

.auth-panel :deep(.auth-switch) {
  margin: 0;
  color: var(--muted);
  font-size: 10px;
  text-align: center;
}

.auth-panel :deep(.auth-switch a) {
  color: var(--brand);
  font-weight: 700;
  text-decoration: none;
}

.auth-panel :deep(.form-legal) {
  color: var(--quiet);
  font-size: 9px;
  line-height: 1.55;
  text-align: center;
}

@media (max-width: 850px) {
  .auth-page {
    grid-template-columns: minmax(0, 0.9fr) minmax(340px, 0.85fr);
    width: min(100% - 36px, 760px);
    gap: 18px;
  }

  .auth-copy {
    padding: 24px;
  }

  .auth-panel :deep(.auth-form) {
    padding: 24px;
  }

  .auth-benefits > div {
    padding: 8px;
  }
}

@media (max-width: 680px) {
  .auth-page {
    width: min(100% - 28px, 480px);
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 18px 0 28px;
  }

  .auth-page::before {
    inset: 64px 0 0;
  }

  .auth-copy {
    padding: 22px;
  }

  .auth-message {
    margin: 25px 0 18px;
  }

  .auth-message h2 {
    font-size: 26px;
  }

  .auth-benefits {
    grid-template-columns: 1fr;
  }

  .auth-disclaimer {
    margin-top: 14px;
  }

  .auth-panel :deep(.auth-form) {
    padding: 23px;
  }
}
</style>
