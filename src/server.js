const express = require("express");
const http = require("http");
const https = require("https");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("DEV"));

const start = async (ip, port) => {
    await app.listen(port, ip, async () => {
        console.log("Server is running...");
    })
}

module.exports = {
    start
}