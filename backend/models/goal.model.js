const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "por favor añade un titulo"],
    },
    description: {
      type: String,
      required: [true, "por favor añade una descripción"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
