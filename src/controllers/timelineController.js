const Timeline = require("../models/timelineModel");
const Developer = require("../models/developerModel");
const mongoose = require("mongoose");

module.exports.getTimelineByUsername = async (req, res, next) => {
  try {
    const developer = req.params.username;

    const timeline = await Timeline.find({ developer });

    if (!timeline) {
      return res
        .status(404)
        .json({ message: "Timeline not found", status: false });
    }

    return res.json({ status: true, timeline });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTimeline = async (req, res, next) => {
  try {
    const { username, _id } = req.params;

    const updated = req.body;

    if (mongoose.Types.ObjectId.isValid(_id)) {
      const timeline = await Timeline.findOneAndUpdate({ _id }, updated);

      await timeline.save();

      return res.json({ message: "Developer info updated", status: true });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.createTimeline = async (req, res, next) => {
  try {
    const { company, dates, occupation, developer } = req.body;
    const username = await Developer.find({ developer });

    if (!username) {
      return res
        .status(409)
        .json({
          msg: "Timeline can be created for existing user",
          status: false,
        });
    }

    const timeline = await Timeline.create({
      company,
      dates,
      occupation,
      developer,
    });
    return res.json({ status: true, timeline });
  } catch (err) {
    next(err);
  }
};
