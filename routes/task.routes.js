const express = require("express");
const router = express.Router();

// Importa el controlador de tareas
const taskController = require("../controllers/taskController");

// Rutas de tareas
router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.get("/:id", taskController.getTaskById);
router.delete("/:id", taskController.disableTask);

module.exports = router;
