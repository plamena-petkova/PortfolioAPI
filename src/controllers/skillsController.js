const Skills = require("../models/skillsModel");

module.exports.getSkillsByUsername = async (req, res, next) => {
  try {
    const developer = req.params.username;

    const skills = await Skills.find({ developer });

    if (!skills) {
      return res
        .status(404)
        .json({ message: "Skills not found", status: false });
    }

    return res.json({ status: true, skills });
  } catch (err) {
    next(err);
  }
};

module.exports.updateSkills = async (req, res, next) => {
  try {
    const username = req.params.username;

    const updated = req.body;

    const skill = await Skills.findOneAndUpdate({ username }, updated);

    await skill.save();

    return res.json({ message: "Skills info updated", status: true });
  } catch (err) {
    next(err);
  }
};

module.exports.createSkills = async (req, res, next) => {
  try {
    const { frontend, backend, others, developer } =
      req.body;
    const developerName = await Skills.findOne({ developer });

    if (developerName) {
      return res
        .status(409)
        .json({ msg: "There is no such user", status: false });
    }

    const skills = await Skills.create({
        frontend, backend, others, developer
    });
    return res.json({ status: true, skills });
  } catch (err) {
    next(err);
  }
};
