<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'

const router = useRouter()
// Valores controlados por v-model en los campos del formulario.
const email = ref('')
const password = ref('')
// Mensaje de validación que se muestra debajo de los campos.
const error = ref('')

// Valida que haya datos y simula el acceso; todavía no consulta un servidor.
function submit() {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'Completa tu correo y contraseña para continuar.'
    return
  }

  router.push('/inicio')
}
</script>

<template>
  <!-- AuthLayout dibuja la tarjeta informativa y recibe este formulario en su espacio. -->
  <AuthLayout
    headline="Tu cuaderno de análisis, en un solo lugar."
    introduction="Organiza imágenes, revisa regiones de interés y consulta tus análisis experimentales."
  >
    <!-- Formulario de acceso. @submit.prevent evita recargar y llama a submit(). -->
    <form class="panel auth-form" @submit.prevent="submit">
      <!-- Título del formulario y breve instrucción para el usuario. -->
      <div class="form-heading">
        <p class="eyebrow">BIENVENIDO DE NUEVO</p>
        <h1>Iniciar sesión</h1>
        <p class="auth-intro">Ingresa a tu espacio de trabajo.</p>
      </div>

      <!-- Campo de correo, enlazado al estado reactivo email. -->
      <label>
        Correo electrónico
        <input
          v-model="email"
          type="email"
          autocomplete="email"
          placeholder="nombre@correo.com"
          required
        />
      </label>

      <!-- Campo de contraseña para la cuenta existente. -->
      <label>
        Contraseña
        <input
          v-model="password"
          type="password"
          autocomplete="current-password"
          placeholder="Tu contraseña"
          minlength="8"
          required
        />
      </label>

      <!-- Enlace de recuperación provisional y espacio para errores de validación. -->
      <RouterLink class="forgot-link" to="/acceso">¿Olvidaste tu contraseña?</RouterLink>
      <p v-if="error" class="form-error" role="alert">{{ error }}</p>

      <!-- Envía el formulario o dirige a la pantalla de creación de cuenta. -->
      <button class="button" type="submit">Entrar a mi cuenta <span>→</span></button>
      <p class="auth-switch">¿Aún no tienes cuenta? <RouterLink to="/registro">Regístrate</RouterLink></p>

      <!-- Aviso de uso de datos de práctica. -->
      <small class="form-legal">
        Al continuar, confirmas que usarás esta plataforma con datos de práctica no identificables.
      </small>
    </form>
  </AuthLayout>
</template>
