const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: `Welcome to the supportDesk API` });
});

app.use("/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
