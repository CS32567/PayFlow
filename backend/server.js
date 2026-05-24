const express = require("express");

const cors = require("cors");

require("./database/db");

const walletRoutes = require(
  "./routes/walletRoutes"
);

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", walletRoutes);

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});