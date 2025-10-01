const { generateOTP } = require("./utils/otp");
const { sendWhatsAppMessage } = require("./utils/whatsapp");

(async () => {
  const otp = generateOTP();
  console.log("OTP:", otp);

  await sendWhatsAppMessage("+9639XXXXXXXX", `رمز التحقق الخاص بك هو: ${otp}`);
})();
