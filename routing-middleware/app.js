const express = require('express')
const app = express()
const routes = require('./routes')

app.use("/items", routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


module.exports = app
