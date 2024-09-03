const express = require("express");
const router = express.Router();
const { verifyUserToken, verifyAdmin } = require("../../middleware/auth");
const {
  getDataPlotingAdmin,
  getDataPlotingByIDAdmin,
  deleteDospem,
} = require("../../controllers/mahasiswaControllers/suratMenyuratController");

router.get(
  "/dosen-pembimbing",
  verifyUserToken,
  verifyAdmin,
  getDataPlotingAdmin
);
router.get(
  "/dosen-pembimbing/:id",
  verifyUserToken,
  verifyAdmin,
  getDataPlotingByIDAdmin
);
router.delete(
  "/dosen-pembimbing/:id",
  verifyUserToken,
  verifyAdmin,
  deleteDospem
);

module.exports = router;
