# ColorrectalAI

Aplicación Vue 3 + Vite con Vue Router y vistas separadas.

- `/` Home público para visitantes sin iniciar sesión.
- `/acceso` y `/registro` acceso y creación de cuenta de demostración.
- `/inicio` Dashboard para el usuario que ya inició sesión.
- `/carga`, `/analizando`, `/resultados/:id`, `/comparacion`, `/historial` y `/historial/:id` para los flujos de interpretación.

## Desarrollo

```sh
npm install
npm run dev
```

Las clasificaciones son datos experimentales de demostración; todavía no se integra el modelo clínico ni un backend de autenticación.
# Flujo de pantallas

- `/` — inicio público para visitantes.
- `/acceso` — inicio de sesión; al completar el formulario de demostración, continúa a `/inicio`.
- `/registro` — registro con nombre, correo, contraseña y confirmación; al completar el formulario, continúa a `/inicio`.
- `/inicio` — dashboard autenticado; desde allí comienza una interpretación nueva o se consulta el historial.
- `/carga` → `/analizando` → `/resultados/:id` — flujo de interpretación.
- `/resultados/:id` → `/comparacion` — comparación general.
- `/historial` → `/historial/:id` — consulta de historial y detalle.

Los formularios solo simulan el flujo de acceso; no existe todavía un backend de autenticación.
