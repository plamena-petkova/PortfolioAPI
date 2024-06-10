const Project = require("../models/projectsModel");
const mongoose = require("mongoose");

module.exports.getProjectsByUsername = async (req, res, next) => {
  try {
    const developer = req.params.username;

    const projects = await Project.find({ developer }).sort({updatedAt:'desc'});

    if (!projects) {
      return res
        .status(404)
        .json({ message: "Projects not found", status: false });
    }

    return res.json({ status: true, projects });
  } catch (err) {
    next(err);
  }
};

module.exports.updateProject = async (req, res, next) => {
  try {
    const {_id} = req.params;

    const updated = req.body;

    if (mongoose.Types.ObjectId.isValid(_id)) {
      const project = await Project.findOneAndUpdate({ _id }, updated);


    await project.save();

    return res.json({ message: "Project info updated", status: true });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.createProject = async (req, res, next) => {
  try {
    const { name, about, gitRepo, liveDemo, techStack, picture, developer } =
      req.body;
    const nameProject = await Project.findOne({ name });

    if (nameProject) {
      return res
        .status(409)
        .json({ msg: "Project name already in use", status: false });
    }

    const project = await Project.create({
      name,
      about,
      gitRepo,
      liveDemo,
      techStack,
      picture,
      developer,
    });
    return res.json({ status: true, project });
  } catch (err) {
    next(err);
  }
};
