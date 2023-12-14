const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user')

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MOGO_CONNECTION_URL)
    .then(() => {
        console.log("DB Connection successful")
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });


app.use("/api/users", userRoute);
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});




