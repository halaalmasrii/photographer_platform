const Client = require("../models/Client");

exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

exports.createClient = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const client = new Client({ name, phone, email });
    await client.save();
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

