const asyncHandler = require("express-async-handler");
// @route /api/users
// Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }
  res.json({ message: "Registering a User" });
});

// @route /api/users/login
// Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login User");
});

module.exports = {
  registerUser,
  loginUser,
};
