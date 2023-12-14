const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MOGO_CONNECTION_URL)
  .then(() => {
    console.log("DB Connection successful")

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err)=>{
    console.log(err);
})
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
