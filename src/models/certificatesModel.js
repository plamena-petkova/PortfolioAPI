    const mongoose = require("mongoose");
const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const certificatesSchema = new mongoose.Schema({
 certificates: {
    type: Array,
    required: [true, "You should have at least 1 certificate"],
    min: 3,
    max: 100,
    unique: true,
  },
  about: {
    type: String,
    required: [true, "About should be min 10 charachters long"],
    min: 10,
    max: 400,
    unique: true,
  },
  bestPractices: {
    type: Array,
    required: [true, "You should have at least 1 best practice"],
    min: 10,
    max: 100,
    unique: true,
  },

  developer: { type: String, ref: "Developer" },
});

module.exports = mongoose.model("Certificates", certificatesSchema);
