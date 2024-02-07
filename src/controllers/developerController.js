const Developer = require("../models/developerModel");

module.exports.getUserByUsername = async (req, res, next) => {
  try {
    const username = req.params.username;

    const user = await Developer.find({username});

    if (!user) {
      return res.status(404).json({ message: "User not found", status: false });
    }

    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};

module.exports.updateDeveloper = async (req, res, next) => {
  try {
    const username = req.params.username;

    const updated = req.body;

    const developer = await Developer.findOneAndUpdate({ username }, updated);
    /*
    developer.username = req.body.username;
    developer.names = req.body.names;
    developer.address = req.body.address;
    developer.email = req.body.email;
    developer.github = req.body.github;
    developer.linkedin = req.body.linkedin;
    developer.about = req.body.about;
    developer.avatar = req.body.avatar;
*/
    await developer.save();

    return res.json({ message: "Developer info updated", status: true });

  } catch (err) {
    next(err);
  }
};

module.exports.createDeveloper = async (req, res, next) => {
  try {
    const { username, names, address, email, github, linkedin, about, avatar } =
      req.body;
    const usernameCheck = await Developer.findOne({ username });

    if (usernameCheck) {
      return res
        .status(409)
        .json({ msg: "Username already in use", status: false });
    }

    const portfolioDev = await Developer.create({
      username,
      names,
      address,
      email,
      github,
      linkedin,
      about,
      avatar
    });
    return res.json({ status: true, portfolioDev });
  } catch (err) {
    next(err);
  }
};
