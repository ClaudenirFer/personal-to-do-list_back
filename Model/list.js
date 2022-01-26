const mongoose = require("mongoose");

const listModel = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Number, required: true },
  priority: { type: Number, required: true },
  deadline: { type: Date, required: true },
  registDate: { type: Date, default: Date.now },
});

const List = mongoose.model("myTask", listModel);

module.exports = List;
