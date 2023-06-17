<p align="left">
  <img src="https://i.ibb.co/stHqf8S/task-admin.png" alt="Logo del Proyecto">
</p>

# Task Admin
<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v13.4-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-v6.6.5-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Cors](https://img.shields.io/badge/Cors-v2.8.5-FF8800?style=for-the-badge&logo=cors&logoColor=white)

</div>

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [API](#api)
- [Contribución](#contribución)
- [Licencia](#licencia)



Este proyecto backend es una aplicación que permite realizar operaciones relacionadas con tareas. Algunas de las funcionalidades incluyen:




## Características

- Permite crear una tarea.
- Permite obtener todas las tareas existentes.
- Permite obtener una tarea por su ID.
- Permite eliminar una tarea.

## Tecnologías Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- Cors

## Instalación

1. Clona el repositorio: `[git clone https://github.com/cereceda1991/taskAppBack.git]`
2. Ve al directorio del proyecto: `cd tu_proyecto`
3. Instala las dependencias: `npm install`

## Configuración

1. Crea una base de datos en PostgreSQL.
2. Renombra el archivo `.env.example` a `.env`.
3. Edita el archivo `.env` y configura las variables de entorno, incluyendo los datos de conexión a tu base de datos.

## Uso

1. Inicia la aplicación: `npm start:dev` o `node server.js`
2. La aplicación estará disponible en: `http://localhost:3000`

## API

- `GET /tasks`: Obtiene todas las tareas existentes.
- `GET /tasks/:id`: Obtiene una tarea específica por su ID.
- `POST /tasks`: Crea una nueva tarea.
- `PUT /tasks/:id`: Actualiza una tarea existente.
- `DELETE /tasks/:id`: Elimina una tarea por su ID.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva característica: `git checkout -b mi-caracteristica`
3. Realiza los cambios necesarios y realiza los commits: `git commit -am 'Agregar mi característica'`
4. Envía los cambios a tu repositorio fork: `git push origin mi-caracteristica`
5. Crea un Pull Request en el repositorio original.

## Licencia

Este proyecto está bajo Licencia.
