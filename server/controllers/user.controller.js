const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const tokenGen = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const getUser = async (req, res) => {
  const { id } = req.user;
  const { _id, name, email } = await User.findById(id).select("-password");

  res.status(201).json({
    _id,
    name,
    email,
  });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("por favor ingrese todos los campos");
  }

  const user = await User.findOne({
    email,
  });

  if (user) {
    throw new Error("usuario ya existe");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: tokenGen(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("no se pudo crear el usuario");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("por favor ingrese todos los campos");
  }

  const user = await User.findOne({
    email,
  });

  const match = await bcrypt.compare(password, user.password);

  if (user && match) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: tokenGen(user._id),
    });
  } else {
    throw new Error("usuario o contraseña incorrectos");
  }
};

module.exports = {
  getUser,
  registerUser,
  loginUser,
};
