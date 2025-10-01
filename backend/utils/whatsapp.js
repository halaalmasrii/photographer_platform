// utils/whatsapp.js
const twilio = require("twilio");

// لازم نضيف هدول للـ .env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function sendWhatsAppMessage(to, message) {
  try {
    const response = await client.messages.create({
      from: "whatsapp:+14155238886", // رقم الـ sandbox من Twilio
      to: `whatsapp:${to}`, // مثال: whatsapp:+9639XXXXXXXX
      body: message,
    });
    console.log("WhatsApp message sent:", response.sid);
    return response;
  } catch (error) {
    console.error("Error sending WhatsApp message:", error.message);
    throw error;
  }
}

module.exports = { sendWhatsAppMessage };
