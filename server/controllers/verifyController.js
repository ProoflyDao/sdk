const { hashData, compareData } = require("../utils/hash");
const { v4: uuidv4 } = require("uuid");

// Dummy storage (replace with DB)
let records = [];

exports.createProof = async (req, res) => {
  try {
    const { data } = req.body;

    const hashed = await hashData(data);

    const record = {
      id: uuidv4(),
      original: data,
      hash: hashed,
      createdAt: new Date()
    };

    records.push(record);

    res.json({
      message: "Proof created successfully",
      id: record.id,
      hash: record.hash
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyProof = async (req, res) => {
  try {
    const { id, data } = req.body;

    const record = records.find(r => r.id === id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    const isValid = await compareData(data, record.hash);

    res.json({
      valid: isValid,
      message: isValid ? "Data is verified ✅" : "Data mismatch ❌"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
