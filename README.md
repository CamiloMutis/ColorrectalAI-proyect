# ColorrectalAI

> Detección e interpretación del cáncer colorrectal mediante imágenes médicas multimodales.

Proyecto académico de la asignatura **Gestión de Proyectos de TI** — Ingeniería de Sistemas, Universidad Santiago de Cali (USC), 2026.

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)
![Tipo](https://img.shields.io/badge/tipo-proyecto%20acad%C3%A9mico-blue)
![Licencia](https://img.shields.io/badge/uso-acad%C3%A9mico%20%2F%20experimental-lightgrey)

---

## Tabla de contenido

1. [Descripción](#descripción)
2. [Problema y justificación](#problema-y-justificación)
3. [Objetivos](#objetivos)
4. [Alcance](#alcance)
5. [Funcionalidades principales](#funcionalidades-principales)
6. [Requisitos y casos de uso](#requisitos-y-casos-de-uso)
7. [Arquitectura](#arquitectura)
8. [Gestión del proyecto](#gestión-del-proyecto)
9. [Documentación](#documentación)
10. [Estructura del repositorio](#estructura-del-repositorio)
11. [Equipo](#equipo)
12. [Aviso importante](#aviso-importante)

---

## Descripción

**ColorrectalAI** es un sistema experimental basado en inteligencia artificial que clasifica imágenes de colonoscopia, resalta la **región de interés (ROI)** y entrega un **nivel de confianza** asociado a cada resultado, con el fin de apoyar la detección e interpretación del cáncer colorrectal.

El proyecto se desarrolla siguiendo buenas prácticas de dirección de proyectos (PMBOK) e ingeniería de requisitos (ISO/IEC/IEEE 29148).

## Problema y justificación

El cáncer colorrectal es una enfermedad en la que la detección temprana marca una diferencia importante en el pronóstico. La revisión de imágenes de colonoscopia demanda tiempo y experiencia, y la interpretación puede variar entre observadores. ColorrectalAI explora cómo una herramienta de apoyo basada en redes neuronales puede ayudar a **priorizar, resaltar y cuantificar la certeza** de los hallazgos visuales, sirviendo como complemento al criterio profesional.

## Objetivos

### Objetivo general

Desarrollar un sistema experimental que permita la detección e interpretación del cáncer colorrectal mediante imágenes médicas multimodales, aplicando un proceso formal de gestión de proyectos de TI.

### Objetivos específicos

- Levantar, documentar y validar los requisitos funcionales y no funcionales del sistema conforme a la norma ISO/IEC/IEEE 29148.
- Priorizar los requisitos mediante la técnica **MoSCoW** y mantener su **trazabilidad** durante todo el ciclo del proyecto.
- Modelar el sistema mediante casos de uso (CU-01 a CU-13) y definir su arquitectura de software.
- Clasificar imágenes de colonoscopia, mostrando la región de interés (ROI) y el nivel de confianza de cada resultado.
- Diseñar la base de datos del sistema siguiendo las fases de requisitos, modelo conceptual, lógico, físico e implementación/optimización.
- Planificar y controlar el **alcance** y la **calidad** del proyecto según PMBOK.

## Alcance

### Incluye (dentro del alcance)

- Clasificación experimental de imágenes de colonoscopia.
- Visualización de la ROI y del nivel de confianza del resultado.
- Documentación completa del proyecto: formulación, matriz de partes interesadas, matriz de trazabilidad de requisitos, ERS, plan de gestión del alcance, plan para la dirección del proyecto, arquitectura y diseño de base de datos.
- Priorización de requisitos con MoSCoW.
- Modelado de casos de uso y casos de prueba.

### No incluye (fuera del alcance)

- Uso clínico real o sustitución del criterio médico.
- Almacenamiento de las imágenes cargadas por el usuario (el sistema **no** las conserva, según el documento de arquitectura).
- Los requisitos clasificados como *Won't have* (W1–W5) en la matriz MoSCoW.
- Gestión de costos y de recursos dentro del plan de dirección del proyecto (el plan se limita a alcance y calidad).

## Funcionalidades principales

- Carga y validación de imágenes de colonoscopia.
- Clasificación automática mediante modelo de redes neuronales.
- Identificación y visualización de la región de interés (ROI).
- Presentación del nivel de confianza del resultado.
- Gestión de usuarios y consulta de resultados, según los casos de uso definidos.

> El detalle completo y vigente de cada funcionalidad está en la ERS y en el diagrama de casos de uso.

## Requisitos y casos de uso

| Elemento | Cantidad / referencia |
|---|---|
| Requisitos especificados en la ERS | 27 |
| Casos de prueba | 16 |
| Casos de uso | CU-01 a CU-13 |
| Priorización | MoSCoW (Must / Should / Could / Won't) |
| Estándar de especificación | ISO/IEC/IEEE 29148 |

La **Matriz de Trazabilidad de Requisitos** vincula cada requisito con su caso de uso, su prioridad y su caso de prueba.

## Arquitectura

La arquitectura del sistema está documentada en el **Documento de Arquitectura de Software**, donde se analizan los estilos monolítico, cliente-servidor y microservicios, tomando como referencia el libro *Ingeniería de Software*. El diseño de la base de datos (MySQL) sigue los principios de diseño de Pressman, *Ingeniería del Software* (7.ª ed.).

## Gestión del proyecto

- **Marco de referencia:** PMBOK (6.ª ed.) y plantillas PM².
- **Líder del proyecto:** Edwin Cabezas Cuero.
- **Gerente del proyecto y patrocinador:** Jair Enrique Castro Sanclemente (docente).
- **Entregables de gestión:** formulación del proyecto, matriz de partes interesadas, plan de gestión del alcance, plan para la dirección del proyecto.

## Documentación

| Documento | Descripción |
|---|---|
| Formulación del proyecto | Contexto, justificación y objetivos |
| Matriz de partes interesadas | Identificación y análisis de interesados (PM²) |
| Matriz de trazabilidad de requisitos | Requisitos funcionales y no funcionales (v1.0) |
| Diagrama MoSCoW | Priorización de requisitos |
| Diagrama de casos de uso | CU-01 a CU-13 |
| ERS (ISO/IEC/IEEE 29148) | Especificación de requisitos de software, 18/10/2026 |
| Plan de gestión del alcance | Alcance según PMBOK |
| Plan para la dirección del proyecto | Alcance y calidad |
| Arquitectura de software | Estilo arquitectónico y componentes, 25/10/2026 |
| Diseño de base de datos | MySQL, cinco fases |

## Estructura del repositorio

```text
ColorrectalAI-proyect/
├── README.md
├── docs/
│   ├── formulacion/
│   ├── requisitos/          # ERS, matriz de trazabilidad, MoSCoW
│   ├── casos-de-uso/
│   ├── gestion/             # planes de alcance y dirección del proyecto
│   ├── arquitectura/
│   └── base-de-datos/
└── src/                     # código fuente (en desarrollo)
```

> La estructura es una propuesta y se irá ajustando conforme avance el proyecto.

## Equipo

| Integrante | Rol |
|---|---|
| Edwin Cabezas Cuero | Líder del proyecto |
| Juan Stevan Loza Gutiérrez | Integrante |
| Alejandro Guzman Posada | Integrante |
| Camilo Steban Mutis Arango | Integrante |
| Juan Fernando Sánchez Hoyos | Integrante |
| Jair Enrique Castro Sanclemente | Docente, gerente del proyecto y patrocinador |

## Aviso importante

ColorrectalAI es un proyecto **académico y experimental**. Sus resultados **no constituyen un dictamen médico** ni reemplazan la valoración de un profesional de la salud. No debe utilizarse para decisiones clínicas.

---

Universidad Santiago de Cali · Facultad de Ingeniería · Ingeniería de Sistemas · 2026
