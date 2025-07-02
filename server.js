const express = require("express");
const app = express();
const dotenv = require("dotenv");
const autRoutes = require("./routes/autRoutes.js");
const ativRoutes = require("./routes/ativRoutes.js");

dotenv.config();
const PORT = 4000;

app.use(express.json());

app.use("/aut", autRoutes);
app.use("/ativ", ativRoutes);

app.listen(PORT, (req, res) => {
  console.log("Backend executando na porta:", PORT);
});
