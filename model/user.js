const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  apellidos: {
    type: String,
  },
  carrera: {
    type: String,
  },
  ciclo: {
    type: String,
  },
  seccion: {
    type: String,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
