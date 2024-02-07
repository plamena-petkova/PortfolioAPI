const mongoose = require("mongoose");
const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const timelineSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Username min 10 characters long are required"],
    min: 10,
    max: 40,
    unique: true,
  },
  dates: {
    type: String,
    required: [true, "Names min 10 characters long are required"],
    min: 10,
    max: 40,
    unique: true,
  },
  occupation: {
    type: String,
    required: [true, "Address min 10 characters long are required"],
    min: 10,
    max: 40,
    unique: true,
  },

  developer: { type: String, ref: "Developer" },
});

module.exports = mongoose.model("Timeline", timelineSchema);
