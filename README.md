# theWeatherInfo

## 1. Descripción General

**'theWeatherInfo'** es una aplicación web desarrollada como parte de un trabajo formativo para Factoría F5 y su bootcamp **'Full-Stack con React y Springboot'**.
El objetivo principal del proyecto es consumir datos meteorológicos de una API externa y mostrar dicha información de forma estructurada y clara al usuario final.

---

## 2. Objetivos del Proyecto

Los objetivos principales de este proyecto son los siguientes:

- Aplicar conocimientos básicos de desarrollo web frontend.
- Utilizar HTML, CSS y JavaScript de forma conjunta en una aplicación funcional.
- Consumir datos de una API pública externa.
- Mostrar información dinámica en la interfaz de usuario.
- Desarrollar una aplicación web sencilla siguiendo buenas prácticas básicas.

---

## 3. Tecnologías Utilizadas

El proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **HTML5**: para la estructura del contenido de la aplicación.
- **CSS3**: para el diseño visual y la maquetación de la interfaz.
- **JavaScript (ES6)**: para la lógica de la aplicación y el manejo de datos dinámicos.
- **API Open-Meteo**: fuente externa de información meteorológica.

---

## 4. Fuente de Datos

La información meteorológica mostrada en la aplicación se obtiene de la API pública proporcionada por Open-Meteo.

- Sitio web oficial: https://open-meteo.com/

Open-Meteo es una API gratuita que proporciona datos meteorológicos sin necesidad de autenticación, lo que la hace adecuada para proyectos educativos y de demostración.

---

## 5. Funcionalidad de la Aplicación

La funcionalidad básica de theWeatherInfo consiste en:

- Realizar una solicitud HTTP a la API de Open-Meteo.
- Procesar la respuesta recibida en formato JSON.
- Extraer los datos meteorológicos relevantes.
- Mostrar la información obtenida mediante tarjetas (cards) en la interfaz web.

Cada tarjeta presenta de forma visual los datos del tiempo, permitiendo al usuario identificar fácilmente la información mostrada.

---

## 6. Estructura del Proyecto

La estructura básica del repositorio es la siguiente:

- `index.html`: archivo principal que contiene la estructura HTML de la aplicación.
- `css/`: carpeta que contiene los archivos de estilos CSS.
- `js/`: carpeta que contiene los archivos JavaScript con la lógica de la aplicación.
- `json/`: carpeta que contiene los archivos JSON que dan formato a las llamadas a la API.
- `README.md`: archivo de documentación del proyecto.

Esta estructura permite una separación clara entre contenido, estilos y lógica.

---

## 7. Instalación y Ejecución

Para utilizar la aplicación **no es necesaria una instalación compleja**, sin embargo **no se recomienda abrir el archivo `index.html` directamente** desde el navegador, ya que los navegadores modernos aplican políticas de seguridad (**CORS**) que bloquean ciertas peticiones locales, impidiendo su correcta ejecución.

### Pasos a seguir:

1. Clonar o descargar el repositorio.
2. Ejecutar la aplicación mediante un **servidor local**.  
   Esto puede hacerse fácilmente usando cualquiera de las siguientes opciones:
   - **Visual Studio Code + Live Server**
   - **Node.js**  
     ```bash
     npx serve
     ```
   - **Python**  
     ```bash
     python -m http.server
     ```
3. Abrir en el navegador la URL proporcionada por el servidor local  
   (por ejemplo: `http://localhost:3000` o `http://127.0.0.1:5500`).

---

## 8. Uso de la IA Generativa

Durante el desarrollo de este proyecto se ha utilizado **Inteligencia Artificial Generativa (IA Generativa)** como herramienta de apoyo en distintos momentos del proceso, siempre con el objetivo de mejorar la comprensión, la eficiencia y la calidad del resultado final.

La IA Generativa se ha empleado en los siguientes escenarios:

- **Comprensión de la API Open-Meteo** y de su funcionamiento general, incluyendo la estructura de las respuestas y los parámetros disponibles.
- **Investigación y selección de información relevante** para el proyecto a partir de la documentación oficial de los distintos *endpoints* de la API.
- **Creación de estilos sencillos, limpios y coherentes** para las diferentes tarjetas y componentes visuales de la interfaz.
- **Automatización del trabajo repetitivo** en la construcción de la página mediante la generación y reutilización de componentes `.js`.
- **Revisión de errores y detección de bugs**, ayudando a identificar problemas de lógica, estructura y estilos durante el desarrollo.

La utilización de IA Generativa ha servido como un **soporte técnico y conceptual**, sin sustituir el trabajo de diseño, implementación y toma de decisiones realizadas por el autor del proyecto.

---

## 9. Uso Formativo

Este proyecto ha sido desarrollado dentro del bootcamp de Factoría F5 **'Full-Stack coders with Springboot and React - 2025'**

---

## 11. Licencia

Licencia MIT

Copyright (c) 2026

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"),  
para utilizar el Software sin restricción alguna, incluyendo, sin limitación, los derechos de uso, copia, modificación, fusión, publicación, distribución,  
sublicencia y/o venta de copias del Software, así como para permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a  
las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso deberán incluirse en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO, PERO NO LIMITÁNDOSE A, LAS GARANTÍAS DE COMERCIALIZACIÓN,  
IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA  
RECLAMACIÓN, DAÑO U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, EXTRACONTRACTUAL O DE CUALQUIER OTRO TIPO, DERIVADA DE, O EN CONEXIÓN CON, EL  
SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.
