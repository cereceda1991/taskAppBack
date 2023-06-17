const Task = require("../models/task.model");

// Obtener todas las tareas (con todos los campos)
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    res.json({
      totalTasks: tasks.length,
      tasks,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  const createdTask = await Task.create({
    title,
    description,
  });

  const task = await Task.findByPk(createdTask.id);

  // Generar el mensaje de commit
  const commitMessage = `feat: add TICKET #000${task.id} - ${title}`;

  // Actualizar la tarea con el mensaje de commit
  await task.update({ commitMessage });

  res.json(task);
};

// Obtener una tarea por su ID
exports.getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la tarea" });
  }
};

exports.disableTask = async (req, res) => {
  const taskId = req.params.id;

  // Buscar la tarea por su ID
  const task = await Task.findByPk(taskId);

  // Verificar si la tarea existe
  if (!task) {
    return res.status(404).json({
      status: "error",
      message: "La tarea no existe",
    });
  }

  // Actualizar el estado de la tarea a "disabled"
  await task.update({ status: "disabled" });

  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
};
