const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const developerRoute = require("./src/routes/developerRoutes")


const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection succesfully!");
  })
  .catch((e) => {
    console.log("Error", e);
  });


app.use(express.json());
app.use(cors());
app.use("/api", developerRoute);


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.PORT}`);
  });




