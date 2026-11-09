<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({ mode: { type: String, default: 'login' } })
const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
function submit() {
  error.value = ''
  if (!email.value || !password.value || (props.mode === 'register' && (!name.value || !confirmPassword.value))) {
    error.value = 'Completa todos los campos para continuar.'
    return
  }
  if (props.mode === 'register' && password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden.'
    return
  }
  router.push('/inicio')
}
</script>
<template>
  <main class="auth-page">
    <section class="auth-copy">
      <RouterLink to="/" class="brand auth-brand"><span class="brand-symbol">C<span>AI</span></span><span>Colorrectal<span class="accent">AI</span></span></RouterLink>
      <div class="scope-large"><i></i></div>
      <h2>{{ mode === 'login' ? 'Accede a la plataforma' : 'Crea tu cuenta académica' }}</h2>
      <p>Explora interpretaciones experimentales de imágenes de colonoscopia en tu cuaderno académico.</p>
      <ul><li>Guarda tus interpretaciones</li><li>Accede desde cualquier dispositivo</li><li>Entorno académico experimental</li></ul>
    </section>
    <form class="panel auth-form" @submit.prevent="submit">
      <p class="eyebrow">CUADERNO ACADÉMICO</p>
      <h1>{{ mode === 'login' ? 'Iniciar sesión' : 'Registro' }}</h1>
      <p class="auth-intro">{{ mode === 'login' ? 'Ingresa a tu cuenta para continuar.' : 'Completa tus datos para crear una cuenta.' }}</p>
      <label v-if="mode === 'register'">Nombre completo<input v-model="name" type="text" autocomplete="name" placeholder="Tu nombre" required /></label>
      <label>Correo electrónico<input v-model="email" type="email" autocomplete="email" placeholder="nombre@correo.com" required /></label>
      <label>Contraseña<input v-model="password" type="password" :autocomplete="mode === 'login' ? 'current-password' : 'new-password'" placeholder="Mínimo 8 caracteres" minlength="8" required /></label>
      <label v-if="mode === 'register'">Repetir contraseña<input v-model="confirmPassword" type="password" autocomplete="new-password" placeholder="Confirma tu contraseña" minlength="8" required /></label>
      <p v-if="error" class="form-error">{{ error }}</p>
      <button class="button" type="submit">{{ mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta' }} →</button>
      <p v-if="mode === 'login'" class="auth-switch">¿Aún no tienes cuenta? <RouterLink to="/registro">Regístrate</RouterLink></p>
      <p v-else class="auth-switch">¿Ya tienes cuenta? <RouterLink to="/acceso">Inicia sesión</RouterLink></p>
      <small>Esta plataforma es académica y experimental. No brinda diagnósticos médicos.</small>
    </form>
  </main>
</template>
