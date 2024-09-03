const express = require("express");
const router = express.Router();
const {
  getParticularJob,
  updateStatus,
  getApplicants,
  getListFinal,
  getApplicantsByID,
} = require("../../controllers/mitraControllers/handleJobController");
const { verifyUserToken, verifyMitra } = require("../../middleware/auth");

router.get("/applicants/:id", verifyUserToken, verifyMitra, getParticularJob);
router.get("/applicants", verifyUserToken, verifyMitra, getListFinal);
router.get("/applications", verifyUserToken, verifyMitra, getApplicants);
router.get(
  "/applications/:id",
  verifyUserToken,
  verifyMitra,
  getApplicantsByID
);
router.put(
  "/applications/status/:id",
  verifyUserToken,
  verifyMitra,
  updateStatus
);

module.exports = router;
