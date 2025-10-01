const express = require("express");
const router = express.Router();

// 🛠 لاحقاً منضيف صلاحيات الأدمن (CRUD شامل)
router.get("/", (req, res) => {
  res.json({ message: "لوحة التحكم قيد التطوير" });
});

module.exports = router;
