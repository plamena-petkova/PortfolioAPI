const Project = require("../models/projectsModel");

module.exports.getProjectsByUsername = async (req, res, next) => {
  try {
    const developer = req.params.username;

    const projects = await Project.find({ developer });

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
    const username = req.params.username;

    const updated = req.body;

    const project = await Project.findOneAndUpdate({ username }, updated);

    await project.save();

    return res.json({ message: "Project info updated", status: true });
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
