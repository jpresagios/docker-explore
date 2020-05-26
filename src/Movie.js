const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String
  }
});

const User = mongoose.model("Movie", userSchema);

module.exports = User;
