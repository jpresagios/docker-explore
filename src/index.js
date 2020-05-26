const express = require("express");
const app = express();
const connectDb = require("./connection");
const Movie = require("./Movie");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/movies", async (req, res) => {
  const movies = await Movie.find();

  res.json(movies);
});

app.post("/movie-create", async (req, res) => {
  const { title } = req.body;

  let movie = new Movie({ title });

  movie = await movie.save();

  res.send(movie);
});

app.listen(process.env.PORT, function() {
  console.log(`Listening on ${process.env.PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
