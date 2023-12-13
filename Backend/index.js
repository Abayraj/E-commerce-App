const express = require("express");
const app = express();
const mongoose = require("mongoose")

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server is on ${PORT}`)

});