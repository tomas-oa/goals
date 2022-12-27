const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "por favor ingresa tu nombre"],
    },
    email: {
      type: String,
      required: [true, "por favor ingresa tu email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "por favor ingresa tu contraseña"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
