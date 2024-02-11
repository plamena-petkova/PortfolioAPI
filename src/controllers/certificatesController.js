const Certificates = require("../models/certificatesModel");

module.exports.getCertificatesByUsername = async (req, res, next) => {
  try {
    const developer = req.params.username;

    const certificates = await Certificates.find({ developer });

    if (!developer) {
      return res
        .status(404)
        .json({ message: "Certificates not found", status: false });
    }

    return res.json({ status: true, certificates });
  } catch (err) {
    next(err);
  }
};

module.exports.updateCertificates = async (req, res, next) => {
  try {
    const username = req.params.username;

    const updated = req.body;

    const certificates = await Certificates.findOneAndUpdate({ username }, updated);

    await certificates.save();

    return res.json({ message: "Certificates info updated", status: true });
  } catch (err) {
    next(err);
  }
};

module.exports.createCertificates = async (req, res, next) => {
  try {
    const { certificates, about, bestPractices,  developer } =
      req.body;
    const developerName = await Certificates.findOne({ developer });

    if (!developer) {
      return res
        .status(409)
        .json({ msg: "There is no such user", status: false });
    }

    const certificateInfo = await Certificates.create({
        certificates, about, bestPractices,  developer
    });
    return res.json({ status: true, certificateInfo });
  } catch (err) {
    next(err);
  }
};
