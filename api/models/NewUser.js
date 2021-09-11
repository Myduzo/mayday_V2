const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fisrtName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: false,
    },
    lastName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      max: 8,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
