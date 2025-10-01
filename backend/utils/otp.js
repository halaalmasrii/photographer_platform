// utils/otp.js

function generateOTP(length = 6) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // رقم عشوائي من 0-9
  }
  return otp;
}

// مثال: صلاحية الكود دقيقة وحدة (60000 ms)
function isOTPValid(createdAt, validity = 60000) {
  return (Date.now() - createdAt) < validity;
}

module.exports = { generateOTP, isOTPValid };
