const express = require("express");
const router = express.Router();
const { verifyUserToken, verifyMitra } = require("../../middleware/auth");
const {
  getLogbookMitraAll,
  getLogbookMitraById,
} = require("../../controllers/mahasiswaControllers/logbookController");

router.get("/logbook", verifyUserToken, verifyMitra, getLogbookMitraAll);
router.get("/logbook/:id", verifyUserToken, verifyMitra, getLogbookMitraById);

module.exports = router;
