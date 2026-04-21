require("dotenv").config();
const express = require("express");
const cors = require("cors");

const verifyRoutes = require("./routes/verifyRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/proof", verifyRoutes);

app.get("/", (req, res) => {
  res.send("Proofly API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
