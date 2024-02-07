const { createDeveloper, updateDeveloper, getUserByUsername } = require("../controllers/developerController.js");
const { createTimeline, getTimelineByUsername, updateTimeline } = require("../controllers/timelineController.js");


const router = require("express").Router();

router.post("/developer", createDeveloper);
router.get("/developer/:username", getUserByUsername);
router.put("/developer/:username", updateDeveloper)
router.post("/timeline", createTimeline);
router.get("/timeline/:username", getTimelineByUsername);
router.put("/timeline/:_id", updateTimeline);



module.exports = router;