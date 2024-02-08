const { createDeveloper, updateDeveloper, getUserByUsername } = require("../controllers/developerController.js");
const { createProject, getProjectsByUsername, updateProject } = require("../controllers/projectsController.js");
const { createTimeline, getTimelineByUsername, updateTimeline } = require("../controllers/timelineController.js");


const router = require("express").Router();

router.post("/developer", createDeveloper);
router.get("/developer/:username", getUserByUsername);
router.put("/developer/:username", updateDeveloper)
router.post("/timeline", createTimeline);
router.get("/timeline/:username", getTimelineByUsername);
router.put("/timeline/:_id", updateTimeline);
router.post("/projects", createProject);
router.get("/projects/:username", getProjectsByUsername);
router.put("/projects/:_id", updateProject);



module.exports = router;