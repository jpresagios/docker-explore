const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const connection = process.env.DATABASE_URL;

const connectDb = () => {
  return mongoose.connect(connection, { useNewUrlParser: true });
};

module.exports = connectDb;
