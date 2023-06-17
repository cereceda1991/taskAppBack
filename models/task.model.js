// models/Task.js
const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Task = db.define("tasks", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  commitMessage: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "task",
  },
});

module.exports = Task;
