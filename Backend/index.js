const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user');
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require('cors');



dotenv.config();
app.use(cors());
mongoose.connect(process.env.MOGO_CONNECTION_URL)
    .then(() => {
        console.log("DB Connection successful")
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});




