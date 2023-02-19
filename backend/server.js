const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const colors = require("colors");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: `Welcome to the supportDesk API` });
});
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use("/api/ticket", require("./routes/ticketRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
