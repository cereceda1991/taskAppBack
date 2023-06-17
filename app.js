require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Configurar CORS
app.use(cors());
// Configuración y middleware de Express

// Importar las rutas
const taskRoutes = require("./routes/task.routes");

// Middleware de cuerpo de solicitud (body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la API
app.use("/tasks", taskRoutes);

module.exports = app;
