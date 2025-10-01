const express = require("express");
const router = express.Router();
const { createReservation, verifyReservation } = require("../controllers/reservationController");

router.post("/create", createReservation);
router.post("/verify", verifyReservation);

module.exports = router;
