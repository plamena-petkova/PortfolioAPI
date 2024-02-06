const { createDeveloper, updateDeveloper, getUserByUsername } = require("../controllers/developerController.js");


const router = require("express").Router();

router.post("/developer", createDeveloper);
router.get("/developer/:username", getUserByUsername);
router.patch("/developer/:username", updateDeveloper)


module.exports = router;