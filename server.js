const express = require("express");
const app = express();

const mongooseConnection = require('./configuration/mongoConnection')
require("dotenv").config();

//Routes
app.use("/", require("./routes/routes"));

//MongoDB Connection
mongooseConnection();

app.listen(process.env.APP_PORT, () => {
    console.log("Server started at port ", process.env.APP_PORT)
});


