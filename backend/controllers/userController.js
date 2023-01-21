const registerUser = (req, res) => {
  res.send("Registering a User");
};
const loginUser = (req, res) => {
  res.send("Login User");
};

module.exports = {
  registerUser,
  loginUser,
};
