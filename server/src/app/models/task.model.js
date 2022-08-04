const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const tasktSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    require: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  completed: {
    type: Boolean,
    require: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const taskModel = mongoose.model("Task", tasktSchema);

module.exports = taskModel;
