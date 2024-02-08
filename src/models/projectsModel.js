const mongoose = require("mongoose");
const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const projectsSchema = new mongoose.Schema({
 name: {
    type: String,
    required: [true, "Name min 3 characters long are required"],
    min: 3,
    max: 40,
    unique: true,
  },
  about: {
    type: String,
    required: [true, "About min 10 characters long are required"],
    min: 10,
    max: 400,
    unique: true,
  },
  gitRepo: {
    type: String,
    required: [true, "GitRepo link is required"],
    min: 10,
    max: 1000,
    unique: true,
  },
  liveDemo: {
    type: String,
    required: [true, "Live demo link is required"],
    min: 10,
    max: 1000,
    unique: true,
  },
  techStack: {
    type: Array,
    required: [true, "Tech stack should have at least 1 item"],
  },
  picture: {
    type: String,
    required: [true, "Picture is required required"],
    min: 10,
    unique: true,
  },

  developer: { type: String, ref: "Developer" },
});

module.exports = mongoose.model("Projects", projectsSchema);
