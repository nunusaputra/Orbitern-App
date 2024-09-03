const express = require("express");
const router = express.Router();
const {
  getJobById,
  addJobs,
  getAllJob,
  updateJob,
  deleteJob,
} = require("../../controllers/mitraControllers/uploadJob");
const { verifyUserToken, verifyMitra } = require("../../middleware/auth");

router.get("/job", verifyUserToken, verifyMitra, getAllJob);
router.get("/job/:id", verifyUserToken, verifyMitra, getJobById);
router.post("/job", verifyUserToken, verifyMitra, addJobs);
router.put("/job/:id", verifyUserToken, verifyMitra, updateJob);
router.delete("/job/:id", verifyUserToken, verifyMitra, deleteJob);

module.exports = router;
