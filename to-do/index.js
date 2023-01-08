const express = require("express");
const mongoose = require("mongoose");
//const url = "mongodb://root:example@localhost:27017/todo";
const url = "mongodb://root:example@localhost:27017/todo?authSource=admin"
const app = express();

mongoose.connect(url)
const con = mongoose.connection
mongoose.set('strictQuery', true)

con.on('open', function () {
    console.log("connected...")
})
app.use(express.json())
const listRouters = require('./routers/list')
app.use('/todo', listRouters)
app.listen(9000, (req, res) => {
    console.log("done")
})