<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'

const router = useRouter()
// Datos escritos por la persona durante la creación de su perfil.
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

// Comprueba que los campos estén completos y que las contraseñas coincidan.
// Cuando pasa la validación, el prototipo continúa al dashboard sin guardar en servidor.
function submit() {
  error.value = ''

  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Completa todos los campos para continuar.'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden.'
    return
  }

  router.push('/inicio')
}
</script>

<template>
  <!-- AuthLayout comparte con acceso el fondo y la tarjeta informativa lateral. -->
  <AuthLayout
    headline="Empieza tu cuaderno de interpretaciones."
    introduction="Organiza imágenes, revisa regiones de interés y consulta tus análisis experimentales."
  >
    <!-- Formulario de registro. @submit.prevent evita recargar y llama a submit(). -->
    <form class="panel auth-form" @submit.prevent="submit">
      <!-- Encabezado propio de la pantalla de registro. -->
      <div class="form-heading">
        <p class="eyebrow">NUEVA CUENTA</p>
        <h1>Crear cuenta</h1>
        <p class="auth-intro">Completa tus datos para crear tu perfil académico.</p>
      </div>

      <!-- Nombre que se asociará a la cuenta nueva. -->
      <label>
        Nombre completo
        <input
          v-model="name"
          type="text"
          autocomplete="name"
          placeholder="Ej. María Pérez"
          required
        />
      </label>

      <!-- Correo que se usaría para identificar la cuenta. -->
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

      <!-- Contraseña nueva; el navegador solicita al menos ocho caracteres. -->
      <label>
        Contraseña
        <input
          v-model="password"
          type="password"
          autocomplete="new-password"
          placeholder="Mínimo 8 caracteres"
          minlength="8"
          required
        />
      </label>

      <!-- Campo separado que permite comprobar que ambas contraseñas coincidan. -->
      <label>
        Confirmar contraseña
        <input
          v-model="confirmPassword"
          type="password"
          autocomplete="new-password"
          placeholder="Vuelve a escribir tu contraseña"
          minlength="8"
          required
        />
      </label>

      <!-- Mensaje de error si falta algún dato o las contraseñas son distintas. -->
      <p v-if="error" class="form-error" role="alert">{{ error }}</p>

      <!-- Envía el registro o lleva a la pantalla de inicio de sesión. -->
      <button class="button" type="submit">Crear mi cuenta <span>→</span></button>
      <p class="auth-switch">¿Ya tienes cuenta? <RouterLink to="/acceso">Inicia sesión</RouterLink></p>

      <!-- Aviso de uso de datos de práctica. -->
      <small class="form-legal">
        Al continuar, confirmas que usarás esta plataforma con datos de práctica no identificables.
      </small>
    </form>
  </AuthLayout>
</template>
