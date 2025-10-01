const Reservation = require("../models/Reservation");
const { generateOTP } = require("../utils/otp");
const { sendWhatsAppMessage } = require("../utils/whatsapp");

exports.createReservation = async (req, res) => {
  try {
    const { client, service, date } = req.body;
    const otp = generateOTP();

    const reservation = new Reservation({ client, service, date, otp });
    await reservation.save();

    await sendWhatsAppMessage(client.phone, `رمز التحقق لحجزك هو: ${otp}`);

    res.json({ reservationId: reservation._id, message: "تم إنشاء الحجز وإرسال OTP" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyReservation = async (req, res) => {
  try {
    const { reservationId, otp } = req.body;
    const reservation = await Reservation.findById(reservationId).populate("client");

    if (!reservation) return res.status(404).json({ error: "الحجز غير موجود" });

    if (reservation.otp === otp) {
      reservation.verified = true;
      reservation.status = "confirmed";
      await reservation.save();
      return res.json({ success: true, message: "تم تأكيد الحجز ✅" });
    } else {
      return res.status(400).json({ success: false, message: "OTP غير صحيح ❌" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
