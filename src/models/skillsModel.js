const mongoose = require("mongoose");
const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const skillsSchema = new mongoose.Schema({
 frontend: {
    type: Array,
    required: [true, "You should have at least 1 skill"],
    min: 3,
    max: 100,
    unique: true,
  },
  backend: {
    type: Array,
    required: [true, "You should have at least 1 skill"],
    min: 10,
    max: 100,
    unique: true,
  },
  others: {
    type: Array,
    required: [true, "You should have at least 1 skill"],
    min: 10,
    max: 100,
    unique: true,
  },

  developer: { type: String, ref: "Developer" },
});

module.exports = mongoose.model("Skills", skillsSchema);
